const CONDITIONS = [
  {
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80&auto=format&fit=crop',
    alt: 'Spine treatment regenerative medicine',
    title: 'Spine Disorders',
    items: [
      'Degenerative disc disease',
      'Facet joint arthropathy',
      'Disc bulges & axial pain',
      'Chronic low back pain',
      'Annular tears',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80&auto=format&fit=crop',
    alt: 'Joint pathology orthopedic care',
    title: 'Joint Pathology',
    items: [
      'Osteoarthritis (early stages)',
      'Tendon & ligament injuries',
      'Cartilage degeneration',
      'Post-traumatic & post-surgical joint pain',
      'Meniscal tears',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=900&q=80&auto=format&fit=crop',
    alt: 'Chronic wound care therapy',
    title: 'Chronic Indolent Wounds',
    items: [
      'Diabetic ulcers',
      'Venous stasis ulcers',
      'Pressure injuries',
      'Non-healing surgical wounds',
    ],
  },
]

export default function Conditions() {
  return (
    <section className="conditions" id="conditions">
      <div className="container">
        <span className="section-eyebrow">Conditions We Target</span>
        <h2 className="section-title">
          Biologic solutions for spine, joint, and chronic wound conditions.
        </h2>
        <p className="section-lede">
          Our products are designed to address some of the most challenging
          high-burden, high-cost clinical conditions in modern care — offering
          non-surgical regenerative alternatives that meaningfully improve
          patient outcomes.
        </p>

        <div className="conditions-grid">
          {CONDITIONS.map((c) => (
            <div className="condition-card" key={c.title}>
              <div className="condition-image">
                <img src={c.img} alt={c.alt} />
                <div className="condition-image-overlay">
                  <h3>{c.title}</h3>
                </div>
              </div>
              <div className="condition-body">
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
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
