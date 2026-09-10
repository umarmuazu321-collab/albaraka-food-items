const highlights = [
  { value: '34+', label: 'Food Products' },
  { value: 'WhatsApp', label: 'Easy Ordering' },
  { value: 'Kano', label: 'Local Business' },
  { value: 'Direct', label: 'Customer Support' },
]

function TrustHighlights() {
  return (
    <section className="trust-highlights-section" aria-label="ALBARKA FOOD ITEMS highlights">
      <style>{`
        .trust-highlights-section { padding: 20px 24px; background: #073d28; }
        .trust-highlights-inner { width: min(1180px, 100%); margin: 0 auto; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border: 1px solid rgba(219, 232, 220, .2); border-radius: 8px; background: rgba(15, 91, 56, .55); }
        .trust-highlight { display: grid; gap: 4px; padding: 18px 22px; text-align: center; }
        .trust-highlight + .trust-highlight { border-left: 1px solid rgba(219, 232, 220, .2); }
        .trust-highlight-value { color: #fff; font: 700 clamp(18px, 2.2vw, 26px)/1.1 'Playfair Display', Georgia, serif; }
        .trust-highlight-label { color: #ffb24f; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        @media (max-width: 680px) { .trust-highlights-section { padding: 16px 18px; } .trust-highlights-inner { grid-template-columns: repeat(2, minmax(0, 1fr)); } .trust-highlight { padding: 16px 12px; } .trust-highlight:nth-child(odd) { border-left: 0; } .trust-highlight:nth-child(n + 3) { border-top: 1px solid rgba(219, 232, 220, .2); } .trust-highlight-value { font-size: 19px; } }
      `}</style>
      <div className="trust-highlights-inner">
        {highlights.map((highlight) => (
          <div className="trust-highlight" key={highlight.label}>
            <span className="trust-highlight-value">{highlight.value}</span>
            <span className="trust-highlight-label">{highlight.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustHighlights
