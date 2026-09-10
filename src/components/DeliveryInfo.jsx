const deliveryOptions = [
  {
    title: 'Easy Ordering',
    description: 'Choose your products and send your order directly through WhatsApp.',
    mark: '01',
  },
  {
    title: 'Convenient Delivery',
    description: 'We’ll confirm your order and help arrange delivery based on your location.',
    mark: '02',
  },
  {
    title: 'Direct Customer Support',
    description: 'Contact ALBARKA FOOD ITEMS directly for order updates and assistance.',
    mark: '03',
  },
]

function DeliveryInfo() {
  return (
    <section id="delivery" className="delivery-section">
      <style>{`
        .delivery-section { padding: 92px 24px 104px; background: #fffdf8; color: #20332a; }
        .delivery-inner { width: min(1180px, 100%); margin: 0 auto; }
        .delivery-heading { max-width: 720px; }
        .delivery-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .delivery-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .delivery-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .delivery-intro { max-width: 650px; margin: 18px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .delivery-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 42px; }
        .delivery-card { min-height: 190px; padding: 23px 20px; border: 1px solid #e1e7dd; border-radius: 8px; background: #fff; box-shadow: 0 8px 22px rgba(30, 58, 40, .05); }
        .delivery-mark { display: block; margin-bottom: 28px; color: #e27a19; font-size: 12px; font-weight: 700; letter-spacing: 1px; }
        .delivery-card-title { margin: 0; color: #0f5b38; font-size: 16px; line-height: 1.3; }
        .delivery-card-description { margin: 10px 0 0; color: #5f6f64; font-size: 13px; line-height: 1.6; }
        .delivery-cta-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; margin-top: 42px; padding: 24px 28px; border-radius: 8px; background: #f0f4eb; }
        .delivery-cta-text { margin: 0; color: #5f6f64; font-size: 14px; line-height: 1.6; }
        .delivery-cta-text strong { display: block; margin-bottom: 3px; color: #073d28; font: 700 23px/1.2 'Playfair Display', Georgia, serif; }
        .delivery-cta { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; min-height: 46px; padding: 0 18px; border-radius: 4px; background: #0f5b38; color: #fff; font-size: 13px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease; }
        .delivery-cta:hover, .delivery-cta:focus-visible { background: #073d28; transform: translateY(-2px); }
        @media (max-width: 760px) { .delivery-section { padding: 72px 18px 84px; } .delivery-grid { grid-template-columns: 1fr; gap: 14px; margin-top: 34px; } .delivery-card { min-height: 0; } .delivery-cta-row { align-items: stretch; flex-direction: column; gap: 18px; margin-top: 30px; padding: 22px 20px; } .delivery-cta { width: 100%; } }
      `}</style>
      <div className="delivery-inner">
        <div className="delivery-heading">
          <p className="delivery-kicker">07 / DELIVERY</p>
          <h2 className="delivery-title">Get Your Groceries Delivered</h2>
          <p className="delivery-intro">Order your everyday food essentials through WhatsApp and we&apos;ll help you arrange convenient delivery.</p>
        </div>
        <div className="delivery-grid">
          {deliveryOptions.map((option) => (
            <article className="delivery-card" key={option.title}>
              <span className="delivery-mark">{option.mark}</span>
              <h3 className="delivery-card-title">{option.title}</h3>
              <p className="delivery-card-description">{option.description}</p>
            </article>
          ))}
        </div>
        <div className="delivery-cta-row">
          <p className="delivery-cta-text"><strong>Ready to place your order?</strong>Contact ALBARKA FOOD ITEMS directly through WhatsApp.</p>
          <a className="delivery-cta" href="https://wa.me/2348133236467" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

export default DeliveryInfo
