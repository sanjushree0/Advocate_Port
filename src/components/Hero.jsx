import ScalesEmblem from "./ScalesEmblem";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__lines" aria-hidden="true"></div>

      <div className="wrap hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Advocate · Coimbatore, Tamil Nadu</p>

          <h1 className="hero__name">
            Sivaramakrishnan J.
          </h1>

          <h2 className="hero__title">
            Senior Advocate &amp; Public Prosecutor
          </h2>

          <p className="hero__desc">
            Practicing before the District and High Courts for over three
            decades, with a focused command of Criminal, Civil and Property
            law. Measured in counsel, exacting in argument, and committed to
            representing every matter with integrity.
          </p>

          <div className="hero__actions">
            <a href="tel:+919443720367" className="btn btn-gold">
              Call for Consultation
            </a>
            <a
              href="https://wa.me/919443720367"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-num">30+</span>
              <span className="hero__meta-label">Years in Practice</span>
            </div>
            <div className="hero__meta-divider" aria-hidden="true"></div>
            <div className="hero__meta-item">
              <span className="hero__meta-num">2</span>
              <span className="hero__meta-label">Areas of Mastery — Criminal &amp; Civil</span>
            </div>
            <div className="hero__meta-divider" aria-hidden="true"></div>
            <div className="hero__meta-item">
              <span className="hero__meta-num">24/7</span>
              <span className="hero__meta-label">Client Availability</span>
            </div>
          </div>
        </div>

        <div className="hero__emblem">
          <ScalesEmblem />
        </div>
      </div>
    </section>
  );
}
