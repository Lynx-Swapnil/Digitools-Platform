import CartItemCard from './CartItemCard'
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
    'rounded-full border-0 px-4 py-2 text-sm font-bold transition-colors md:px-5'
  const cartItemIds = new Set(cartItems.map((item) => item.id))

  return (
    <section className="mx-auto w-full max-w-[1280px] px-3 py-14 md:px-4 lg:px-6" id="products">
      <header className="mb-7 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight text-[#1d1f3a]">
          Premium Digital Tools
        </h2>
        <p className="text-[#5c5f7a]">
          Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.
        </p>
        <div
          className="mt-4 inline-flex rounded-full border border-[#e8e9f0] bg-white p-1"
          role="tablist"
          aria-label="View switcher"
        >
          <button
            className={`${baseToggleButton} ${
              activeView === 'products'
                ? 'bg-[#6d31f8] text-white'
                : 'bg-transparent text-[#5c5f7a]'
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
              activeView === 'cart' ? 'bg-[#6d31f8] text-white' : 'bg-transparent text-[#5c5f7a]'
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
        <section
          className="rounded-2xl border border-[#e8e9f0] bg-white p-5"
          aria-live="polite"
        >
          <h3 className="font-heading text-2xl font-bold text-[#1d1f3a]">Your Cart</h3>

          {!cartItems.length ? (
            <p className="text-[#5c5f7a]">Your cart is empty. Pick a product to get started.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-3">
                {cartItems.map((item, index) => (
                  <CartItemCard
                    key={`${item.id}-${index}`}
                    item={item}
                    index={index}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                ))}
              </div>
              <div className="mt-4">
                <p className="mb-3 flex justify-between">
                  <span>Total ({cartItems.length})</span>
                  <strong>${totalPrice}</strong>
                </p>
                <button
                  className="w-full rounded-full border-0 bg-linear-to-r from-[#5f2cff] to-[#9627ff] px-6 py-3 text-base font-bold text-white"
                  type="button"
                  onClick={onCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </section>
  )
}

export default MainSection
