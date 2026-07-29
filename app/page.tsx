"use client";

import { useEffect } from "react";

const whatsappUrl = "https://w.app/muma-creative-house";

const pillars = [
  {
    number: "01",
    title: "ADN",
    items: ["Filosofía", "Valores", "Público objetivo", "Competencia"],
    accent: "lime",
  },
  {
    number: "02",
    title: "TONO",
    items: ["Nombre", "Voz", "Personalidad", "Narrativa"],
    accent: "yellow",
  },
  {
    number: "03",
    title: "IDENTIDAD VISUAL",
    items: ["Logotipo", "Sistema gráfico", "Colores", "Tipografías"],
    accent: "magenta",
  },
  {
    number: "04",
    title: "ESTRATEGIA",
    items: ["Comunicación", "Estructura", "Contenido"],
    accent: "coral",
  },
  {
    number: "05",
    title: "ACTIVACIÓN",
    items: ["Experiencias", "Contacto", "Comunidad"],
    accent: "cyan",
  },
  {
    number: "06",
    title: "CRECIMIENTO",
    items: ["Auditoría", "Gestión", "Seguimiento"],
    accent: "violet",
  },
];

const designServices = [
  "Creación de nombre",
  "Eslogan",
  "Redacción",
  "Logotipo",
  "Identidad visual",
  "Aplicaciones de marca",
  "Diseño de empaque",
  "Diseño gráfico",
  "Diseño web",
  "Diseño editorial",
  "Diseño de tipografía",
  "Ilustración",
];

const marketingServices = [
  "Estrategias de contenido",
  "Creación de contenido",
  "Manejo de redes sociales",
  "Fotografía",
  "Video",
  "Estudios de mercado",
  "Estrategias de Mkt",
  "Re-marketing",
  "Campañas publicitarias",
];

export default function Home() {
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
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="MUMA, volver al inicio">
          <span>MUMA</span>
          <small>creative<br />house</small>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#enfoque">Enfoque</a>
          <a href="#metodologia">Método</a>
          <a href="#servicios">Servicios</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Hablemos
        </a>
      </header>

      <section className="hero holographic grain" id="inicio">
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="hero-kicker">MUMA CREATIVE HOUSE <span>·</span> MÉXICO</div>
        <div className="hero-content">
          <h1 data-reveal>Creamos marcas<br />líderes</h1>
          <div className="hero-support" data-reveal>
            <h2>
              Transformamos marcas en referentes del mercado a través de
              estrategias diseñadas para vender.
            </h2>
            <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              ¡Agenda una reunión de diagnóstico!
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-bottom" aria-hidden="true">
          <span>ESTRATEGIA</span>
          <span>IDENTIDAD</span>
          <span>CRECIMIENTO</span>
        </div>
      </section>

      <section className="approach section-pad" id="enfoque">
        <div className="section-label" data-reveal>
          <span>01</span> NUESTRO ENFOQUE
        </div>
        <div className="approach-intro">
          <h2 data-reveal>Lo que tu marca necesita<br />en un sólo lugar.</h2>
          <p data-reveal>
            Un sólo proveedor para darle solución a tus necesides. Nos
            encargamos de ella a través de nuestro servicio 360°.
          </p>
        </div>
        <div className="process-grid">
          <article className="process-card" data-reveal>
            <span>01</span>
            <p>Identificamos en qué punto de madurez se encuentra tu marca.</p>
          </article>
          <article className="process-card process-featured grain" data-reveal>
            <span>02</span>
            <p>Proporcionamos un diagnóstico y una estrategia.</p>
          </article>
          <article className="process-card" data-reveal>
            <span>03</span>
            <p>Implementamos el plan desde todos los ángulos.</p>
          </article>
        </div>
      </section>

      <section className="method section-pad" id="metodologia">
        <div className="method-head">
          <div className="section-label section-label-light" data-reveal>
            <span>02</span> METODOLOGÍA
          </div>
          <h2 data-reveal>Construimos marcas<br />desde adentro.</h2>
          <p data-reveal>
            Seis pilares. Una visión completa. Todo lo necesario para convertir
            una buena marca en una marca líder.
          </p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <article
              className={`pillar-card pillar-${pillar.accent}`}
              key={pillar.title}
              data-reveal
              tabIndex={0}
            >
              <div className="pillar-top">
                <span>{pillar.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{pillar.title}</h3>
              <ul>
                {pillar.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="statement holographic grain">
        <p data-reveal>Tu marca no necesita hacer más ruido.</p>
        <h2 data-reveal>Necesita ser<br />inolvidable.</h2>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer" data-reveal>
          Hagámoslo realidad <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="services section-pad" id="servicios">
        <div className="section-label" data-reveal>
          <span>03</span> CATÁLOGO DE SERVICIOS
        </div>
        <div className="services-title">
          <h2 data-reveal>Todo lo que tu marca<br />necesita para crecer.</h2>
          <p data-reveal>De la idea a la ejecución. De la identidad al mercado.</p>
        </div>
        <div className="services-columns">
          <article className="service-group" data-reveal>
            <div className="service-group-head">
              <span>01</span>
              <h3>Diseño e Identidad</h3>
            </div>
            <ul>
              {designServices.map((service) => (
                <li key={service}><span>{service}</span><span aria-hidden="true">↗</span></li>
              ))}
            </ul>
          </article>
          <article className="service-group" data-reveal>
            <div className="service-group-head">
              <span>02</span>
              <h3>Marketing y Medios</h3>
            </div>
            <ul>
              {marketingServices.map((service) => (
                <li key={service}><span>{service}</span><span aria-hidden="true">↗</span></li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <footer className="footer holographic grain" id="contacto">
        <div className="footer-top">
          <div className="footer-title" data-reveal>
            <span>¿TIENES UN PROYECTO?</span>
            <h2>Contáctanos</h2>
          </div>
          <a className="footer-circle" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar una reunión de diagnóstico">
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
          <a className="wordmark wordmark-footer" href="#inicio">
            <span>MUMA</span>
            <small>creative<br />house</small>
          </a>
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
    </main>
  );
}
