const businessAddress = 'No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State, Nigeria.'
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessAddress)}`

function Location() {
  return (
    <section id="location" className="location-section">
      <style>{`
        .location-section { padding: 92px 24px 104px; background: #fbfaf5; color: #20332a; }
        .location-inner { width: min(1180px, 100%); margin: 0 auto; }
        .location-heading { max-width: 720px; }
        .location-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .location-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .location-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .location-intro { max-width: 620px; margin: 18px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .location-layout { display: grid; grid-template-columns: minmax(0, .9fr) minmax(400px, 1.1fr); gap: 42px; align-items: stretch; margin-top: 52px; }
        .location-card, .location-map-card { border: 1px solid #e1e7dd; border-radius: 8px; background: #fff; box-shadow: 0 8px 22px rgba(30, 58, 40, .05); }
        .location-card { padding: 30px; }
        .location-card-title { margin: 0 0 24px; color: #073d28; font: 700 28px/1.2 'Playfair Display', Georgia, serif; }
        .location-details { display: grid; gap: 17px; margin: 0; }
        .location-detail { padding-bottom: 17px; border-bottom: 1px solid #e1e7dd; }
        .location-detail:last-child { padding-bottom: 0; border-bottom: 0; }
        .location-detail dt { margin-bottom: 5px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .location-detail dd { margin: 0; color: #5f6f64; font-size: 14px; line-height: 1.6; }
        .location-detail a { color: #5f6f64; text-decoration-color: #e27a19; text-underline-offset: 3px; }
        .location-detail a:hover, .location-detail a:focus-visible { color: #0f5b38; }
        .location-map-card { display: flex; min-height: 390px; flex-direction: column; overflow: hidden; }
        .location-map-preview { display: grid; flex: 1; min-height: 270px; place-items: center; padding: 30px; background: #e5ecdd; color: #0f5b38; text-align: center; }
        .location-map-mark { display: grid; width: 62px; height: 62px; margin: 0 auto 16px; place-items: center; border: 2px solid #e27a19; border-radius: 50%; background: #fff; color: #e27a19; font-size: 27px; }
        .location-map-label { max-width: 360px; margin: 0 auto; color: #073d28; font-size: 15px; font-weight: 700; line-height: 1.5; }
        .location-map-address { max-width: 390px; margin: 9px auto 0; color: #5f6f64; font-size: 13px; line-height: 1.6; }
        .location-map-cta { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; margin-top: 20px; padding: 0 18px; border-radius: 4px; background: #0f5b38; color: #fff; font-size: 13px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .location-map-cta:hover, .location-map-cta:focus-visible { background: #073d28; transform: translateY(-2px); }
        .location-map-caption { margin: 0; padding: 15px 20px; color: #5f6f64; font-size: 12px; line-height: 1.5; }
        @media (max-width: 900px) { .location-layout { grid-template-columns: 1fr; gap: 24px; } }
        @media (max-width: 680px) { .location-section { padding: 72px 18px 84px; } .location-layout { margin-top: 38px; } .location-card { padding: 24px 20px; } .location-map-card { min-height: 360px; } .location-map-preview { min-height: 250px; padding: 24px 18px; } }
      `}</style>
      <div className="location-inner">
        <div className="location-heading">
          <p className="location-kicker">06 / FIND US</p>
          <h2 className="location-title">Visit ALBARKA FOOD ITEMS</h2>
          <p className="location-intro">Find our store in Kano and visit us for your everyday food essentials.</p>
        </div>
        <div className="location-layout">
          <div className="location-card">
            <h3 className="location-card-title">Business Location</h3>
            <dl className="location-details">
              <div className="location-detail">
                <dt>Business</dt>
                <dd>ALBARKA FOOD ITEMS</dd>
              </div>
              <div className="location-detail">
                <dt>Address</dt>
                <dd>{businessAddress}</dd>
              </div>
              <div className="location-detail">
                <dt>Phone</dt>
                <dd><a href="tel:08067272441">08067272441</a></dd>
              </div>
              <div className="location-detail">
                <dt>Customer Care / WhatsApp</dt>
                <dd><a href="https://wa.me/2348133236467" target="_blank" rel="noopener noreferrer">08133236467</a></dd>
              </div>
            </dl>
          </div>
          <div className="location-map-card">
            <div className="location-map-preview">
              <div>
                <div className="location-map-mark" aria-hidden="true">&#9679;</div>
                <p className="location-map-label">Find ALBARKA FOOD ITEMS in Kano</p>
                <p className="location-map-address">{businessAddress}</p>
                <a className="location-map-cta" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </div>
            </div>
            <p className="location-map-caption">Open the address in Google Maps for directions and location details.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
