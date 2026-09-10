const offers = [
  {
    title: 'Everyday Food Essentials',
    description: 'A range of food items for everyday cooking and household needs.',
  },
  {
    title: 'Multiple Product Choices',
    description: 'Different product options across common grocery and kitchen categories.',
  },
  {
    title: 'Convenient Ordering',
    description: 'A simple way to ask about available items and place an enquiry.',
  },
  {
    title: 'Customer Care',
    description: 'A direct point of contact for product questions and general enquiries.',
  },
]

function About() {
  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section { padding: 98px 24px 112px; background: #fbfaf5; color: #20332a; }
        .about-inner { width: min(1180px, 100%); margin: 0 auto; }
        .about-heading { max-width: 760px; }
        .about-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .about-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .about-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .about-intro { max-width: 660px; margin: 19px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .about-offer-heading { margin: 57px 0 20px; color: #073d28; font: 700 28px/1.2 'Playfair Display', Georgia, serif; }
        .about-offers { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .about-offer { min-height: 156px; padding: 23px 20px; border: 1px solid #e1e7dd; border-radius: 8px; background: #fff; box-shadow: 0 8px 22px rgba(30, 58, 40, .05); }
        .about-offer-number { display: block; margin-bottom: 20px; color: #e27a19; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
        .about-offer-title { margin: 0; color: #0f5b38; font-size: 16px; line-height: 1.3; }
        .about-offer-description { margin: 9px 0 0; color: #5f6f64; font-size: 13px; line-height: 1.6; }
        .about-details { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, .7fr); gap: 40px; align-items: stretch; margin-top: 58px; padding-top: 42px; border-top: 1px solid #dfe6db; }
        .about-details-title { margin: 0 0 22px; color: #073d28; font: 700 28px/1.2 'Playfair Display', Georgia, serif; }
        .business-info { display: grid; gap: 15px; margin: 0; }
        .business-row { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 18px; padding-bottom: 15px; border-bottom: 1px solid #e1e7dd; }
        .business-row dt { color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .business-row dd { margin: 0; color: #5f6f64; font-size: 14px; line-height: 1.55; }
        .about-contact { display: flex; flex-direction: column; justify-content: center; padding: 31px; border-radius: 8px; background: #0f5b38; color: #fff; box-shadow: 0 14px 30px rgba(7, 61, 40, .14); }
        .about-contact-label { margin: 0 0 11px; color: #ffb24f; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
        .about-contact-title { margin: 0; color: #fff; font: 700 28px/1.2 'Playfair Display', Georgia, serif; }
        .about-contact-text { margin: 12px 0 24px; color: #dbe8dc; font-size: 14px; line-height: 1.65; }
        .about-whatsapp { display: inline-flex; align-items: center; justify-content: center; min-height: 46px; padding: 0 18px; border-radius: 4px; background: #e27a19; color: #20332a; font-size: 13px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .about-whatsapp:hover, .about-whatsapp:focus-visible { background: #f19a35; transform: translateY(-2px); }
        @media (max-width: 900px) { .about-offers { grid-template-columns: repeat(2, minmax(0, 1fr)); } .about-details { grid-template-columns: 1fr; } }
        @media (max-width: 680px) { .about-section { padding: 72px 18px 84px; } .about-offer-heading { margin-top: 43px; } .about-details { gap: 30px; margin-top: 45px; padding-top: 32px; } }
        @media (max-width: 460px) { .about-offers { grid-template-columns: 1fr; } .about-offer { min-height: 0; } .business-row { grid-template-columns: 1fr; gap: 5px; } .about-contact { padding: 25px 21px; } }
      `}</style>
      <div className="about-inner">
        <div className="about-heading">
          <p className="about-kicker">04 / ABOUT US</p>
          <h2 className="about-title">Your Trusted Source for Everyday Food Essentials.</h2>
          <p className="about-intro">ALBARKA FOOD ITEMS provides a range of everyday food items and household kitchen essentials for customers in Kano. We make it easy to enquire about products and connect with our business directly.</p>
        </div>

        <h3 className="about-offer-heading">What We Offer</h3>
        <div className="about-offers">
          {offers.map((offer, index) => (
            <article className="about-offer" key={offer.title}>
              <span className="about-offer-number">0{index + 1}</span>
              <h4 className="about-offer-title">{offer.title}</h4>
              <p className="about-offer-description">{offer.description}</p>
            </article>
          ))}
        </div>

        <div className="about-details">
          <div>
            <h3 className="about-details-title">Business Information</h3>
            <dl className="business-info">
              <div className="business-row">
                <dt>Business</dt>
                <dd>ALBARKA FOOD ITEMS</dd>
              </div>
              <div className="business-row">
                <dt>Location</dt>
                <dd>No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State, Nigeria.</dd>
              </div>
              <div className="business-row">
                <dt>Tel</dt>
                <dd>08067272441</dd>
              </div>
              <div className="business-row">
                <dt>Customer Care / WhatsApp</dt>
                <dd>08133236467</dd>
              </div>
            </dl>
          </div>

          <aside className="about-contact">
            <p className="about-contact-label">Customer Care / WhatsApp</p>
            <h3 className="about-contact-title">Let&apos;s talk about what you need.</h3>
            <p className="about-contact-text">Contact ALBARKA FOOD ITEMS for product questions and ordering enquiries.</p>
            <a className="about-whatsapp" href="https://wa.me/2348133236467" target="_blank" rel="noreferrer">Order / Contact Us on WhatsApp</a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
