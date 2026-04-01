import { useState } from 'react'
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'

function Navbar({ cartCount, onOpenCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative flex w-full items-center justify-between gap-4 border-y border-[#dfdfe4] bg-transparent px-4 py-4 md:px-6 lg:px-8">
      <a
        className="font-heading text-3xl leading-none font-extrabold text-[#6d31f8] md:text-4xl lg:text-5xl"
        href="#"
      >
        DigiTools
      </a>

      <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
        <a className="text-lg font-semibold text-[#2f3745]" href="#products">
          Products
        </a>
        <a className="text-lg font-semibold text-[#2f3745]" href="#steps">
          Features
        </a>
        <a className="text-lg font-semibold text-[#2f3745]" href="#pricing">
          Pricing
        </a>
        <a className="text-lg font-semibold text-[#2f3745]" href="#testimonials">
          Testimonials
        </a>
        <a className="text-lg font-semibold text-[#2f3745]" href="#footer">
          FAQ
        </a>
      </nav>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          className="btn btn-ghost relative border-none bg-transparent text-xl text-[#1f2937] shadow-none hover:bg-transparent"
          onClick={onOpenCart}
          type="button"
        >
          <FaShoppingCart aria-hidden="true" />
          {cartCount > 0 ? (
            <span className="badge badge-error badge-xs absolute -top-1 -right-1 text-white">
              {cartCount}
            </span>
          ) : null}
        </button>
        <a
          className="hidden text-lg font-semibold text-[#2f3745] lg:inline-flex" href="#"
        >
          Login
        </a>
        <button
          className="btn btn-primary hidden rounded-full border-0 bg-linear-to-r from-[#6c30f8] to-[#8123f7] text-sm font-bold text-white lg:inline-flex lg:btn-md lg:px-6 lg:text-base"
          type="button"
        >
          Get Started
        </button>
        <button
          className="btn btn-ghost btn-sm border-none text-xl text-[#1f2937] shadow-none lg:hidden"
          onClick={toggleMobileMenu}
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navlinks"
        >
          {isMobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <nav
          id="mobile-navlinks"
          className="absolute top-full right-0 left-0 z-20 flex flex-col gap-3 border-b border-[#dfdfe4] bg-[#f8f8fb] px-4 py-4 shadow-sm lg:hidden"
          aria-label="Mobile navigation"
        >
          <a className="text-base font-semibold text-[#2f3745]" href="#products" onClick={closeMobileMenu}>
            Products
          </a>
          <a className="text-base font-semibold text-[#2f3745]" href="#steps" onClick={closeMobileMenu}>
            Features
          </a>
          <a className="text-base font-semibold text-[#2f3745]" href="#pricing" onClick={closeMobileMenu}>
            Pricing
          </a>
          <a className="text-base font-semibold text-[#2f3745]" href="#testimonials" onClick={closeMobileMenu}>
            Testimonials
          </a>
          <a className="text-base font-semibold text-[#2f3745]" href="#footer" onClick={closeMobileMenu}>
            FAQ
          </a>
          <a className="text-base font-semibold text-[#2f3745]" href="#" onClick={closeMobileMenu}>
            Login
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
