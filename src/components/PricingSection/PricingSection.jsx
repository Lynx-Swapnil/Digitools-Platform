import { use, useState } from 'react'
import PricingCard from './PricingCard'

function PricingSection({ plansPromise }) {
  const plans = use(plansPromise)
  const [selectedPlan, setSelectedPlan] = useState('')
  const defaultActivePlan = plans.find((plan) => plan.featured)?.name || plans[0]?.name || ''
  const activePlan = plans.some((plan) => plan.name === selectedPlan)
    ? selectedPlan
    : defaultActivePlan

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-20 md:px-4 lg:px-6" id="pricing">
      <header className="mb-9 text-center">
        <h2 className="font-heading text-5xl font-extrabold leading-tight text-[#111827]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 text-lg text-[#64748b]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            isActive={activePlan === plan.name}
            onSelect={() => setSelectedPlan(plan.name)}
          />
        ))}
      </div>
    </section>
  )
}

export default PricingSection
