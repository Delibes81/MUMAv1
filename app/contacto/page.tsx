import type { Metadata } from "next";
import { whatsappUrl } from "../data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una reunión de diagnóstico con MUMA Creative House y descubre el siguiente paso para tu marca.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="contact-hero holographic grain">
        <div className="contact-hero-copy">
          <div className="page-hero-label">EMPECEMOS</div>
          <h1 data-reveal>Hablemos de<br />tu marca.</h1>
          <p data-reveal>
            Cuéntanos dónde estás. Juntos definiremos qué necesita tu marca para
            avanzar con claridad.
          </p>
        </div>
        <a
          className="contact-orbit"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar una reunión de diagnóstico"
        >
          <span>¡Agenda una reunión<br />de diagnóstico!</span>
          <b aria-hidden="true">↗</b>
        </a>
      </section>

      <section className="contact-options section-pad">
        <div className="section-label" data-reveal>
          <span>01</span> CONTACTO DIRECTO
        </div>
        <h2 data-reveal>Contáctanos</h2>
        <div className="contact-list">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" data-reveal>
            <small>WHATSAPP</small>
            <span>+52 55 35721488</span>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="mailto:info@mumach.com" data-reveal>
            <small>CORREO</small>
            <span>info@mumach.com</span>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="https://www.mumach.com" target="_blank" rel="noreferrer" data-reveal>
            <small>SITIO WEB</small>
            <span>www.mumach.com</span>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
        <p className="contact-note" data-reveal>
          El primer paso es una conversación. El siguiente, una estrategia.
        </p>
      </section>
    </main>
  );
}
