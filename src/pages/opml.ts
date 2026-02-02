import type { APIRoute } from "astro";

const MINIFLUX_BASE_URL = import.meta.env.MINIFLUX_BASE_URL;
const MINIFLUX_API_TOKEN = import.meta.env.MINIFLUX_API_TOKEN;

export const GET: APIRoute = async () => {
  if (!MINIFLUX_BASE_URL || !MINIFLUX_API_TOKEN) {
    return new Response("Miniflux configuration missing", { status: 500 });
  }

  try {
    const response = await fetch(`${MINIFLUX_BASE_URL}/v1/export`, {
      headers: {
        "X-Auth-Token": MINIFLUX_API_TOKEN,
      },
    });

    if (!response.ok) {
      return new Response(`Miniflux error: ${response.status}`, {
        status: response.status,
      });
    }

    const opml = await response.text();

    return new Response(opml, {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch OPML", { status: 502 });
  }
};
