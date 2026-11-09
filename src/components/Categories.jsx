const categories = [
  'Rice & Grains',
  'INSTANT NOODLES',
  'Pasta & Noodles',
  'Flour & Semovita',
  'Seasoning & Other Essentials',
  'Cooking Oils',
]

function Categories({ onCategorySelect }) {
  const selectCategory = (category) => {
    onCategorySelect(category)
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="categories" className="categories-section">
      <style>{`
        .categories-section { padding: 76px 24px 88px; background: #fbfaf5; color: #20332a; }
        .categories-inner { width: min(1180px, 100%); margin: 0 auto; }
        .categories-heading { max-width: 700px; }
        .categories-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .categories-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .categories-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .categories-intro { max-width: 620px; margin: 18px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .categories-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 40px; }
        .category-card { position: relative; display: flex; min-height: 132px; align-items: center; justify-content: space-between; gap: 18px; padding: 24px; border: 1px solid #e1e7dd; border-radius: 16px; background: linear-gradient(145deg, #fff 0%, #f8faf5 100%); box-shadow: 0 10px 28px rgba(30, 58, 40, .06); color: #0f5b38; cursor: pointer; font: inherit; text-align: left; transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease; }
        .category-card:hover, .category-card:focus-visible { border-color: #e27a19; box-shadow: 0 12px 26px rgba(30, 58, 40, .1); outline: none; transform: translateY(-2px); }
        .category-card-label { max-width: 230px; font-size: 17px; font-weight: 700; line-height: 1.35; }
        .category-card-arrow { display: grid; width: 42px; height: 42px; flex: 0 0 auto; place-items: center; border-radius: 50%; background: #edf3e9; color: #d9781d; font-size: 22px; line-height: 1; transition: background .2s ease, color .2s ease, transform .2s ease; }
        .category-card:hover .category-card-arrow, .category-card:focus-visible .category-card-arrow { background: #17613d; color: #fff; transform: translateX(3px); }
        .category-card-index { position: absolute; top: 13px; right: 17px; color: #a9b9a9; font-size: 10px; font-weight: 700; letter-spacing: 1px; }
        @media (max-width: 760px) { .categories-section { padding: 68px 18px 76px; } .categories-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 32px; } }
        @media (max-width: 460px) { .categories-grid { grid-template-columns: 1fr; } .category-card { min-height: 82px; } }
      `}</style>
      <div className="categories-inner">
        <div className="categories-heading">
          <p className="categories-kicker">02 / SHOP BY CATEGORY</p>
          <h2 className="categories-title">Find What You Need, Faster.</h2>
          <p className="categories-intro">Explore our food categories and quickly find the everyday essentials you are looking for.</p>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <button className="category-card" type="button" key={category} onClick={() => selectCategory(category)}>
              <span className="category-card-index">0{categories.indexOf(category) + 1}</span>
              <span className="category-card-label">{category}</span>
              <span className="category-card-arrow" aria-hidden="true">&#8594;</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
