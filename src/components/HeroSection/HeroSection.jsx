import heroImg from '../../../assets/banner.png'
import playIcon from '../../../assets/Play.png'

function HeroSection() {
  return (
    <section
      className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-3 pt-10 pb-14 md:px-4 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16 lg:px-6 lg:pt-14 lg:pb-16"
      id="home"
    >
      <div>
        <p className="badge badge-lg mb-4 inline-flex h-auto gap-2 rounded-full border-0 bg-[#dfe2ff] px-4 py-2 text-sm font-semibold text-[#6d31f8]">
          <span
            className="h-2 w-2 rounded-full bg-[#7d33f7] shadow-[0_0_0_3px_rgba(125,51,247,0.18)]"
            aria-hidden="true"
          ></span>
          New: AI-Powered Tools Available
        </p>
        <h1 className="font-heading text-[2.35rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#2b3448] md:text-6xl lg:text-7xl">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-4 max-w-[56ch] text-lg text-[#5c5f7a]">
          Access premium AI tools, design assets, templates, and productivity
          software-all in one place. Start creating faster today.
        </p>
        <a className="mt-1 inline-block text-base font-medium text-[#4b5563]" href="#products">
          Explore Products
        </a>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="btn btn-primary rounded-full border-0 bg-linear-to-r from-[#5f2cff] to-[#9627ff] px-6 text-base font-bold text-white"
            href="#products"
          >
            Explore Products
          </a>
          <button
            className="btn btn-outline inline-flex items-center gap-2 rounded-full border-[#7d33f7] bg-white px-6 text-base font-bold text-[#6d31f8]"
            type="button"
          >
            <img className="h-4 w-4 object-contain" src={playIcon} alt="" aria-hidden="true" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-[#ececf1] bg-linear-to-br from-[#e7e7eb] to-[#f7f7f8]">
        <img
          className="block aspect-square w-full object-cover"
          src={heroImg}
          alt="Digital workflow dashboard"
        />
      </div>
    </section>
  )
}

export default HeroSection
