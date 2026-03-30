function CtaSection() {
  return (
    <section className="mt-10 w-full bg-linear-to-r from-[#4f2cff] to-[#9f22ff] px-4 py-20 text-center text-white md:px-6 lg:px-8">
      <h2 className="font-heading text-5xl font-extrabold leading-tight md:text-6xl">
        Ready To Transform Your Workflow?
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br className="hidden md:block" />
        Start your free trial today.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          className="rounded-full border border-transparent bg-white px-7 py-3 text-base font-bold text-[#5f2cff]"
          type="button"
        >
          Explore Products
        </button>
        <button
          className="rounded-full border border-white/70 bg-transparent px-7 py-3 text-base font-medium text-white"
          type="button"
        >
          View Pricing
        </button>
      </div>
      <p className="mt-6 text-sm text-white/75 md:text-base">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  )
}

export default CtaSection
