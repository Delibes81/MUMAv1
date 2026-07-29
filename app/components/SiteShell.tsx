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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
        <a className="header-cta desktop-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hablemos
        </a>
        <button 
          className="hamburger-btn"
          aria-label="Menú"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-header">
          <Wordmark />
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <nav className="mobile-nav">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="header-cta mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hablemos
          </a>
        </nav>
      </div>

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
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}
