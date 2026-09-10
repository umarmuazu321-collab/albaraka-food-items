import { useState } from 'react'

const questions = [
  {
    question: 'How can I place an order?',
    answer: 'You can choose your products from our website and use the WhatsApp ordering option to send your order directly to ALBARKA FOOD ITEMS.',
  },
  {
    question: 'Can I order multiple products at once?',
    answer: 'Yes. Add the products you want to your cart, adjust the quantities, provide your customer details, and send the complete order through WhatsApp.',
  },
  {
    question: 'How do I contact ALBARKA FOOD ITEMS?',
    answer: 'You can contact us by phone or WhatsApp using the contact information provided on our website.',
  },
  {
    question: 'Can I ask about product availability?',
    answer: 'Yes. You can contact us on WhatsApp to confirm current product availability before completing your order.',
  },
  {
    question: 'Where is ALBARKA FOOD ITEMS located?',
    answer: 'Our business location is provided in the Find Us section of this website. You can also use the Google Maps link there to view the location.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'We can help arrange convenient delivery based on your location. Contact us through WhatsApp for your order and delivery details.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq-section">
      <style>{`
        .faq-section { padding: 92px 24px 104px; background: #fffdf8; color: #20332a; }
        .faq-inner { width: min(900px, 100%); margin: 0 auto; }
        .faq-heading { max-width: 700px; }
        .faq-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .faq-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .faq-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .faq-intro { max-width: 620px; margin: 18px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .faq-list { display: grid; gap: 10px; margin-top: 42px; }
        .faq-item { overflow: hidden; border: 1px solid #e1e7dd; border-radius: 8px; background: #fff; box-shadow: 0 6px 18px rgba(30, 58, 40, .04); }
        .faq-trigger { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 20px; min-height: 60px; padding: 17px 20px; border: 0; background: transparent; color: #0f5b38; cursor: pointer; font: inherit; font-size: 15px; font-weight: 700; text-align: left; }
        .faq-trigger:hover, .faq-trigger:focus-visible { background: #f4f6ef; color: #073d28; outline: none; }
        .faq-trigger:focus-visible { box-shadow: inset 0 0 0 3px rgba(226, 122, 25, .35); }
        .faq-icon { flex: 0 0 auto; color: #e27a19; font-size: 22px; font-weight: 400; line-height: 1; }
        .faq-answer { margin: 0; padding: 0 52px 20px 20px; color: #5f6f64; font-size: 14px; line-height: 1.7; }
        @media (max-width: 680px) { .faq-section { padding: 72px 18px 84px; } .faq-list { margin-top: 32px; } .faq-trigger { min-height: 58px; padding: 16px; font-size: 14px; } .faq-answer { padding: 0 16px 18px; font-size: 13px; } }
      `}</style>
      <div className="faq-inner">
        <div className="faq-heading">
          <p className="faq-kicker">08 / FAQ</p>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-intro">Find quick answers about ordering from ALBARKA FOOD ITEMS.</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index + 1}`
            return (
              <div className="faq-item" key={item.question}>
                <button
                  className="faq-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <p className="faq-answer" id={answerId} hidden={!isOpen}>{item.answer}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
