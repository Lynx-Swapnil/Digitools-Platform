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
          className="btn btn-ghost relative text-xl text-[#1f2937] hover: bg-transparent border-none shadow-none"
          onClick={onOpenCart}
        >
          <FaShoppingCart aria-hidden="true" />
          {cartCount > 0 ? (
            <span className="badge badge-error badge-xs absolute -top-1 -right-1 text-white">
              {cartCount}
            </span>
          ) : null}
        </button>
        <a
          className="text-lg font-semibold text-[#2f3745] md:inline-flex" href="#"
        >
          Login
        </a>
        <button
          className="btn btn-primary btn-sm rounded-full border-0 bg-linear-to-r from-[#6c30f8] to-[#8123f7] text-sm font-bold text-white md:btn-md md:px-6 md:text-base"
          type="button"
        >
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Navbar
