import { useEffect, useState } from 'react'
import mrPresidentRiceImage from '../products/IMG_20260908_130423_073.jpg'
import ecovistaRiceImage from '../products/IMG_20260908_130428_173.jpg'
import riceImage from '../products/IMG_20260908_130448_744.jpg'
import asinRiceImage from '../products/IMG_20260908_130506_425.jpg'
import cherieImage from '../products/IMG_20260908_130510_669.jpg'
import obaNoodlesImage from '../products/IMG_20260908_130518_749.jpg'
import buaFlourImage from '../products/IMG_20260908_130527_617.jpg'
import mrRiceImage from '../products/IMG_20260908_130539_070.jpg'
import springoImage from '../products/IMG_20260908_130553_151.jpg'
import pastaMariaImage from '../products/IMG_20260908_130607_237.jpg'
import dangoteSugarImage from '../products/IMG_20260908_130613_845.jpg'
import buaSugarImage from '../products/IMG_20260908_130623_044.jpg'
import mrRiceVariantImage from '../products/IMG_20260908_130634_826.jpg'
import dangoteSugarVariantImage from '../products/IMG_20260908_130637_946.jpg'
import riceVariantImage from '../products/IMG_20260908_130648_555.jpg'
import slimSpaghettiImage from '../products/IMG_20260908_130659_918.jpg'
import maiKwaboImage from '../products/IMG_20260908_130708_100.jpg'
import ongaImage from '../products/IMG_20260908_130718_174.jpg'
import devonKingsImage from '../products/IMG_20260908_130729_167.jpg'
import indomieImage from '../products/IMG_20260908_130733_427.jpg'
import goldenPennyCouscousImage from '../products/IMG_20260908_130739_535.jpg'
import devonKingsVariantImage from '../products/IMG_20260908_130749_353.jpg'
import goldenPennyPastaImage from '../products/IMG_20260908_130754_994.jpg'
import devonKingsLargeImage from '../products/IMG_20260908_130806_647.jpg'
import maggiImage from '../products/IMG_20260908_130820_021.jpg'
import dogalImage from '../products/IMG_20260908_130842_045.jpg'
import irisImage from '../products/IMG_20260908_130859_737.jpg'
import shuuFoodsImage from '../products/IMG_20260908_130914_488.jpg'
import kgoldImage from '../products/IMG_20260908_130917_192.jpg'
import victoireImage from '../products/IMG_20260908_130924_463.jpg'
import maggiVariantImage from '../products/IMG_20260908_130956_845.jpg'
import goldenPennyCouscousVariantImage from '../products/IMG_20260908_131003_631.jpg'
import goldenPennySemovitaImage from '../products/IMG_20260908_131011_806.jpg'
import indomieVariantImage from '../products/IMG_20260908_131017_961.jpg'

const whatsappNumber = '2348133236467'

