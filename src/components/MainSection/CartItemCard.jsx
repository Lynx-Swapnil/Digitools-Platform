import { FaStar } from 'react-icons/fa'
import { iconMap, priceText } from './productHelpers'

function CartItemCard({ item, index, onRemoveFromCart }) {
  const Icon = iconMap[item.icon] || FaStar

  return (
    <article className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e8e9f0] p-3">
      <div className="flex min-w-0 items-center gap-3">
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#efe9ff] text-[#6d31f8]"
          aria-hidden="true"
        >
          <Icon />
        </span>
        <div className="min-w-0">
          <h4 className="m-0 truncate font-heading text-lg font-bold text-[#1d1f3a]">{item.name}</h4>
          <p className="m-0 text-[#5c5f7a]">{priceText(item.price, item.period)}</p>
        </div>
      </div>
      <button
        className="btn btn-ghost btn-sm shrink-0 rounded-full border-0 bg-[#ffe8ec] px-3 font-bold text-[#d7254d]"
        type="button"
        onClick={() => onRemoveFromCart(index)}
      >
        Remove
      </button>
    </article>
  )
}

export default CartItemCard
