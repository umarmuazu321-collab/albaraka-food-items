import logo from '../logo.webp'

function Footer() {
  return (
    <footer className="site-footer">
      <style>{`
        .site-footer { padding: 68px 24px 24px; background: #073d28; color: #dbe8dc; }
        .footer-inner { width: min(1180px, 100%); margin: 0 auto; }
        .footer-main { display: grid; grid-template-columns: minmax(240px, 1.2fr) repeat(2, minmax(180px, .8fr)); gap: 50px; padding-bottom: 48px; }
        .footer-brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: .8px; text-decoration: none; }
        .footer-logo { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; background: #fff; }
        .footer-description { max-width: 300px; margin: 20px 0 0; color: #b9cfbd; font-size: 14px; line-height: 1.7; }
        .footer-heading { margin: 3px 0 19px; color: #ffb24f; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
        .footer-links { display: grid; gap: 11px; margin: 0; padding: 0; list-style: none; }
        .footer-links a { color: #dbe8dc; font-size: 14px; text-decoration: none; transition: color .2s ease; }
        .footer-links a:hover, .footer-links a:focus-visible { color: #ffb24f; }
        .footer-contact { display: grid; gap: 13px; margin: 0; }
        .footer-contact-row { display: grid; gap: 4px; }
        .footer-contact dt { color: #ffb24f; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .footer-contact dd { margin: 0; color: #dbe8dc; font-size: 13px; line-height: 1.55; }
        .footer-contact a { color: #dbe8dc; text-decoration-color: #e27a19; text-underline-offset: 3px; }
        .footer-contact a:hover, .footer-contact a:focus-visible { color: #ffb24f; }
        .footer-cta { display: inline-flex; align-items: center; justify-content: center; min-height: 42px; margin-top: 6px; padding: 0 16px; border-radius: 4px; background: #e27a19; color: #20332a; font-size: 13px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .footer-cta:hover, .footer-cta:focus-visible { background: #f19a35; transform: translateY(-2px); }
        .footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-top: 22px; border-top: 1px solid rgba(219, 232, 220, .2); color: #9fbaa5; font-size: 12px; line-height: 1.5; }
        @media (max-width: 760px) { .site-footer { padding: 55px 18px 22px; } .footer-main { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 38px 28px; } .footer-brand-block { grid-column: 1 / -1; } }
        @media (max-width: 460px) { .footer-main { grid-template-columns: 1fr; gap: 32px; } .footer-brand-block { grid-column: auto; } .footer-bottom { display: block; } }
      `}</style>
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#home" aria-label="ALBARKA FOOD ITEMS home">
              <img className="footer-logo" src={logo} alt="" />
              <span>ALBARKA FOOD ITEMS</span>
            </a>
            <p className="footer-description">Your convenient source for everyday food items and kitchen essentials in Kano.</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <dl className="footer-contact">
              <div className="footer-contact-row">
                <dt>Phone</dt>
                <dd><a href="tel:08067272441">08067272441</a></dd>
              </div>
              <div className="footer-contact-row">
                <dt>Customer Care / WhatsApp</dt>
                <dd><a href="tel:08133236467">08133236467</a></dd>
              </div>
              <div className="footer-contact-row">
                <dt>Location</dt>
                <dd>No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State, Nigeria.</dd>
              </div>
            </dl>
            <a className="footer-cta" href="https://wa.me/2348133236467" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ALBARKA FOOD ITEMS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
