const LAB_FEATURES = [
  {
    num: '01',
    title: 'Precision Platelet Lysate Processing',
    desc: 'Controlled, multi-stage processing that delivers a highly bioactive, acellular product ideal for spine, joint, and wound applications.',
    items: [
      'Maximizes growth factor availability',
      'Eliminates unwanted cellular debris',
      'Reduces inflammatory cytokines',
      'Ensures batch-to-batch reproducibility',
    ],
  },
  {
    num: '02',
    title: 'Bone Marrow Stem Cell Optimization',
    desc: 'Bone marrow–derived stem cell products engineered for potent, clinically reliable regenerative repair.',
    items: [
      'High-efficiency aspiration techniques',
      'Proprietary concentration protocols',
      'Controlled activation steps',
      'Sterile, closed-system processing',
    ],
  },
  {
    num: '03',
    title: 'Combination Biologic Engineering',
    desc: 'Integrating platelet lysate with bone marrow stem cells to create synergistic biologic therapies.',
    items: [
      'Enhances cellular viability',
      'Improves regenerative signaling',
      'Supports cartilage & soft-tissue repair',
      'Superior anti-inflammatory effects',
    ],
  },
  {
    num: '04',
    title: 'Quality, Safety, and Traceability',
    desc: 'Every CytoRegenX product meets the expectations of clinicians, regulatory bodies, and patients.',
    items: [
      'Sterility testing',
      'Growth factor quantification',
      'Viability and potency assessment',
      'Full traceability documentation',
    ],
  },
]

export default function Lab() {
  return (
    <section className="lab" id="lab">
      <div className="container">
        <div className="lab-header">
          <div className="lab-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=1200&q=80&auto=format&fit=crop"
              alt="FDA-registered cleanroom laboratory"
            />
            <div className="lab-image-badge">FDA-Registered Facility</div>
          </div>
          <div>
            <span className="section-eyebrow">Our Capabilities</span>
            <h2 className="section-title">
              FDA-registered laboratory with advanced biologic manufacturing.
            </h2>
            <p className="section-lede">
              Every product is manufactured under rigorous quality, safety, and
              documentation standards. Our proprietary technologies allow us to
              produce biologics that are qualitatively and quantitatively
              superior, with unmatched consistency and therapeutic potential.
            </p>
          </div>
        </div>

        <div className="lab-features">
          {LAB_FEATURES.map((f) => (
            <div className="lab-feature" key={f.num}>
              <div className="lab-feature-num">{f.num}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
              <ul>
                {f.items.map((item) => (
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
