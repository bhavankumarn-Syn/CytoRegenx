const WIN_ITEMS = [
  {
    h: 'Superior biologics in an FDA-registered lab',
    p: 'Rigorous quality, safety, and documentation standards from sample to shelf.',
  },
  {
    h: 'Proprietary technologies competitors cannot replicate',
    p: 'Precision processing protocols delivering measurable, reproducible potency.',
  },
  {
    h: 'Clinically validated, high-demand specialties',
    p: 'Spine, joint, and chronic wound use cases backed by clinical experience.',
  },
  {
    h: 'Strong leadership with deep credibility',
    p: 'Dual-expertise founding team combining surgical practice and cellular science.',
  },
  {
    h: 'Scalable, multi-channel commercialization',
    p: 'Direct sales, partnerships, private label, and licensing — diversified upside.',
  },
  {
    h: 'Standardization the market demands',
    p: 'Addressing the gap PRP and conventional BMAC leave behind in consistency.',
  },
]

export default function WhyWin() {
  return (
    <section className="winwhy">
      <div className="container winwhy-content">
        <span className="section-eyebrow">Why CytoRegenX Will Win</span>
        <h2 className="section-title">
          Not just another regenerative medicine company — a precision-biologics
          platform built for the future of orthopedic, spine, and wound care.
        </h2>

        <div className="winwhy-list">
          {WIN_ITEMS.map((item) => (
            <div className="winwhy-item" key={item.h}>
              <div className="winwhy-icon">✓</div>
              <div>
                <h4>{item.h}</h4>
                <p>{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
