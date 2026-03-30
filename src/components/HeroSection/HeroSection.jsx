import heroImg from '../../../assets/banner.png'
import playIcon from '../../../assets/Play.png'

function HeroSection() {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-copy">
        <p className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true"></span>
          New: AI-Powered Tools Available
        </p>
        <h1>Supercharge Your Digital Workflow</h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity
          software-all in one place. Start creating faster today.
        </p>
        <a className="hero-link" href="#products">
          Explore Products
        </a>
        <div className="hero-actions">
          <button className="btn btn-primary" type="button">
            Explore Products
          </button>
          <button className="btn btn-secondary" type="button">
            <img src={playIcon} alt="" aria-hidden="true" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroImg} alt="Digital workflow dashboard" />
      </div>
    </section>
  )
}

export default HeroSection
