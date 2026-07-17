export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <span className="navbar__mark">SJ</span>
          <div>
            <p className="site-footer__name">Sivaramakrishnan J.</p>
            <p className="site-footer__role">Advocate &amp; Public Prosecutor</p>
          </div>
        </div>

        <nav className="site-footer__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#location">Chambers</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="site-footer__contact">
          <a href="tel:+919443720367">+91 94437 20367</a>
          <a href="mailto:advjsiv@gmail.com">advjsiv@gmail.com</a>
          <span>Coimbatore, Tamil Nadu</span>
        </div>
      </div>

      <div className="wrap site-footer__bottom">
        <p>&copy; 2026 Sivaramakrishnan J., Advocate. All rights reserved.</p>
        <p>Advocates Act, 1961 &mdash; Enrolled &amp; practicing in Tamil Nadu.</p>
      </div>
    </footer>
  );
}
