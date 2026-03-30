import { FaShoppingCart } from 'react-icons/fa'

function Navbar({ cartCount, onOpenCart }) {
  return (
    <div className="navbar-wrap">
      <div className="top-strip container">Home</div>
      <header className="navbar container navbar-shell">
        <a className="logo" href="#">
          DigiTools
        </a>

        <nav className="nav-menu" aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#steps">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#footer">FAQ</a>
        </nav>

        <div className="nav-actions">
          <button
            className="nav-cart-button"
            type="button"
            onClick={onOpenCart}
            aria-label="Open cart"
            title="Open cart"
          >
            <FaShoppingCart aria-hidden="true" />
            <span className="cart-count">{cartCount}</span>
          </button>
          <button className="nav-login" type="button">
            Login
          </button>
          <button className="nav-cta" type="button">
            Get Started
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
