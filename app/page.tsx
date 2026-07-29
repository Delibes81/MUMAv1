import type { Metadata } from "next";
import Link from "next/link";
import { pillars, whatsappUrl } from "./data";

export const metadata: Metadata = {
  title: "Creamos marcas líderes",
};

export default function Home() {
  return (
    <main>
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

      <section className="approach section-pad">
        <div className="section-label" data-reveal>
          <span>01</span> UNA SOLUCIÓN 360°
        </div>
        <div className="approach-intro">
          <h2 data-reveal>Lo que tu marca necesita<br />en un sólo lugar.</h2>
          <div className="intro-action" data-reveal>
            <p>
              Un sólo proveedor para darle solución a tus necesides. Nos
              encargamos de ella a través de nuestro servicio 360°.
            </p>
            <Link className="text-link" href="/metodologia">
              Conoce nuestro método <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="process-grid process-grid-home">
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

      <section className="method method-preview section-pad">
        <div className="method-head">
          <div className="section-label section-label-light" data-reveal>
            <span>02</span> METODOLOGÍA
          </div>
          <h2 data-reveal>Una marca sólida<br />no se improvisa.</h2>
          <div className="method-copy" data-reveal>
            <p>
              Trabajamos seis dimensiones conectadas para construir marcas
              coherentes, relevantes y listas para crecer.
            </p>
            <Link className="text-link text-link-light" href="/metodologia">
              Explora los seis pilares <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="pillar-index">
          {pillars.map((pillar) => (
            <Link href="/metodologia" key={pillar.title} data-reveal>
              <span>{pillar.number}</span>
              <strong>{pillar.title}</strong>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-services section-pad">
        <div className="section-label" data-reveal>
          <span>03</span> SERVICIOS
        </div>
        <div className="home-services-head">
          <h2 data-reveal>De la idea<br />al mercado.</h2>
          <p data-reveal>
            Estrategia, diseño y comunicación trabajando como una sola fuerza.
          </p>
        </div>
        <div className="home-service-links">
          <Link href="/servicios" className="home-service-card service-card-design" data-reveal>
            <span>01</span>
            <h3>Diseño e<br />Identidad</h3>
            <b aria-hidden="true">↗</b>
          </Link>
          <Link href="/servicios" className="home-service-card service-card-marketing" data-reveal>
            <span>02</span>
            <h3>Marketing<br />y Medios</h3>
            <b aria-hidden="true">↗</b>
          </Link>
        </div>
      </section>

      <section className="statement holographic grain">
        <p data-reveal>Tu marca no necesita hacer más ruido.</p>
        <h2 data-reveal>Necesita ser<br />inolvidable.</h2>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer" data-reveal>
          Hagámoslo realidad <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
