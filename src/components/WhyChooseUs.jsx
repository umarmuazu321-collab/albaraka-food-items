const reasons = [
  {
    title: 'Quality Food Items',
    description: 'A practical selection of everyday food essentials for your household needs.',
    mark: '01',
  },
  {
    title: 'Wide Product Selection',
    description: 'Choose from rice, pasta, noodles, flour, cooking oils, seasoning and other food essentials.',
    mark: '02',
  },
  {
    title: 'Easy WhatsApp Ordering',
    description: 'Select the items you need and send your order directly to ALBARKA FOOD ITEMS on WhatsApp.',
    mark: '03',
  },
  {
    title: 'Convenient Location',
    description: 'Find us at No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State, Nigeria.',
    mark: '04',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-section">
      <style>{`
        .why-choose-section { padding: 92px 24px 104px; background: #fffdf8; color: #20332a; }
        .why-choose-inner { width: min(1180px, 100%); margin: 0 auto; }
        .why-choose-heading { max-width: 720px; }
        .why-choose-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .why-choose-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .why-choose-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .why-choose-intro { max-width: 650px; margin: 18px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .why-choose-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 44px; }
        .why-choose-card { min-height: 205px; padding: 23px 20px; border: 1px solid #e1e7dd; border-radius: 8px; background: #fff; box-shadow: 0 8px 22px rgba(30, 58, 40, .05); }
        .why-choose-mark { display: block; margin-bottom: 30px; color: #e27a19; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
        .why-choose-card-title { margin: 0; color: #0f5b38; font-size: 16px; line-height: 1.3; }
        .why-choose-card-description { margin: 10px 0 0; color: #5f6f64; font-size: 13px; line-height: 1.6; }
        .why-choose-action { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 42px; padding: 25px 28px; border-radius: 8px; background: #0f5b38; box-shadow: 0 14px 30px rgba(7, 61, 40, .14); }
        .why-choose-action-text { margin: 0; color: #dbe8dc; font-size: 14px; line-height: 1.6; }
        .why-choose-action-text strong { display: block; margin-bottom: 3px; color: #fff; font: 700 24px/1.2 'Playfair Display', Georgia, serif; }
        .why-choose-cta { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; min-height: 46px; padding: 0 18px; border-radius: 4px; background: #e27a19; color: #20332a; font-size: 13px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .why-choose-cta:hover, .why-choose-cta:focus-visible { background: #f19a35; transform: translateY(-2px); }
        @media (max-width: 900px) { .why-choose-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 680px) { .why-choose-section { padding: 72px 18px 84px; } .why-choose-grid { gap: 14px; margin-top: 34px; } .why-choose-card { min-height: 0; } .why-choose-action { align-items: stretch; flex-direction: column; gap: 18px; margin-top: 30px; padding: 23px 20px; } .why-choose-cta { width: 100%; } }
        @media (max-width: 460px) { .why-choose-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="why-choose-inner">
        <div className="why-choose-heading">
          <p className="why-choose-kicker">03 / WHY CHOOSE US</p>
          <h2 className="why-choose-title">Quality Food Items. Simple Ordering.</h2>
          <p className="why-choose-intro">Shop everyday food essentials from ALBARKA FOOD ITEMS and send your order directly to us on WhatsApp for current price and availability.</p>
        </div>
        <div className="why-choose-grid">
          {reasons.map((reason) => (
            <article className="why-choose-card" key={reason.title}>
              <span className="why-choose-mark">{reason.mark}</span>
              <h3 className="why-choose-card-title">{reason.title}</h3>
              <p className="why-choose-card-description">{reason.description}</p>
            </article>
          ))}
        </div>
        <div className="why-choose-action">
          <p className="why-choose-action-text"><strong>Ready to order?</strong>Send your enquiry directly to ALBARKA FOOD ITEMS.</p>
          <a className="why-choose-cta" href="https://wa.me/2348133236467" target="_blank" rel="noreferrer">Order on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
