import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import useReveal from "../hooks/useReveal";

const CHANNELS = [
  {
    icon: <FaPhoneAlt />,
    label: "Call the Chambers",
    value: "+91 94437 20367",
    sub: "Alt: +91 86680 39678",
    href: "tel:+919443720367",
    external: false,
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+91 94437 20367",
    sub: "For quick queries & scheduling",
    href: "https://wa.me/919443720367",
    external: true,
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "advjsiv@gmail.com",
    sub: "For case documents & briefs",
    href: "mailto:advjsiv@gmail.com",
    external: false,
  },
];

export default function Contact() {
  const headRef = useReveal();

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div ref={headRef} className="contact__head reveal">
          <p className="eyebrow contact__eyebrow">Get in Touch</p>
          <h2 className="section-heading contact__heading">
            Consultations by appointment, Coimbatore &amp; surrounding courts.
          </h2>
          <p className="contact__desc">
            Reach out directly to discuss your matter. Every consultation
            begins with a clear, honest assessment of where you stand.
          </p>
        </div>

        <div className="contact__grid">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="contact__card"
            >
              <span className="contact__icon">{c.icon}</span>
              <span className="contact__card-label">{c.label}</span>
              <span className="contact__card-value">{c.value}</span>
              <span className="contact__card-sub">{c.sub}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
