import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteShell } from "./components/SiteShell";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "www.mumach.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "MUMA Creative House | Creamos marcas líderes",
      template: "%s | MUMA Creative House",
    },
    description:
      "Transformamos marcas en referentes del mercado a través de estrategias diseñadas para vender.",
    keywords: [
      "agencia creativa",
      "branding",
      "identidad visual",
      "marketing",
      "diseño",
      "MUMA Creative House",
    ],
    openGraph: {
      title: "MUMA Creative House | Creamos marcas líderes",
      description:
        "Estrategia, identidad y crecimiento para convertir tu marca en un referente.",
      type: "website",
      locale: "es_MX",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 904,
          alt: "MUMA Creative House - Creamos marcas líderes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MUMA Creative House | Creamos marcas líderes",
      description:
        "Estrategia, identidad y crecimiento para convertir tu marca en un referente.",
      images: [`${origin}/og.png`],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f2ff45",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
