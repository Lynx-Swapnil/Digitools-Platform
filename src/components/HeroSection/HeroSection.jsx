import heroImg from '../../assets/hero.png'

function HeroSection() {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-copy">
        <p className="hero-badge">No. 1 trusted platform</p>
        <h1>Supercharge Your Digital Workflow</h1>
        <p>
          Access carefully curated digital resources that help creators,
          freelancers, and teams ship better work in less time.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" type="button">
            Get Started
          </button>
          <button className="btn btn-secondary" type="button">
            View Plans
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
