function StepsSection() {
  return (
    <section
      className="mx-auto w-full max-w-[1280px] bg-gradient-to-b from-[rgba(117,73,255,0.06)] to-transparent px-3 py-14 md:px-4 lg:px-6"
      id="steps"
    >
      <header className="mb-7 text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight text-[#1d1f3a]">
          Get Started In 3 Steps
        </h2>
        <p className="text-[#5c5f7a]">Simple steps to begin your productivity journey.</p>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#e8e9f0] bg-white p-5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6d31f8] text-sm font-bold text-white">
            01
          </span>
          <h3 className="mt-3 font-heading text-xl font-bold text-[#1d1f3a]">Create Account</h3>
          <p className="text-[#5c5f7a]">Set up your profile and personalize your workspace.</p>
        </article>
        <article className="rounded-2xl border border-[#e8e9f0] bg-white p-5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6d31f8] text-sm font-bold text-white">
            02
          </span>
          <h3 className="mt-3 font-heading text-xl font-bold text-[#1d1f3a]">Choose Products</h3>
          <p className="text-[#5c5f7a]">Browse tools and add the most relevant ones to cart.</p>
        </article>
        <article className="rounded-2xl border border-[#e8e9f0] bg-white p-5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6d31f8] text-sm font-bold text-white">
            03
          </span>
          <h3 className="mt-3 font-heading text-xl font-bold text-[#1d1f3a]">Start Creating</h3>
          <p className="text-[#5c5f7a]">Unlock your resources and ship with confidence.</p>
        </article>
      </div>
    </section>
  )
}

export default StepsSection
