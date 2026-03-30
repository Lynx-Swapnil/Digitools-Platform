import { Suspense, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import CtaSection from './components/CtaSection/CtaSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import PricingSection from './components/PricingSection/PricingSection'
import SectionSpinner from './components/SectionSpinner'
import StatsSection from './components/StatsSection/StatsSection'
import StepsSection from './components/StepsSection/StepsSection'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [activeView, setActiveView] = useState('products')
  const [cartItems, setCartItems] = useState([])
  const productsPromise = useMemo(
    () =>
      fetch('/products.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to load products')
          }
          return response.json()
        })
        .catch(() => {
          toast.error('Failed to load product list')
          return []
        }),
    [],
  )

  const plansPromise = useMemo(
    () =>
      fetch('/plans.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Unable to load plans')
          }
          return response.json()
        })
        .catch(() => []),
    [],
  )

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
    const removedItem = cartItems[indexToRemove]
    if (!removedItem) {
      return
    }

    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove))
    toast.info(`${removedItem.name} removed from cart`)
  }

  const checkout = () => {
    if (!cartItems.length) {
      toast.warn('Your cart is currently empty')
      return
    }

    setCartItems([])
    toast.success('Checkout complete. Cart has been cleared.')
  }

  const openCartSection = () => {
    setActiveView('cart')
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="min-h-screen text-[#1d1f3a] bg-[radial-gradient(circle_at_10%_-15%,rgba(115,73,255,0.14),transparent_35%),radial-gradient(circle_at_85%_8%,rgba(255,80,160,0.08),transparent_30%),#f8f8fb]">
      <Navbar cartCount={cartItems.length} onOpenCart={openCartSection} />

      <main>
        <HeroSection />
        <StatsSection />
        <Suspense
          fallback={<SectionSpinner id="products" message="Loading products..." />}
        >
          <MainSection
            productsPromise={productsPromise}
            activeView={activeView}
            onShowProducts={() => setActiveView('products')}
            onShowCart={() => setActiveView('cart')}
            onAddToCart={addToCart}
            cartItems={cartItems}
            totalPrice={totalPrice}
            onRemoveFromCart={removeFromCart}
            onCheckout={checkout}
          />
        </Suspense>
        <StepsSection />
        <Suspense
          fallback={<SectionSpinner id="pricing" message="Loading plans..." />}
        >
          <PricingSection plansPromise={plansPromise} />
        </Suspense>
        <CtaSection />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} pauseOnHover={false} />
    </div>
  )
}

export default App