const products = [
  { name: 'TOMATO CITY RICE', category: 'Rice & Grains', image: mrPresidentRiceImage },
  { name: 'FLAMINGO', category: 'Rice & Grains', image: ecovistaRiceImage },
  { name: 'BIJOU AFRICA', category: 'Rice & Grains', image: riceImage },
  { name: 'ASIN PREMIUM RICE', category: 'Rice & Grains', image: asinRiceImage },
  { name: 'CHERIE INSTANT NOODLE', category: 'INSTANT NOODLES', flavor: 'Chicken Peppersoup', packSize: '120g Jumbo Pack', image: cherieImage },
  { name: 'OBA MACARNA BURGU', category: 'Pasta & Noodles', image: obaNoodlesImage },
  { name: 'BUA FLOUR', category: 'Flour & Semovita', image: buaFlourImage },
  { name: 'MR. RICE', category: 'Rice & Grains', image: mrRiceImage },
  { name: 'SPRINGO SPAGHETTI', category: 'Pasta & Noodles', image: springoImage },
  { name: 'PASTA MARIA', category: 'Pasta & Noodles', image: pastaMariaImage },
  { name: 'DANGOTE SUGAR', category: 'Rice & Grains', image: dangoteSugarImage },
  { name: 'BUA FOODS PREMIUM SUGAR', category: 'Rice & Grains', image: buaSugarImage },
  { name: 'OBA MAKARNA SPAGHETTI', category: 'Pasta & Noodles', image: mrRiceVariantImage },
  { name: 'DANGOTE SUGAR', category: 'Rice & Grains', image: dangoteSugarVariantImage },
  { name: 'AL SAFWA', category: 'Rice & Grains', image: riceVariantImage },
  { name: 'CROWN SLIM SPAGHETTI', category: 'Pasta & Noodles', image: slimSpaghettiImage },
  { name: 'MAI KWABO MACARONI', category: 'Pasta & Noodles', image: maiKwaboImage },
  { name: 'ONGA', category: 'Seasoning & Other Essentials', image: ongaImage },
  { name: "DEVON KING'S OIL", category: 'Cooking Oils', image: devonKingsImage },
  { name: 'Indomie', category: 'Pasta & Noodles', image: indomieImage },
  { name: 'GOLDEN PENNY PASTA COUSCOUS', category: 'Rice & Grains', image: goldenPennyCouscousImage },
  { name: "DEVON KING'S OIL", category: 'Cooking Oils', image: devonKingsVariantImage },
  { name: 'LA PERLA COOKING OIL', category: 'Cooking Oils', image: goldenPennyPastaImage },
  { name: 'GOLDEN PENNY PASTA MACARONI', category: 'Pasta & Noodles', image: devonKingsLargeImage },
  { name: "DEVON KING'S OIL", category: 'Cooking Oils', image: maggiImage },
  { name: 'Dogal', category: 'Pasta & Noodles', image: dogalImage },
  { name: 'IRS PASTA', category: 'Pasta & Noodles', image: irisImage },
  { name: 'Shuu Foods', category: 'Cooking Oils', image: shuuFoodsImage },
  { name: 'KGold', category: 'Cooking Oils', image: kgoldImage },
  { name: 'Victoire', category: 'Cooking Oils', image: victoireImage },
  { name: 'Maggi Star', category: 'Seasoning & Other Essentials', image: maggiVariantImage },
  { name: 'GOLDEN PENNY FLOUR', category: 'Flour & Semovita', image: goldenPennyCouscousVariantImage },
  { name: 'GOLDEN PENNY SEMOVITA', category: 'Flour & Semovita', image: goldenPennySemovitaImage },
  { name: 'Indomie', category: 'Pasta & Noodles', image: indomieVariantImage },
]

