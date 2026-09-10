import { useState } from 'react'
import logo from '../logo.png'

const whatsappUrl = 'https://wa.me/2348133236467'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt="ALBARKA FOOD ITEMS logo" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
          <span>ALBARKA <strong>FOOD ITEMS</strong></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
        <div id="main-menu" className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <span className="whatsapp-icon" aria-hidden="true">&#9742;</span> WhatsApp us
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar