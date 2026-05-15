export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="hero-eyebrow">Regenerative Medicine, Engineered</span>
          <h1>
            Advancing regenerative medicine with{' '}
            <em>precision-engineered biologics.</em>
          </h1>
          <p className="lede">
            CytoRegenX develops next-generation platelet lysates and bone
            marrow–derived stem cell therapies — safer, more consistent, and
            clinically effective for patients with debilitating spine, joint,
            and chronic wound conditions.
          </p>
          <a href="#specialties" className="btn btn-primary">
            Explore Our Biologics →
          </a>
          <a href="#invest" className="btn btn-ghost">
            For Investors
          </a>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80&auto=format&fit=crop"
            alt="Scientist working in regenerative medicine laboratory"
            loading="eager"
          />
          <div className="hero-visual-overlay">
            <div className="hero-stats-row">
              <div>
                <div className="hero-stat-label">Founders' Experience</div>
                <div className="hero-stat-value">40+ yrs</div>
              </div>
              <div>
                <div className="hero-stat-label">Manufacturing</div>
                <div className="hero-stat-value">FDA Reg.</div>
              </div>
              <div>
                <div className="hero-stat-label">Core Platforms</div>
                <div className="hero-stat-value">3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