const whatsappLink = (productName) => {
  const message = `Hello ALBARKA FOOD ITEMS, I would like to ask about the price of ${productName}.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

const categories = ['All Products', ...new Set(products.map((product) => product.category))]

function Products({ selectedCategory, onCategoryChange }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '', address: '' })
  const [checkoutError, setCheckoutError] = useState('')
  const normalizedSearchQuery = searchQuery.trim().toLowerCase()
  const visibleProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(normalizedSearchQuery)
    return matchesCategory && matchesSearch
  })
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartMessage = [
    'ALBARKA FOOD ITEMS ORDER',
    '',
    `Customer Name: ${customerDetails.name.trim()}`,
    `Phone Number: ${customerDetails.phone.trim()}`,
    `Delivery Address: ${customerDetails.address.trim()}`,
    '',
    'Order:',
    ...cartItems.map((item) => `• ${item.name} — Quantity: ${item.quantity}`),
    '',
    `Total items: ${cartItemCount}`,
    '',
    'Please confirm availability and current prices.',
  ].join('\n')
  const cartWhatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cartMessage)}`

  const updateCustomerDetail = (field, value) => {
    setCustomerDetails((currentDetails) => ({ ...currentDetails, [field]: value }))
    if (checkoutError) setCheckoutError('')
  }

  const handleCartOrder = (event) => {
    const hasMissingDetails = Object.values(customerDetails).some((value) => !value.trim())
    if (!hasMissingDetails) return

    event.preventDefault()
    setCheckoutError('Please enter your full name, phone number, and delivery address.')
  }

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.image === product.image)
      if (existingItem) {
        return currentItems.map((item) => item.image === product.image
          ? { ...item, quantity: item.quantity + 1 }
          : item)
      }

      return [...currentItems, { image: product.image, name: product.name, quantity: 1 }]
    })
  }

  const updateCartQuantity = (image, amount) => {
    setCartItems((currentItems) => currentItems.flatMap((item) => {
      if (item.image !== image) return [item]
      const quantity = item.quantity + amount
      return quantity > 0 ? [{ ...item, quantity }] : []
    }))
  }

  const removeFromCart = (image) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.image !== image))
  }

  useEffect(() => {
    if (!selectedProduct && !isCartOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return
      if (isCartOpen) setIsCartOpen(false)
      else setSelectedProduct(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isCartOpen, selectedProduct])

  return (
    <section id="products" className="products-section">
      <style>{`
        .products-section { padding: 92px 24px 110px; background: #fffdf8; color: #20332a; }
        .products-inner { width: min(1180px, 100%); margin: 0 auto; }
        .products-heading { max-width: 650px; margin-bottom: 32px; }
        .products-kicker { display: flex; align-items: center; gap: 10px; margin: 0 0 18px; color: #0f5b38; font-size: 11px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase; }
        .products-kicker::before { content: ''; width: 29px; height: 2px; background: #e27a19; }
        .products-title { margin: 0; color: #073d28; font: 700 clamp(34px, 4vw, 54px)/1.08 'Playfair Display', Georgia, serif; letter-spacing: -1px; }
        .products-intro { max-width: 570px; margin: 17px 0 0; color: #5f6f64; font-size: 15px; line-height: 1.75; }
        .products-filter { display: flex; flex-wrap: wrap; gap: 9px; margin-bottom: 34px; }
        .products-filter-button { min-height: 38px; padding: 0 14px; border: 1px solid #cfd9cd; border-radius: 999px; background: #fff; color: #0f5b38; cursor: pointer; font: inherit; font-size: 12px; font-weight: 700; line-height: 1.2; transition: background .2s ease, border-color .2s ease, color .2s ease, transform .2s ease; }
        .products-filter-button:hover, .products-filter-button:focus-visible { border-color: #e27a19; color: #c86212; transform: translateY(-1px); }
        .products-filter-button.is-active { border-color: #0f5b38; background: #0f5b38; color: #fff; }
        .products-filter-button.is-active:hover, .products-filter-button.is-active:focus-visible { border-color: #073d28; background: #073d28; color: #fff; }
        .products-search { position: relative; max-width: 420px; margin-bottom: 34px; }
        .products-search-icon { position: absolute; top: 50%; left: 14px; color: #0f5b38; font-size: 18px; line-height: 1; pointer-events: none; transform: translateY(-50%); }
        .products-search-input { width: 100%; min-height: 44px; padding: 0 42px 0 40px; border: 1px solid #cfd9cd; border-radius: 6px; background: #fff; color: #20332a; font: inherit; font-size: 14px; outline: none; transition: border-color .2s ease, box-shadow .2s ease; }
        .products-search-input:focus { border-color: #0f5b38; box-shadow: 0 0 0 3px rgba(15, 91, 56, .12); }
        .products-search-clear { position: absolute; top: 50%; right: 10px; display: grid; width: 26px; height: 26px; place-items: center; border: 0; border-radius: 50%; background: transparent; color: #5f6f64; cursor: pointer; font-size: 22px; line-height: 1; transform: translateY(-50%); }
        .products-search-clear:hover, .products-search-clear:focus-visible { background: #f4f6ef; color: #c86212; }
        .products-empty { margin: 0; color: #5f6f64; font-size: 15px; }
        .products-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; align-items: stretch; }
        .product-card { display: flex; height: 100%; min-height: 455px; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid #e5e9e1; border-radius: 14px; background: #fff; box-shadow: 0 10px 28px rgba(30, 58, 40, .07); transition: transform .2s ease, box-shadow .2s ease; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 14px 28px rgba(30, 58, 40, .12); }
        .product-image-wrap { display: grid; flex: 0 0 225px; place-items: center; height: 225px; overflow: hidden; padding: 14px; background: #f4f6ef; }
        .product-image { width: 100%; height: 100%; object-fit: contain; }
        .product-details { position: relative; z-index: 1; display: flex; min-height: 0; flex: 1; flex-direction: column; padding: 17px; background: #fff; }
        .product-category { min-height: 17px; margin: 0 0 7px; color: #d96d16; font-size: 10px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; }
        .product-name { min-height: 51px; margin: 0; color: #073d28; font: 600 21px/1.2 'Playfair Display', Georgia, serif; overflow-wrap: anywhere; }
        .product-quick-view { display: block; width: 100%; min-height: 51px; padding: 0; border: 0; background: transparent; color: inherit; cursor: pointer; font: inherit; text-align: left; }
        .product-quick-view:focus-visible { border-radius: 3px; outline: 3px solid rgba(226, 122, 25, .45); outline-offset: 3px; }
        .product-price { margin: 12px 0 17px; color: #5f6f64; font-size: 13px; }
        .product-order { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 40px; margin-top: auto; border-radius: 999px; background: #0f5b38; color: #fff; font-size: 12px; font-weight: 700; text-align: center; text-decoration: none; transition: background .2s ease; }
        .product-order:hover, .product-order:focus-visible { background: #073d28; }
        .product-card { cursor: pointer; }
        .product-card:focus-visible { outline: 3px solid rgba(226, 122, 25, .45); outline-offset: 3px; }
        .products-cart-toggle { display: inline-flex; align-items: center; gap: 8px; min-height: 40px; margin-bottom: 20px; padding: 0 14px; border: 1px solid #0f5b38; border-radius: 4px; background: #0f5b38; color: #fff; cursor: pointer; font: inherit; font-size: 12px; font-weight: 700; }
        .products-cart-toggle:hover, .products-cart-toggle:focus-visible { background: #073d28; }
        .products-cart-count { display: inline-grid; min-width: 21px; height: 21px; place-items: center; border-radius: 50%; background: #e27a19; color: #fff; font-size: 11px; }
        .product-add-to-cart { display: inline-flex; align-items: center; justify-content: center; width: 100%; min-height: 40px; margin-top: 16px; border: 1px solid #0f5b38; border-radius: 999px; background: #fff; color: #0f5b38; cursor: pointer; font: inherit; font-size: 12px; font-weight: 700; transition: background .2s ease, color .2s ease; }
        .product-add-to-cart:hover, .product-add-to-cart:focus-visible { background: #f4f6ef; color: #073d28; }
        .cart-backdrop { position: fixed; z-index: 21; inset: 0; display: grid; place-items: center; padding: 24px; background: rgba(7, 61, 40, .58); }
        .cart-panel { width: min(520px, 100%); max-height: min(680px, 92vh); overflow: auto; border: 1px solid #e5e9e1; border-radius: 8px; background: #fffdf8; box-shadow: 0 24px 70px rgba(7, 61, 40, .28); }
        .cart-panel-header { display: flex; align-items: center; justify-content: space-between; padding: 20px 22px; border-bottom: 1px solid #e5e9e1; }
        .cart-panel-title { margin: 0; color: #073d28; font: 600 26px/1.15 'Playfair Display', Georgia, serif; }
        .cart-close { display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid #cfd9cd; border-radius: 50%; background: #fff; color: #073d28; cursor: pointer; font-size: 25px; line-height: 1; }
        .cart-close:hover, .cart-close:focus-visible { border-color: #e27a19; color: #c86212; }
        .cart-empty { margin: 0; padding: 34px 22px; color: #5f6f64; font-size: 15px; }
        .cart-items { display: grid; gap: 14px; padding: 18px 22px 22px; }
        .cart-section-heading { margin: 0; color: #073d28; font: 600 20px/1.2 'Playfair Display', Georgia, serif; }
        .cart-order-summary { display: grid; gap: 14px; padding: 18px 22px 22px; border-bottom: 1px solid #e1e7dd; background: #fff; }
        .cart-order-summary .cart-items { padding: 0; }
        .cart-item { display: grid; grid-template-columns: 58px minmax(0, 1fr) auto; gap: 12px; align-items: center; }
        .cart-item-image { width: 58px; height: 58px; object-fit: contain; background: #f4f6ef; }
        .cart-item-name { margin: 0 0 8px; color: #073d28; font-size: 14px; font-weight: 700; }
        .cart-item-controls { display: flex; align-items: center; gap: 8px; }
        .cart-quantity-button, .cart-remove-button { display: grid; place-items: center; min-width: 28px; height: 28px; border: 1px solid #cfd9cd; border-radius: 3px; background: #fff; color: #0f5b38; cursor: pointer; font: inherit; font-weight: 700; }
        .cart-quantity-button:hover, .cart-quantity-button:focus-visible, .cart-remove-button:hover, .cart-remove-button:focus-visible { border-color: #e27a19; color: #c86212; }
        .cart-item-quantity { min-width: 18px; color: #20332a; text-align: center; }
        .cart-remove-button { color: #c86212; font-size: 18px; }
        .cart-whatsapp-order { display: inline-flex; align-items: center; justify-content: center; gap: 7px; width: calc(100% - 44px); min-height: 44px; margin: 0 22px 22px; border-radius: 3px; background: #0f5b38; color: #fff; font-size: 12px; font-weight: 700; text-align: center; text-decoration: none; transition: background .2s ease; }
        .cart-whatsapp-order:hover, .cart-whatsapp-order:focus-visible { background: #073d28; }
        .cart-customer-details { display: grid; gap: 13px; padding: 20px 22px 16px; border-bottom: 1px solid #e1e7dd; }
        .cart-total { margin: 0; padding: 16px 22px 18px; color: #0f5b38; font-size: 14px; font-weight: 700; }
        .cart-checkout-copy { margin: 0 22px 12px; color: #5f6f64; font-size: 12px; line-height: 1.5; }
        .cart-customer-field { display: grid; gap: 6px; }
        .cart-customer-field label { color: #0f5b38; font-size: 11px; font-weight: 700; }
        .cart-customer-field input, .cart-customer-field textarea { width: 100%; border: 1px solid #d7e0d5; border-radius: 4px; padding: 10px 11px; background: #fff; color: #1e2921; font: inherit; font-size: 13px; }
        .cart-customer-field textarea { min-height: 70px; resize: vertical; }
        .cart-customer-field input:focus, .cart-customer-field textarea:focus { border-color: #0f5b38; outline: 3px solid rgba(226, 122, 25, .25); outline-offset: 1px; }
        .cart-checkout-error { margin: 0; color: #a13b27; font-size: 12px; line-height: 1.5; }
        @media (max-width: 600px) { .cart-backdrop { padding: 14px; } .cart-item { grid-template-columns: 50px minmax(0, 1fr) auto; gap: 9px; } .cart-item-image { width: 50px; height: 50px; } .cart-panel-title { font-size: 23px; } }
        .product-modal-backdrop { position: fixed; z-index: 20; inset: 0; display: grid; place-items: center; padding: 24px; background: rgba(7, 61, 40, .58); }
        .product-modal { position: relative; display: grid; width: min(760px, 100%); max-height: min(680px, 92vh); grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); overflow: auto; border: 1px solid #e5e9e1; border-radius: 8px; background: #fffdf8; box-shadow: 0 24px 70px rgba(7, 61, 40, .28); }
        .product-modal-image-wrap { display: grid; min-height: 330px; place-items: center; padding: 28px; background: #f4f6ef; }
        .product-modal-image { width: 100%; height: 100%; max-height: 420px; object-fit: contain; }
        .product-modal-details { display: flex; flex-direction: column; justify-content: center; padding: 34px; }
        .product-modal-category { margin: 0 0 10px; color: #d96d16; font-size: 11px; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; }
        .product-modal-name { margin: 0 0 26px; color: #073d28; font: 600 clamp(26px, 4vw, 40px)/1.15 'Playfair Display', Georgia, serif; }
        .product-modal-close { position: absolute; z-index: 1; top: 12px; right: 12px; display: grid; width: 34px; height: 34px; place-items: center; border: 1px solid #cfd9cd; border-radius: 50%; background: #fff; color: #073d28; cursor: pointer; font-size: 25px; line-height: 1; }
        .product-modal-close:hover, .product-modal-close:focus-visible { border-color: #e27a19; color: #c86212; }
        @media (max-width: 600px) { .product-modal { grid-template-columns: 1fr; } .product-modal-image-wrap { min-height: 230px; padding: 24px 44px; } .product-modal-details { padding: 26px 22px 24px; } .product-modal-name { margin-bottom: 22px; } }
        @media (max-width: 980px) { .products-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } .product-card { min-height: 440px; } }
        @media (max-width: 680px) { .products-section { padding: 70px 18px 82px; } .products-filter { gap: 8px; margin-bottom: 22px; } .products-filter-button { min-height: 40px; padding: 0 12px; } .products-search { margin-bottom: 28px; } .products-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; } .product-card { min-height: 430px; } .product-image-wrap { flex-basis: 180px; height: 180px; } .product-details { min-height: 235px; padding: 14px; } .product-name { min-height: 44px; font-size: 18px; } }
        @media (max-width: 420px) { .products-grid { grid-template-columns: 1fr; } .product-image-wrap { flex-basis: 220px; height: 220px; } }
      `}</style>
      <div className="products-inner">
        <div className="products-heading">
          <p className="products-kicker">01 / PRODUCTS</p>
          <h2 className="products-title">Quality Essentials for Every Kitchen.</h2>
          <p className="products-intro">ALBARKA FOOD ITEMS offers everyday food essentials and grocery products for homes, families, and businesses. Contact us to ask about any item and place your order through WhatsApp.</p>
        </div>
        <div className="products-filter" aria-label="Filter products by category">
          {categories.map((category) => (
            <button
              className={`products-filter-button ${selectedCategory === category ? 'is-active' : ''}`}
              type="button"
              key={category}
              aria-pressed={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button className="products-cart-toggle" type="button" onClick={() => setIsCartOpen(true)} aria-label={`Open cart with ${cartItemCount} items`}>
          Cart <span className="products-cart-count" aria-label={`${cartItemCount} items`}>{cartItemCount}</span>
        </button>
        <div className="products-search">
          <span className="products-search-icon" aria-hidden="true">&#128269;</span>
          <input
            className="products-search-input"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
          />
          {searchQuery && (
            <button
              className="products-search-clear"
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear product search"
            >
              &times;
            </button>
          )}
        </div>
        {visibleProducts.length === 0 && <p className="products-empty">No products found.</p>}
        <div className="products-grid" hidden={visibleProducts.length === 0}>
          {visibleProducts.map((product, index) => (
            <article
              className="product-card"
              key={product.image}
            >
              <div className="product-image-wrap">
                <img className="product-image" src={product.image} alt={`${product.name} available at ALBARKA FOOD ITEMS`} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" />
              </div>
              <div className="product-details">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">
                  <button className="product-quick-view" type="button" onClick={() => setSelectedProduct(product)} aria-label={`View details for ${product.name}`}>
                    {product.name}
                  </button>
                </h3>
                <p className="product-price">Contact us for price</p>
                {product.flavor && <p className="product-meta">Flavor: {product.flavor}</p>}
                {product.packSize && <p className="product-meta">Pack size: {product.packSize}</p>}
                <button className="product-add-to-cart" type="button" onClick={(event) => { event.stopPropagation(); addToCart(product) }} aria-label={`Add ${product.name} to cart`}>
                  Add to Cart
                </button>
                <a className="product-order" href={whatsappLink(product.name)} target="_blank" rel="noreferrer" aria-label={`Order ${product.name} on WhatsApp`} onClick={(event) => event.stopPropagation()}>
                  <span aria-hidden="true">&#9742;</span> Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      {isCartOpen && (
        <div className="cart-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setIsCartOpen(false) }}>
          <div className="cart-panel" role="dialog" aria-modal="true" aria-labelledby="cart-panel-title">
            <div className="cart-panel-header">
              <h2 className="cart-panel-title" id="cart-panel-title">Your Cart</h2>
              <button className="cart-close" type="button" onClick={() => setIsCartOpen(false)} aria-label="Close cart">&times;</button>
            </div>
            {cartItems.length === 0 ? (
              <p className="cart-empty">Your cart is empty.</p>
            ) : (
              <div className="cart-order-summary">
                <h3 className="cart-section-heading">Your Order</h3>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.image}>
                      <img className="cart-item-image" src={item.image} alt="" />
                      <div>
                        <p className="cart-item-name">{item.name}</p>
                        <div className="cart-item-controls">
                          <button className="cart-quantity-button" type="button" onClick={() => updateCartQuantity(item.image, -1)} aria-label={`Decrease ${item.name} quantity`}>-</button>
                          <span className="cart-item-quantity" aria-label={`${item.quantity} in cart`}>{item.quantity}</span>
                          <button className="cart-quantity-button" type="button" onClick={() => updateCartQuantity(item.image, 1)} aria-label={`Increase ${item.name} quantity`}>+</button>
                        </div>
                      </div>
                      <button className="cart-remove-button" type="button" onClick={() => removeFromCart(item.image)} aria-label={`Remove ${item.name} from cart`}>&times;</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {cartItems.length > 0 && (
              <>
                <div className="cart-customer-details">
                  <h3 className="cart-section-heading">Customer Details</h3>
                  <div className="cart-customer-field">
                    <label htmlFor="cart-customer-name">Full Name</label>
                    <input id="cart-customer-name" type="text" value={customerDetails.name} onChange={(event) => updateCustomerDetail('name', event.target.value)} autoComplete="name" />
                  </div>
                  <div className="cart-customer-field">
                    <label htmlFor="cart-customer-phone">Phone Number</label>
                    <input id="cart-customer-phone" type="tel" value={customerDetails.phone} onChange={(event) => updateCustomerDetail('phone', event.target.value)} autoComplete="tel" />
                  </div>
                  <div className="cart-customer-field">
                    <label htmlFor="cart-customer-address">Delivery Address</label>
                    <textarea id="cart-customer-address" value={customerDetails.address} onChange={(event) => updateCustomerDetail('address', event.target.value)} autoComplete="street-address" />
                  </div>
                  {checkoutError && <p className="cart-checkout-error" role="alert">{checkoutError}</p>}
                </div>
                <p className="cart-total">Total items: {cartItemCount}</p>
                <p className="cart-checkout-copy">Send your order to ALBARKA FOOD ITEMS on WhatsApp. We&apos;ll confirm availability and current prices.</p>
                <a className="cart-whatsapp-order" href={cartWhatsappLink} target="_blank" rel="noreferrer" aria-label="Order cart on WhatsApp" onClick={handleCartOrder}>
                <span aria-hidden="true">&#9742;</span> Confirm &amp; Order on WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      )}
      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null)
          }}
        >
          <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
            <button className="product-modal-close" type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details">
              &times;
            </button>
            <div className="product-modal-image-wrap">
              <img className="product-modal-image" src={selectedProduct.image} alt={`${selectedProduct.name} available at ALBARKA FOOD ITEMS`} decoding="async" />
            </div>
            <div className="product-modal-details">
              <p className="product-modal-category">{selectedProduct.category}</p>
              <h2 className="product-modal-name" id="product-modal-title">{selectedProduct.name}</h2>
              <a className="product-order" href={whatsappLink(selectedProduct.name)} target="_blank" rel="noreferrer" aria-label={`Order ${selectedProduct.name} on WhatsApp`}>
                <span aria-hidden="true">&#9742;</span> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products