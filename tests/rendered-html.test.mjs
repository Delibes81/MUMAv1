import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://www.mumach.com/", {
      headers: { accept: "text/html", host: "www.mumach.com" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete MUMA landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MUMA Creative House \| Creamos marcas líderes/);
  assert.match(html, /Creamos marcas/);
  assert.match(html, /Transformamos marcas en referentes del mercado/);
  assert.match(html, /Lo que tu marca necesita/);
  assert.match(html, /IDENTIDAD VISUAL/);
  assert.match(html, /Marketing y Medios/);
  assert.match(html, /\+52 55 35721488/);
  assert.match(html, /https:\/\/w\.app\/muma-creative-house/);
  assert.match(html, /https:\/\/www\.mumach\.com\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("removes the disposable starter preview", async () => {
  await assert.rejects(
    access(new URL("../app/_sites-preview/", import.meta.url)),
  );
});
