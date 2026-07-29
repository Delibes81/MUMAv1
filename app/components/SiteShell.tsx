"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { whatsappUrl } from "../data";

const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`wordmark${footer ? " wordmark-footer" : ""}`}
      href="/"
      aria-label="MUMA Creative House, ir al inicio"
    >
      <span>MUMA</span>
      <small>creative<br />house</small>
    </Link>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <Wordmark />
        <nav aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hablemos
        </a>
      </header>

      {children}

      <footer className="footer holographic grain">
        <div className="footer-top">
          <div className="footer-title" data-reveal>
            <span>¿TIENES UN PROYECTO?</span>
            <h2>Contáctanos</h2>
          </div>
          <a
            className="footer-circle"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar una reunión de diagnóstico"
          >
            <span>AGENDA UNA<br />REUNIÓN</span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
        <div className="footer-contact">
          <a href="tel:+525535721488">+52 55 35721488</a>
          <a href="mailto:info@mumach.com">info@mumach.com</a>
          <a href="https://www.mumach.com" target="_blank" rel="noreferrer">www.mumach.com</a>
        </div>
        <div className="footer-bottom">
          <Wordmark footer />
          <span>CREAMOS MARCAS LÍDERES</span>
          <span>© {new Date().getFullYear()} MUMA</span>
        </div>
      </footer>

      <a
        className="floating-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agenda una reunión de diagnóstico por WhatsApp"
      >
        <span>Agenda</span>
        <b aria-hidden="true">↗</b>
      </a>
    </>
  );
}
