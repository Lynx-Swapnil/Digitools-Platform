import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CtaSection from './components/CtaSection/CtaSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSection/PricingSection'
import StatsSection from './components/StatsSection/StatsSection'
import StepsSection from './components/StepsSection/StepsSection'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [products, setProducts] = useState([])
  const [activeView, setActiveView] = useState('products')
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json')
        if (!response.ok) {
          throw new Error('Unable to load products')
        }

        const data = await response.json()
        setProducts(data)
      } catch (_error) {
        toast.error('Failed to load product list')
      }
    }

    loadProducts()
  }, [])

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems],
  )

  const addToCart = (product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      toast.info(`${product.name} is already in cart`)
      return
    }

    setCartItems((prev) => [...prev, product])
    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => {
      const removedItem = prev[indexToRemove]
      const updated = prev.filter((_, index) => index !== indexToRemove)

      if (removedItem) {
        toast.info(`${removedItem.name} removed from cart`)
      }

      return updated
    })
  }

  const checkout = () => {
    if (!cartItems.length) {
      toast.warn('Your cart is currently empty')
      return
    }

    setCartItems([])
    toast.success('Checkout complete. Cart has been cleared.')
  }

  return (
    <div className="min-h-screen text-[#1d1f3a] bg-[radial-gradient(circle_at_10%_-15%,rgba(115,73,255,0.14),transparent_35%),radial-gradient(circle_at_85%_8%,rgba(255,80,160,0.08),transparent_30%),#f8f8fb]">
      <Navbar cartCount={cartItems.length} onOpenCart={() => setActiveView('cart')} />

      <main>
        <HeroSection />
        <StatsSection />
        <MainSection
          products={products}
          activeView={activeView}
          onShowProducts={() => setActiveView('products')}
          onShowCart={() => setActiveView('cart')}
          onAddToCart={addToCart}
          cartItems={cartItems}
          totalPrice={totalPrice}
          onRemoveFromCart={removeFromCart}
          onCheckout={checkout}
        />
        <StepsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} pauseOnHover={false} />
    </div>
  )
}

export default App
