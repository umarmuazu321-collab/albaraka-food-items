import logo from '../logo.png'

const whatsappUrl = 'https://wa.me/2348133236467'

function Hero() {
  return (
    <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Everyday essentials, close to home</p>
          <h1>Quality food items, right at your <em>convenience.</em></h1>
          <p className="hero-text">ALBARKA FOOD ITEMS provides everyday food essentials such as rice, sugar, pasta, noodles, cooking oils and other grocery items for your home and business.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#products">Shop Products <span aria-hidden="true">&#8594;</span></a>
            <a className="button button-secondary" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="whatsapp-icon" aria-hidden="true">&#9742;</span> Order on WhatsApp</a>
          </div>
          <p className="location-line"><span className="location-pin" aria-hidden="true">&#9679;</span> No. 432, Northwest University by Tudun Yola, Rimin Auzinawa Road, opposite Malami Mai Naman Rago, Kano State</p>
        </div>
        <div className="hero-visual">
          <div className="visual-backdrop" />
          <div className="image-frame"><img src={logo} alt="ALBARKA FOOD ITEMS logo" style={{ objectFit: 'contain', padding: '5%', backgroundColor: '#ffffff' }} /></div>
          <div className="visual-note"><span className="note-icon" aria-hidden="true">&#10022;</span><span><strong>Everyday pantry</strong><small>Essentials for your table</small></span></div>
          <span className="visual-stamp" aria-hidden="true">PANTRY<br />STAPLES</span>
        </div>
    </section>
  )
}

export default Hero