import fs from "node:fs";
import path from "node:path";

interface CacheEntry<T> {
  timestamp: number;
  ttl: number;
  data: T;
}

interface CacheOptions {
  ttl?: number;
  force?: boolean;
}

const CACHE_DIR = path.join(process.cwd(), ".astro", "cache");
const DEFAULT_TTL = 6 * 60 * 60 * 1000;
const BYPASS_CACHE = process.env.CACHE_BYPASS === "true";
const CACHE_ONLY = process.env.CACHE_ONLY === "true";

function ensureCacheDir(): void {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function getCachePath(key: string): string {
  return path.join(CACHE_DIR, `${key}.json`);
}

function isCacheValid<T>(entry: CacheEntry<T>): boolean {
  const now = Date.now();
  const age = now - entry.timestamp;
  return age < entry.ttl;
}

export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: CacheOptions = {},
): Promise<T> {
  const ttl = options.ttl || DEFAULT_TTL;
  const force = options.force || BYPASS_CACHE;

  ensureCacheDir();

  const cachePath = getCachePath(key);
  const cacheExists = fs.existsSync(cachePath);

  if (!force && cacheExists) {
    try {
      const content = fs.readFileSync(cachePath, "utf-8");
      const entry: CacheEntry<T> = JSON.parse(content);

      if (isCacheValid(entry)) {
        const ageMinutes = Math.round(
          (Date.now() - entry.timestamp) / 1000 / 60,
        );
        console.log(`[cache] ✓ Cache hit for '${key}' (${ageMinutes}m old)`);
        return entry.data;
      } else {
        console.log(`[cache] ⚠ Cache expired for '${key}', refreshing...`);
      }
    } catch (error) {
      console.warn(`[cache] Failed to read cache for '${key}':`, error);
    }
  }

  if (CACHE_ONLY && cacheExists) {
    console.log(`[cache] ⚡ Using stale cache for '${key}' (CACHE_ONLY mode)`);
    const content = fs.readFileSync(cachePath, "utf-8");
    const entry: CacheEntry<T> = JSON.parse(content);
    return entry.data;
  }

  try {
    console.log(`[cache] ⟳ Fetching fresh data for '${key}'...`);
    const data = await fetcher();

    const entry: CacheEntry<T> = {
      timestamp: Date.now(),
      ttl,
      data,
    };

    fs.writeFileSync(cachePath, JSON.stringify(entry, null, 2), "utf-8");
    console.log(`[cache] ✓ Cached '${key}'`);

    return data;
  } catch (error) {
    if (cacheExists) {
      console.warn(
        `[cache] ⚠ Fetch failed for '${key}', using stale cache as fallback`,
      );
      const content = fs.readFileSync(cachePath, "utf-8");
      const entry: CacheEntry<T> = JSON.parse(content);
      return entry.data;
    }
    throw error;
  }
}

export function clearCache(key?: string): void {
  ensureCacheDir();

  if (key) {
    const cachePath = getCachePath(key);
    if (fs.existsSync(cachePath)) {
      fs.unlinkSync(cachePath);
      console.log(`[cache] ✓ Cleared cache for '${key}'`);
    }
  } else {
    const files = fs.readdirSync(CACHE_DIR);
    files.forEach((file) => {
      fs.unlinkSync(path.join(CACHE_DIR, file));
    });
    console.log(`[cache] ✓ Cleared all cache (${files.length} entries)`);
  }
}

export function getCacheStats(): void {
  ensureCacheDir();

  const files = fs.readdirSync(CACHE_DIR);

  if (files.length === 0) {
    console.log("[cache] No cached entries");
    return;
  }

  console.log(`[cache] Cache statistics (${files.length} entries):`);

  files.forEach((file) => {
    const cachePath = path.join(CACHE_DIR, file);
    const content = fs.readFileSync(cachePath, "utf-8");
    const entry: CacheEntry<unknown> = JSON.parse(content);

    const ageMinutes = Math.round((Date.now() - entry.timestamp) / 1000 / 60);
    const ttlHours = Math.round(entry.ttl / 1000 / 60 / 60);
    const isValid = isCacheValid(entry);
    const status = isValid ? "✓ valid" : "✗ expired";

    const key = file.replace(".json", "");
    console.log(
      `  - ${key}: ${status} (${ageMinutes}m old, TTL: ${ttlHours}h)`,
    );
  });
}
