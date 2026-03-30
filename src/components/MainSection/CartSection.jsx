import CartItemCard from './CartItemCard'

function CartSection({ cartItems, totalPrice, onRemoveFromCart, onCheckout }) {
  return (
    <section className="rounded-2xl border border-[#e8e9f0] bg-white p-5" aria-live="polite">
      <h3 className="pb-6 text-center font-heading text-2xl font-bold text-[#1d1f3a]">Your Cart</h3>

      {!cartItems.length ? (
        <p className="mt-2 pb-8 text-center text-[#5c5f7a]">
          Your cart is empty. Pick a product to get started.
        </p>
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
              className="btn btn-primary w-full rounded-full border-0 bg-linear-to-r from-[#5f2cff] to-[#9627ff] px-5 text-sm font-bold text-white"
              type="button"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default CartSection
