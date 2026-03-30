function StatsSection() {
  return (
    <section
      className="grid grid-cols-1 gap-4 bg-gradient-to-r from-[#4f2cff] to-[#9f22ff] px-5 py-8 text-center text-white md:grid-cols-3"
      aria-label="Platform statistics"
    >
      <div>
        <h3 className="font-heading text-4xl font-bold leading-none">50K+</h3>
        <p className="mt-2 opacity-85">Active Users</p>
      </div>
      <div>
        <h3 className="font-heading text-4xl font-bold leading-none">200+</h3>
        <p className="mt-2 opacity-85">Premium Tools</p>
      </div>
      <div>
        <h3 className="font-heading text-4xl font-bold leading-none">4.9</h3>
        <p className="mt-2 opacity-85">Rating</p>
      </div>
    </section>
  )
}

export default StatsSection
