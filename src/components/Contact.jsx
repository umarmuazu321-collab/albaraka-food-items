import { useState } from 'react'

const whatsappNumber = '2348133236467'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    message: '',
  })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.phone.trim() || !form.product.trim()) {
      setError('Please enter your full name, phone number, and product or item.')
      return
    }

    const message = `Hello ALBARKA FOOD ITEMS,

Name: ${form.name.trim()}
Phone: ${form.phone.trim()}
Product/Item: ${form.product.trim()}
Message: ${form.message.trim()}

I would like to make an inquiry.`

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section { padding: 98px 24px 112px; background: #fffdf8; color: #20332a; }
        .contact-inner { width: min(1180px, 100%); margin: 0 auto; }
        .contact-heading { max-width: 700px; }
        .contact-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .contact-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .contact-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .contact-intro { max-width: 620px; margin: 19px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .contact-layout { display: grid; grid-template-columns: minmax(0, .85fr) minmax(400px, 1.15fr); gap: 42px; margin-top: 57px; }
        .contact-info-card, .contact-form-card { border: 1px solid #e1e7dd; border-radius: 16px; background: #fff; box-shadow: 0 12px 34px rgba(30, 58, 40, .07); }
        .contact-info-card { padding: 30px; }
        .contact-card-title { margin: 0 0 23px; color: #073d28; font: 700 28px/1.2 'Playfair Display', Georgia, serif; }
        .contact-details { display: grid; gap: 17px; margin: 0; }
        .contact-detail { padding-bottom: 17px; border-bottom: 1px solid #e1e7dd; }
        .contact-detail dt { margin-bottom: 5px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .contact-detail dd { margin: 0; color: #5f6f64; font-size: 14px; line-height: 1.6; }
        .contact-detail a { color: #5f6f64; text-decoration-color: #e27a19; text-underline-offset: 3px; }
        .contact-detail a:hover, .contact-detail a:focus-visible { color: #0f5b38; }
        .contact-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 25px; }
        .contact-action { display: inline-flex; align-items: center; justify-content: center; min-height: 43px; padding: 0 16px; border-radius: 999px; font-size: 13px; font-weight: 700; text-decoration: none; }
        .contact-action-phone { border: 1px solid #cfd9cd; color: #0f5b38; }
        .contact-action-phone:hover, .contact-action-phone:focus-visible { border-color: #0f5b38; background: #edf4ec; }
        .contact-action-whatsapp { background: #0f5b38; color: #fff; }
        .contact-action-whatsapp:hover, .contact-action-whatsapp:focus-visible { background: #073d28; }
        .contact-form-card { padding: 34px; background: linear-gradient(155deg, #fff 0%, #fbfcf8 100%); }
        .contact-info-card { background: linear-gradient(155deg, #fff 0%, #fbfcf8 100%); }
        .contact-field input::placeholder, .contact-field textarea::placeholder { color: #9aa79d; }
        .contact-submit { box-shadow: 0 8px 18px rgba(226, 122, 25, .2); }
        .contact-form { display: grid; gap: 17px; }
        .contact-field { display: grid; gap: 7px; }
        .contact-field label { color: #0f5b38; font-size: 12px; font-weight: 700; }
        .contact-field input, .contact-field textarea { width: 100%; border: 1px solid #d7e0d5; border-radius: 10px; padding: 13px 14px; background: #fffdf8; color: #1e2921; font: inherit; font-size: 14px; }
        .contact-field textarea { min-height: 112px; resize: vertical; }
        .contact-field input:focus, .contact-field textarea:focus { border-color: #0f5b38; outline: 3px solid rgba(226, 122, 25, .35); outline-offset: 1px; }
        .contact-error { margin: -2px 0 0; color: #a13b27; font-size: 12px; line-height: 1.5; }
        .contact-submit { min-height: 46px; border: 0; border-radius: 999px; background: #e27a19; color: #20332a; cursor: pointer; font-size: 13px; font-weight: 700; transition: background .2s ease, transform .2s ease; }
        .contact-submit:hover, .contact-submit:focus-visible { background: #f19a35; transform: translateY(-2px); }
        @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; gap: 24px; } }
        @media (max-width: 680px) { .contact-section { padding: 72px 18px 84px; } .contact-layout { margin-top: 43px; } .contact-info-card, .contact-form-card { padding: 24px 20px; } }
      `}</style>
      <div className="contact-inner">
        <div className="contact-heading">
          <p className="contact-kicker">05 / CONTACT</p>
          <h2 className="contact-title">We&apos;re Here to Help.</h2>
          <p className="contact-intro">Contact ALBARKA FOOD ITEMS for product prices, availability, or orders. Send us your enquiry and we will connect with you through WhatsApp.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-card">
            <h3 className="contact-card-title">Contact Information</h3>
            <dl className="contact-details">
              <div className="contact-detail">
                <dt>Business</dt>
                <dd>ALBARKA FOOD ITEMS</dd>
              </div>
              <div className="contact-detail">
                <dt>Phone</dt>
                <dd><a href="tel:08067272441">08067272441</a></dd>
              </div>
              <div className="contact-detail">
                <dt>Customer Care</dt>
                <dd><a href="tel:08133236467">08133236467</a></dd>
              </div>
              <div className="contact-detail">
                <dt>WhatsApp</dt>
                <dd><a href="https://wa.me/2348133236467" target="_blank" rel="noreferrer">08133236467</a></dd>
              </div>
              <div className="contact-detail">
                <dt>Location</dt>
                <dd>No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State, Nigeria.</dd>
              </div>
            </dl>
            <div className="contact-actions">
              <a className="contact-action contact-action-phone" href="tel:08067272441">Call Us</a>
              <a className="contact-action contact-action-whatsapp" href="https://wa.me/2348133236467" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-card-title">Send an Inquiry</h3>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-product">Product / Item</label>
                <input id="contact-product" name="product" type="text" value={form.product} onChange={handleChange} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows="4" />
              </div>
              {error && <p className="contact-error" role="alert">{error}</p>}
              <button className="contact-submit" type="submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
