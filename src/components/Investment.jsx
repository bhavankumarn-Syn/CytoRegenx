const INVEST_CARDS = [
  {
    num: '01',
    title: 'A Massive & Growing Market',
    desc: 'Positioned at the intersection of orthopedics, spine care, sports medicine, and chronic wound management — all multi-billion-dollar verticals.',
    items: [
      'Rising spine & joint degeneration',
      'Aging population with chronic disease',
      'Demand for non-surgical, minimally invasive therapies',
    ],
  },
  {
    num: '02',
    title: 'Proprietary, Differentiated Technology',
    desc: 'A competitive advantage built on FDA-registered manufacturing and precision biologic engineering.',
    items: [
      'High-purity, high-potency platelet lysate',
      'Optimized bone marrow stem cell engineering',
      'Combination biologics that outperform PRP and BMAC',
    ],
  },
  {
    num: '03',
    title: 'Clinically Driven, Scientifically Led',
    desc: '40+ years of combined experience bridging clinical practice, scientific innovation, and commercialization.',
    items: [
      'Fellowship-trained spine surgeon',
      'Internationally recognized cellular biologist',
      'Dual-expertise translational model',
    ],
  },
  {
    num: '04',
    title: 'Clear Clinical Value Proposition',
    desc: 'Biologics that target high-burden, high-cost conditions driving billions in annual healthcare spending.',
    items: [
      'Spine: DDD, facet arthropathy, axial pain',
      'Joints: OA, cartilage, tendon & ligament',
      'Wounds: diabetic, venous, pressure ulcers',
    ],
  },
  {
    num: '05',
    title: 'Strong Commercial Potential',
    desc: 'Designed for rapid clinical adoption with low integration friction in existing workflows.',
    items: [
      'High clinician demand for standardized biologics',
      'Growing dissatisfaction with PRP variability',
      'Scalable manufacturing infrastructure',
    ],
  },
  {
    num: '06',
    title: 'Scalable Business Model',
    desc: 'A multi-channel platform delivering diversified revenue streams and long-term growth potential.',
    items: [
      'Direct product sales',
      'Clinical partnerships & private label',
      'Technology licensing',
      'Future allogeneic biologics',
    ],
  },
]

export default function Investment() {
  return (
    <section className="invest" id="invest">
      <div className="container">
        <span className="section-eyebrow">The Investment Thesis</span>
        <h2 className="section-title">
          The future of regenerative medicine is standardized, potent, and
          clinically reliable.
        </h2>
        <p className="section-lede">
          CytoRegenX addresses the biggest unmet need in regenerative medicine:
          the lack of standardized, reproducible, high-potency biologic products
          that clinicians can trust and regulators can validate.
        </p>

        <div className="invest-grid">
          {INVEST_CARDS.map((card) => (
            <div className="invest-card" key={card.num}>
              <div className="invest-num">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
