import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustHighlights from './components/TrustHighlights'
import Categories from './components/Categories'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Contact from './components/Contact'
import DeliveryInfo from './components/DeliveryInfo'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustHighlights />
        <Categories onCategorySelect={setSelectedCategory} />
        <Products selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <WhyChooseUs />
        <About />
        <Contact />
        <Location />
        <DeliveryInfo />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
