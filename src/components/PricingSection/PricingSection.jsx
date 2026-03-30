import { useEffect, useState } from 'react'
import PricingCard from './PricingCard'

function PricingSection() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const response = await fetch('/plans.json')
        if (!response.ok) {
          throw new Error('Unable to load plans')
        }

        const data = await response.json()
        setPlans(data)
      } catch (_error) {
        setPlans([])
      }
    }

    loadPlans()
  }, [])

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
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export default PricingSection
