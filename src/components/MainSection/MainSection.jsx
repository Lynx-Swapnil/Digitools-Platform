import CartSection from './CartSection'
import ProductCard from './ProductCard'

function MainSection({
  products,
  activeView,
  onShowProducts,
  onShowCart,
  onAddToCart,
  cartItems,
  totalPrice,
  onRemoveFromCart,
  onCheckout,
}) {
  const baseToggleButton =
    'btn join-item rounded-full border-0 px-4 py-2 text-sm font-bold shadow-none transition-none hover:shadow-none focus:shadow-none md:px-5'
  const cartItemIds = new Set(cartItems.map((item) => item.id))

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-14 md:px-4 lg:px-6" id="products">
      <header className="mb-7 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight text-[#1d1f3a]">
          Premium Digital Tools
        </h2>
        <p className="text-[#5c5f7a]">
          Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
        </p>
        <div
          className="join mt-4 inline-flex rounded-full border border-[#e8e9f0] bg-white p-1"
          role="tablist"
          aria-label="View switcher"
        >
          <button
            className={`${baseToggleButton} ${
              activeView === 'products'
                ? 'btn-primary bg-[#6d31f8] text-white'
                : 'btn-ghost bg-transparent text-[#5c5f7a]'
            }`}
            type="button"
            role="tab"
            aria-selected={activeView === 'products'}
            onClick={onShowProducts}
          >
            Products
          </button>
          <button
            className={`${baseToggleButton} ${
              activeView === 'cart'
                ? 'btn-primary bg-[#6d31f8] text-white'
                : 'btn-ghost bg-transparent text-[#5c5f7a]'
            }`}
            type="button"
            role="tab"
            aria-selected={activeView === 'cart'}
            onClick={onShowCart}
          >
            Cart{cartItems.length > 0 ? ` (${cartItems.length})` : ''}
          </button>
        </div>
      </header>

      {activeView === 'products' ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const isInCart = cartItemIds.has(product.id)

            return (
              <ProductCard
                key={product.id}
                product={product}
                isInCart={isInCart}
                onAddToCart={onAddToCart}
              />
            )
          })}
        </div>
      ) : (
        <CartSection
          cartItems={cartItems}
          totalPrice={totalPrice}
          onRemoveFromCart={onRemoveFromCart}
          onCheckout={onCheckout}
        />
      )}
    </section>
  )
}

export default MainSection
