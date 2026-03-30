function StatsSection() {
  return (
    <section
      className="grid grid-cols-1 bg-linear-to-r from-[#4f2cff] to-[#9f22ff] px-4 py-7 text-center text-white md:grid-cols-3"
      aria-label="Platform statistics"
    >
      <div className="py-3 md:border-r md:border-white/25">
        <h3 className="font-heading text-5xl font-extrabold leading-none">50K+</h3>
        <p className="mt-2 text-lg text-white/85">Active Users</p>
      </div>
      <div className="py-3 md:border-r md:border-white/25">
        <h3 className="font-heading text-5xl font-extrabold leading-none">200+</h3>
        <p className="mt-2 text-lg text-white/85">Premium Tools</p>
      </div>
      <div className="py-3">
        <h3 className="font-heading text-5xl font-extrabold leading-none">4.9</h3>
        <p className="mt-2 text-lg text-white/85">Rating</p>
      </div>
    </section>
  )
}

export default StatsSection
