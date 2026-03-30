function SectionSpinner({ id, message }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-16 md:px-4 lg:px-6" id={id}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#e8e9f0] bg-white/80 p-10 text-center">
        <span className="loading loading-spinner loading-lg text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold text-[#5c5f7a]">{message}</p>
      </div>
    </section>
  )
}

export default SectionSpinner
