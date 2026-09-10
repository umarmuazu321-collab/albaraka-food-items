const whatsappUrl = 'https://wa.me/2348133236467'

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ALBARKA FOOD ITEMS on WhatsApp"
      title="Chat with ALBARKA FOOD ITEMS on WhatsApp"
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">&#9742;</span>
      <span className="floating-whatsapp-label">WhatsApp us</span>
      <style>{`
        .floating-whatsapp { position: fixed; z-index: 8; right: 22px; bottom: 22px; display: inline-flex; align-items: center; gap: 8px; min-height: 46px; padding: 0 16px; border: 2px solid #fff; border-radius: 999px; background: #0f5b38; box-shadow: 0 10px 24px rgba(7, 61, 40, .2); color: #fff; font-size: 12px; font-weight: 700; text-decoration: none; transition: background .2s ease, transform .2s ease, box-shadow .2s ease; }
        .floating-whatsapp:hover, .floating-whatsapp:focus-visible { background: #073d28; box-shadow: 0 13px 28px rgba(7, 61, 40, .28); outline: none; transform: translateY(-2px); }
        .floating-whatsapp:focus-visible { outline: 3px solid #e27a19; outline-offset: 3px; }
        .floating-whatsapp-icon { display: grid; width: 22px; height: 22px; place-items: center; color: #fff; font-size: 15px; line-height: 1; }
        @media (max-width: 600px) { .floating-whatsapp { right: 16px; bottom: 16px; width: 50px; height: 50px; min-height: 50px; justify-content: center; padding: 0; } .floating-whatsapp-label { display: none; } .floating-whatsapp-icon { width: auto; height: auto; font-size: 18px; } }
      `}</style>
    </a>
  )
}

export default FloatingWhatsApp
