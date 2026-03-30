import { FaStar } from 'react-icons/fa'
import { iconMap, priceText } from './productHelpers'

function ProductCard({ product, isInCart, onAddToCart }) {
  const Icon = iconMap[product.icon] || FaStar

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-[#e8e9f0] bg-white p-4">
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
      <p className="font-bold text-[#1d1f3a]">{priceText(product.price, product.period)}</p>
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
}

export default ProductCard
