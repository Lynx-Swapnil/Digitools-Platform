import { FaStar } from 'react-icons/fa'
import { iconMap, priceText } from './productHelpers'

function MainSection({
  products,
  activeView,
  onShowProducts,
  onShowCart,
  recentlyAddedId,
  onAddToCart,
  cartItems,
  totalPrice,
  onRemoveFromCart,
  onCheckout,
}) {
  return (
    <section className="main-section container" id="products">
      <header className="section-heading">
        <h2>Premium Digital Tools</h2>
        <p>
          Find the right products for your workflow and switch to cart view
          anytime.
        </p>
        <div className="view-toggle" role="tablist" aria-label="View switcher">
          <button
            className={activeView === 'products' ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeView === 'products'}
            onClick={onShowProducts}
          >
            Products
          </button>
          <button
            className={activeView === 'cart' ? 'active' : ''}
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
        <div className="product-grid">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || FaStar

            return (
              <article key={product.id} className="product-card">
                <div className="card-head">
                  <span className="product-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="tag">{product.tagType}</span>
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{priceText(product.price, product.period)}</p>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn btn-primary buy-btn"
                  onClick={() => onAddToCart(product)}
                >
                  {recentlyAddedId === product.id ? 'Added to cart' : 'Buy Now'}
                </button>
              </article>
            )
          })}
        </div>
      ) : (
        <section className="cart-panel" aria-live="polite">
          <h3>Your Cart</h3>

          {!cartItems.length ? (
            <p className="empty-cart">Your cart is empty. Pick a product to get started.</p>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item, index) => {
                  const Icon = iconMap[item.icon] || FaStar

                  return (
                    <article key={`${item.id}-${index}`} className="cart-item">
                      <div>
                        <span className="product-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div>
                          <h4>{item.name}</h4>
                          <p>{priceText(item.price, item.period)}</p>
                        </div>
                      </div>
                      <button type="button" onClick={() => onRemoveFromCart(index)}>
                        Remove
                      </button>
                    </article>
                  )
                })}
              </div>
              <div className="cart-footer">
                <p>
                  <span>Total ({cartItems.length})</span>
                  <strong>${totalPrice}</strong>
                </p>
                <button className="btn btn-primary" type="button" onClick={onCheckout}>
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
