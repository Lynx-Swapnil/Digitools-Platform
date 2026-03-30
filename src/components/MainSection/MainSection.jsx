import { FaStar } from 'react-icons/fa'
import { iconMap, priceText } from './productHelpers'

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
          Find the right products for your workflow and switch to cart view
          anytime.
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
            Cart
          </button>
        </div>
      </header>

      {activeView === 'products' ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || FaStar
            const isInCart = cartItemIds.has(product.id)

            return (
              <article
                key={product.id}
                className="flex flex-col gap-3 rounded-2xl border border-[#e8e9f0] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe9ff] text-[#6d31f8]"
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <span className="rounded-full bg-[#f6f2ff] px-2.5 py-1 text-xs font-bold text-[#6429e8]">
                    {product.tagType}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#1d1f3a]">{product.name}</h3>
                <p className="text-[#5c5f7a]">{product.description}</p>
                <p className="font-bold text-[#1d1f3a]">
                  {priceText(product.price, product.period)}
                </p>
                <ul className="list-inside list-disc text-[#5c5f7a]">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`mt-auto rounded-full border-0 px-5 py-2 text-sm font-bold text-white ${
                    isInCart
                      ? 'cursor-not-allowed bg-[#b8a8eb]'
                      : 'bg-gradient-to-r from-[#5f2cff] to-[#9627ff]'
                  }`}
                  onClick={() => onAddToCart(product)}
                  disabled={isInCart}
                >
                  {isInCart ? 'Added to cart' : 'Buy Now'}
                </button>
              </article>
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
                {cartItems.map((item, index) => {
                  const Icon = iconMap[item.icon] || FaStar

                  return (
                    <article
                      key={`${item.id}-${index}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#e8e9f0] p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe9ff] text-[#6d31f8]"
                          aria-hidden="true"
                        >
                          <Icon />
                        </span>
                        <div>
                          <h4 className="m-0 font-heading text-lg font-bold text-[#1d1f3a]">
                            {item.name}
                          </h4>
                          <p className="m-0 text-[#5c5f7a]">{priceText(item.price, item.period)}</p>
                        </div>
                      </div>
                      <button
                        className="rounded-full border-0 bg-[#ffe8ec] px-3 py-1.5 font-bold text-[#d7254d]"
                        type="button"
                        onClick={() => onRemoveFromCart(index)}
                      >
                        Remove
                      </button>
                    </article>
                  )
                })}
              </div>
              <div className="mt-4">
                <p className="mb-3 flex justify-between">
                  <span>Total ({cartItems.length})</span>
                  <strong>${totalPrice}</strong>
                </p>
                <button
                  className="rounded-full border-0 bg-gradient-to-r from-[#5f2cff] to-[#9627ff] px-5 py-2 text-sm font-bold text-white"
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
