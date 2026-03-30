function PricingSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-3 py-14 md:px-4 lg:px-6" id="pricing">
      <header className="mb-7 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight text-[#1d1f3a]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#5c5f7a]">Choose a package based on your current stage.</p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#e8e9f0] bg-white p-5">
          <h3 className="font-heading text-xl font-bold text-[#1d1f3a]">Starter</h3>
          <p className="font-heading text-3xl font-bold text-[#1d1f3a]">$0/month</p>
          <ul className="mt-2 list-inside list-disc text-[#5c5f7a]">
            <li>3 products included</li>
            <li>Basic support</li>
            <li>1 shared workspace</li>
          </ul>
          <button
            className="mt-4 rounded-full border border-[#7d33f7] bg-white px-5 py-2 text-sm font-bold text-[#6d31f8]"
            type="button"
          >
            Start Free
          </button>
        </article>
        <article className="relative rounded-2xl border border-[#a98cff] bg-white p-5">
          <p className="absolute -top-3 left-4 rounded-full bg-[#f6f2ff] px-3 py-1 text-xs font-bold text-[#6429e8]">
            Most Popular
          </p>
          <h3 className="font-heading text-xl font-bold text-[#1d1f3a]">Pro</h3>
          <p className="font-heading text-3xl font-bold text-[#1d1f3a]">$29/month</p>
          <ul className="mt-2 list-inside list-disc text-[#5c5f7a]">
            <li>Unlimited products</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button
            className="mt-4 rounded-full border-0 bg-gradient-to-r from-[#5f2cff] to-[#9627ff] px-5 py-2 text-sm font-bold text-white"
            type="button"
          >
            Go Pro
          </button>
        </article>
        <article className="rounded-2xl border border-[#e8e9f0] bg-white p-5">
          <h3 className="font-heading text-xl font-bold text-[#1d1f3a]">Enterprise</h3>
          <p className="font-heading text-3xl font-bold text-[#1d1f3a]">$99/month</p>
          <ul className="mt-2 list-inside list-disc text-[#5c5f7a]">
            <li>Dedicated manager</li>
            <li>Custom integrations</li>
            <li>Security review</li>
          </ul>
          <button
            className="mt-4 rounded-full border border-[#7d33f7] bg-white px-5 py-2 text-sm font-bold text-[#6d31f8]"
            type="button"
          >
            Contact Sales
          </button>
        </article>
      </div>
    </section>
  )
}

export default PricingSection
