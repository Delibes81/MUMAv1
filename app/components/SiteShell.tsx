"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reducedMotion) return;

    const root = document.documentElement;
    let animationFrame = 0;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;

    const renderPointer = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const offsetX = (currentX - 50) * 0.9;
      const offsetY = (currentY - 50) * 0.7;

      root.style.setProperty("--pointer-x", `${currentX.toFixed(2)}%`);
      root.style.setProperty("--pointer-y", `${currentY.toFixed(2)}%`);
      root.style.setProperty("--mouse-x", `${offsetX.toFixed(2)}px`);
      root.style.setProperty("--mouse-y", `${offsetY.toFixed(2)}px`);
      root.style.setProperty("--mouse-x-reverse", `${(-offsetX).toFixed(2)}px`);
      root.style.setProperty("--mouse-y-reverse", `${(-offsetY).toFixed(2)}px`);

      if (
        Math.abs(targetX - currentX) > 0.02 ||
        Math.abs(targetY - currentY) > 0.02
      ) {
        animationFrame = window.requestAnimationFrame(renderPointer);
      } else {
        animationFrame = 0;
      }
    };

    const requestRender = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(renderPointer);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;
      requestRender();
    };

    const resetPointer = () => {
      targetX = 50;
      targetY = 50;
      requestRender();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", resetPointer);
      window.cancelAnimationFrame(animationFrame);
      [
        "--pointer-x",
        "--pointer-y",
        "--mouse-x",
        "--mouse-y",
        "--mouse-x-reverse",
        "--mouse-y-reverse",
      ].forEach((property) => root.style.removeProperty(property));
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
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
