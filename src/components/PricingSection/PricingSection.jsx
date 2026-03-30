function PricingSection() {
  return (
    <section className="pricing container" id="pricing">
      <header className="section-heading">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose a package based on your current stage.</p>
      </header>
      <div className="pricing-grid">
        <article>
          <h3>Starter</h3>
          <p className="plan-price">$0/month</p>
          <ul>
            <li>3 products included</li>
            <li>Basic support</li>
            <li>1 shared workspace</li>
          </ul>
          <button className="btn btn-secondary" type="button">
            Start Free
          </button>
        </article>
        <article className="featured-plan">
          <p className="plan-tag">Most Popular</p>
          <h3>Pro</h3>
          <p className="plan-price">$29/month</p>
          <ul>
            <li>Unlimited products</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="btn btn-primary" type="button">
            Go Pro
          </button>
        </article>
        <article>
          <h3>Enterprise</h3>
          <p className="plan-price">$99/month</p>
          <ul>
            <li>Dedicated manager</li>
            <li>Custom integrations</li>
            <li>Security review</li>
          </ul>
          <button className="btn btn-secondary" type="button">
            Contact Sales
          </button>
        </article>
      </div>
    </section>
  )
}

export default PricingSection
