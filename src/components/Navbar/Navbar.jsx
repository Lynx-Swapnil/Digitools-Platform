import { FaShoppingCart } from 'react-icons/fa'

function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="flex w-full items-center justify-around gap-4 border-y border-[#dfdfe4] bg-transparent px-4 py-4 md:px-6 lg:px-8">
      <a
        className="font-heading text-4xl leading-none font-extrabold text-[#6d31f8] md:text-5xl"
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
          className="relative inline-flex items-center justify-center border-0 bg-transparent text-xl text-[#1f2937]"
          type="button"
          onClick={onOpenCart}
          aria-label="Open cart"
          title="Open cart"
        >
          <FaShoppingCart aria-hidden="true" />
          <span className="absolute -top-2 -right-3 inline-flex h-[1.15rem] min-w-[1.15rem] items-center justify-center rounded-full bg-red-500 px-1 text-[0.68rem] font-bold leading-none text-white">
            {cartCount}
          </span>
        </button>
        <button
          className="hidden border-0 bg-transparent text-base font-semibold text-[#182231] md:inline-block"
          type="button"
        >
          Login
        </button>
        <button
          className="rounded-full border-0 bg-gradient-to-r from-[#6c30f8] to-[#8123f7] px-4 py-2 text-sm font-bold text-white md:px-6 md:text-base"
          type="button"
        >
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Navbar
