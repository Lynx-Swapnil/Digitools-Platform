import stepImg1 from '../../../assets/user.png'
import stepImg2 from '../../../assets/package.png'
import stepImg3 from '../../../assets/rocket.png'

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    image: stepImg1,
    imageAlt: 'Create Account',
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    image: stepImg2,
    imageAlt: 'Choose Products',
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    image: stepImg3,
    imageAlt: 'Start Creating',
  },
]

function StepsSection() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-3 py-20 md:px-4 lg:px-6"
      id="steps"
    >
      <header className="mb-10 text-center">
        <h2 className="font-heading text-5xl font-extrabold leading-tight text-[#111827]">
          Get Started In 3 Steps
        </h2>
        <p className="mt-3 text-lg text-[#64748b]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.id}
            className="relative rounded-2xl border border-[#e5e7eb] bg-white px-6 py-8 text-center"
          >
            <span className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#6d31f8] text-xs font-bold text-white">
              {step.id}
            </span>

            <div className="mx-auto mb-5 inline-flex h-18 w-18 items-center justify-center rounded-full bg-[#efe9ff]">
              <img src={step.image} alt={step.imageAlt} className="h-9 w-9 object-contain" />
            </div>

            <h3 className="font-heading text-[2rem] font-bold text-[#1f2937]">{step.title}</h3>
            <p className="mx-auto mt-2 max-w-[240px] text-base leading-relaxed text-[#64748b]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StepsSection
