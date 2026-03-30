import { FaCheck } from 'react-icons/fa'

function PricingCard({ plan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-5 ${
        plan.featured
          ? 'border-transparent bg-linear-to-br from-[#5f2cff] to-[#a21dff] text-white shadow-[0_18px_32px_-24px_rgba(98,46,255,0.9)]'
          : 'border-[#e5e7eb] bg-white text-[#111827]'
      }`}
    >
      {plan.badge ? (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffd86e] px-3 py-1 text-xs font-bold text-[#9a5900]">
          {plan.badge}
        </p>
      ) : null}

      <h3 className="font-heading text-4xl font-bold">{plan.name}</h3>
      <p className={`mt-1 text-lg ${plan.featured ? 'text-white/85' : 'text-[#64748b]'}`}>
        {plan.subtitle}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-heading text-5xl font-extrabold">{plan.price}</span>
        <span className={`${plan.featured ? 'text-white/85' : 'text-[#64748b]'}`}>{plan.period}</span>
      </div>

      <ul className="mt-6 space-y-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-2 ${plan.featured ? 'text-white' : 'text-[#334155]'}`}
          >
            <FaCheck className={`mt-1 shrink-0 ${plan.featured ? 'text-white' : 'text-[#22c55e]'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
     <br />
      <button
        className={`mt-auto w-full rounded-full px-5 py-2.5 text-base font-bold ${
          plan.featured
            ? 'bg-white text-[#5f2cff]'
            : 'bg-linear-to-r from-[#5f2cff] to-[#9627ff] text-white'
        }`}
        type="button"
      >
        {plan.buttonText}
      </button>
    </article>
  )
}

export default PricingCard
