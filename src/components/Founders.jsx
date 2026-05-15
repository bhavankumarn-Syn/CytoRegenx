const FOUNDERS = [
  {
    initials: 'KR',
    name: 'Dr. D. Krishnareddy, MD, FAAOS',
    role: 'Co-Founder · Clinical Leadership',
    bio: 'Fellowship-trained spine surgeon with decades of orthopedic, spine, and regenerative medicine experience guiding clinical translation.',
  },
  {
    initials: 'FI',
    name: 'Dr. Fari Izadyar, DVM, PhD',
    role: 'Co-Founder · Chief Scientist',
    bio: 'Internationally recognized expert in cellular biology, stem cell science, and biologic product development with deep R&D leadership.',
  },
]

export default function Founders() {
  return (
    <section className="founders">
      <div className="container">
        <div className="founders-grid">
          <div className="founders-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop"
              alt="Medical research collaboration"
            />
          </div>
          <div>
            <span className="section-eyebrow">Our Founders</span>
            <h2 className="section-title">
              Founders with 40+ years of combined expertise.
            </h2>
            <p className="section-lede">
              CytoRegenX bridges decades of surgical and scientific leadership —
              combining hands-on clinical insight with frontier-level cellular
              biology to build biologics that meaningfully improve patient
              outcomes.
            </p>

            <div className="founder-cards">
              {FOUNDERS.map((f) => (
                <div className="founder-card" key={f.initials}>
                  <div className="founder-avatar">{f.initials}</div>
                  <div>
                    <div className="founder-name">{f.name}</div>
                    <div className="founder-role">{f.role}</div>
                    <p className="founder-bio">{f.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
