function CtaSection() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1280px] rounded-2xl bg-gradient-to-r from-[#4f2cff] to-[#9f22ff] px-4 py-11 text-center text-white md:px-5 lg:px-6">
      <h2 className="font-heading text-4xl font-bold leading-tight">Ready To Transform Your Workflow?</h2>
      <p className="mt-2">Join thousands of digital creators and teams using DigiTools daily.</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <button
          className="rounded-full border border-transparent bg-white px-5 py-2 text-sm font-bold text-[#6d31f8]"
          type="button"
        >
          Start Free Trial
        </button>
        <button
          className="rounded-full border-0 bg-gradient-to-r from-[#5f2cff] to-[#9627ff] px-5 py-2 text-sm font-bold text-white"
          type="button"
        >
          Explore Pro
        </button>
      </div>
    </section>
  )
}

export default CtaSection
