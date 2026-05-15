const SPECIALTIES = [
  {
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&auto=format&fit=crop',
    alt: 'Platelet lysate processing',
    tag: 'Platform 01',
    title: 'Platelet Lysates',
    desc: 'Highly refined, growth-factor–rich formulations engineered for consistency, purity, and therapeutic potency.',
    points: [
      'Acellular & low-inflammatory',
      'Immediate growth factor release',
      'Batch-to-batch reproducibility',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&q=80&auto=format&fit=crop',
    alt: 'Bone marrow stem cell research',
    tag: 'Platform 02',
    title: 'Bone Marrow–Derived Stem Cells',
    desc: 'Concentrated cellular products designed to support tissue repair, modulate inflammation, and promote regeneration.',
    points: [
      'High-efficiency aspiration',
      'Proprietary concentration protocols',
      'Sterile, closed-system processing',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
    alt: 'Combination biologic therapy research',
    tag: 'Platform 03',
    title: 'Combination Biologic Therapies',
    desc: 'Platelet lysate + bone marrow stem cell formulations engineered to outperform PRP and conventional BMAC.',
    points: [
      'Reduce pain & improve joint function',
      'Support cartilage regeneration',
      'Non-surgical alternatives to delay surgery',
    ],
  },
]

export default function Specialties() {
  return (
    <section className="specialties" id="specialties">
      <div className="container">
        <span className="section-eyebrow">What We Specialize In</span>
        <h2 className="section-title">
          Three biologic platforms, one regenerative science.
        </h2>
        <p className="section-lede">
          Every product is manufactured under rigorous quality, safety, and
          documentation standards — engineered for enhanced purity, potency, and
          reproducibility compared to conventional preparations.
        </p>

        <div className="specialty-grid">
          {SPECIALTIES.map((s) => (
            <div className="specialty-card" key={s.tag}>
              <div className="specialty-image">
                <img src={s.img} alt={s.alt} />
              </div>
              <div className="specialty-body">
                <span className="specialty-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
