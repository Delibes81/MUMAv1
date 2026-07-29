import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${path}-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://www.mumach.com${path}`, {
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

async function htmlFor(path) {
  const response = await render(path);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("renders the high-conversion home page", async () => {
  const html = await htmlFor("/");
  assert.match(html, /Creamos marcas líderes/);
  assert.match(html, /Transformamos marcas en referentes del mercado/);
  assert.match(html, /Lo que tu marca necesita/);
  assert.match(html, /href="\/metodologia"/);
  assert.match(html, /href="\/servicios"/);
  assert.match(html, /href="\/contacto"/);
  assert.match(html, /https:\/\/w\.app\/muma-creative-house/);
  assert.match(html, /https:\/\/www\.mumach\.com\/og\.png/);
});

test("renders the complete methodology page", async () => {
  const html = await htmlFor("/metodologia");
  assert.match(html, /Metodología 360° \| MUMA Creative House/);
  assert.match(html, /IDENTIDAD VISUAL/);
  assert.match(html, /Proporcionamos un diagnóstico y una estrategia/);
  assert.match(html, /Auditoría/);
});

test("renders the complete services page", async () => {
  const html = await htmlFor("/servicios");
  assert.match(html, /Servicios creativos y marketing \| MUMA Creative House/);
  assert.match(html, /Diseño e Identidad/);
  assert.match(html, /Marketing y Medios/);
  assert.match(html, /Campañas publicitarias/);
});

test("renders the conversion-focused contact page", async () => {
  const html = await htmlFor("/contacto");
  assert.match(html, /Contacto \| MUMA Creative House/);
  assert.match(html, /\+52 55 35721488/);
  assert.match(html, /info@mumach\.com/);
  assert.match(html, /¡Agenda una reunión/);
});

test("does not include the disposable starter preview", async () => {
  const html = await htmlFor("/");
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  await assert.rejects(
    access(new URL("../app/_sites-preview/", import.meta.url)),
  );
});
