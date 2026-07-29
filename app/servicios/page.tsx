import type { Metadata } from "next";
import { designServices, marketingServices, whatsappUrl } from "../data";

export const metadata: Metadata = {
  title: "Servicios creativos y marketing",
  description:
    "Branding, identidad visual, diseño, contenido, redes sociales y marketing en un servicio creativo 360°.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero page-hero-services holographic grain">
        <div className="page-hero-label">SERVICIO CREATIVO 360°</div>
        <h1 data-reveal>Del nombre<br />al mercado.</h1>
        <p data-reveal>
          Un equipo, una visión y todos los recursos para construir, activar y
          hacer crecer tu marca.
        </p>
      </section>

      <section className="services section-pad">
        <div className="section-label" data-reveal>
          <span>01</span> CATÁLOGO DE SERVICIOS
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

      <section className="conversion-band conversion-band-dark">
        <div data-reveal>
          <span>UNA SOLUCIÓN A TU MEDIDA</span>
          <h2>Armemos la combinación que tu marca necesita.</h2>
        </div>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
          ¡Agenda una reunión de diagnóstico! <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
