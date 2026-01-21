#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_DIR = path.join(__dirname, "..", ".astro", "cache");

function getCacheStats() {
	if (!fs.existsSync(CACHE_DIR)) {
		console.log("No cache directory found");
		return;
	}

	const files = fs.readdirSync(CACHE_DIR);

	if (files.length === 0) {
		console.log("Cache is empty");
		return;
	}

	console.log(`\nCache Statistics (${files.length} entries)\n`);

	let totalSize = 0;

	files.forEach((file) => {
		const cachePath = path.join(CACHE_DIR, file);
		const stats = fs.statSync(cachePath);
		const content = fs.readFileSync(cachePath, "utf-8");
		const entry = JSON.parse(content);

		const ageMinutes = Math.round((Date.now() - entry.timestamp) / 1000 / 60);
		const ttlHours = Math.round(entry.ttl / 1000 / 60 / 60);
		const sizeKB = (stats.size / 1024).toFixed(2);
		const isValid = Date.now() - entry.timestamp < entry.ttl;
		const status = isValid ? "✓ valid" : "✗ expired";

		const key = file.replace(".json", "");
		console.log(
			`  ${key}:\n    Status: ${status}\n    Age: ${ageMinutes}m\n    TTL: ${ttlHours}h\n    Size: ${sizeKB} KB\n`,
		);

		totalSize += stats.size;
	});

	console.log(`  Total cache size: ${(totalSize / 1024).toFixed(2)} KB\n`);
}

getCacheStats();
