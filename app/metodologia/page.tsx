import ArrowUpRight from "../components/ArrowUpRight";
import type { Metadata } from "next";
import { pillars, whatsappUrl } from "../data";

export const metadata: Metadata = {
  title: "Metodología 360°",
  description:
    "Conoce el método de MUMA para diagnosticar, construir, activar y hacer crecer marcas líderes.",
};

export default function MethodologyPage() {
  return (
    <main>
      <section className="page-hero page-hero-method holographic grain">
        <div className="page-hero-label">METODOLOGÍA 360°</div>
        <h1 data-reveal>De la esencia<br />al crecimiento.</h1>
        <p data-reveal>
          Una ruta completa para convertir intención en estrategia y estrategia
          en una marca que vende.
        </p>
      </section>

      <section className="approach section-pad">
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

      <section className="method section-pad">
        <div className="method-head">
          <div className="section-label section-label-light" data-reveal>
            <span>02</span> PILARES DE TRABAJO
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
                <ArrowUpRight aria-hidden="true" />
              </div>
              <h3>{pillar.title}</h3>
              <ul>
                {pillar.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="conversion-band">
        <div data-reveal>
          <span>EL SIGUIENTE PASO</span>
          <h2>Descubre en qué punto está tu marca.</h2>
        </div>
        <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
          ¡Agenda una reunión de diagnóstico! <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
