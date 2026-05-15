const CLINICAL_COLUMNS = [
  {
    title: 'Spine Applications',
    apps: [
      {
        h: 'Degenerative Disc Disease',
        items: [
          'Reduce discogenic pain',
          'Support disc matrix repair',
          'Improve functional mobility',
        ],
      },
      {
        h: 'Facet Joint Arthropathy',
        items: [
          'Chronic facet-mediated pain',
          'Inflammatory degeneration',
          'Joint surface deterioration',
        ],
      },
      {
        h: 'Disc Bulges & Axial Pain',
        items: [
          'Modulating inflammation',
          'Supporting annular healing',
          'Reducing nerve irritation',
        ],
      },
    ],
  },
  {
    title: 'Joint Applications',
    apps: [
      {
        h: 'Osteoarthritis',
        items: [
          'Reduce pain and stiffness',
          'Improve joint lubrication',
          'Support cartilage regeneration',
          'Delay or avoid joint replacement',
        ],
      },
      {
        h: 'Tendon & Ligament Injuries',
        items: [
          'Rotator cuff injuries',
          'ACL/MCL sprains',
          'Achilles tendinopathy',
          'Chronic overuse injuries',
        ],
      },
    ],
  },
  {
    title: 'Chronic Wound Applications',
    apps: [
      {
        h: 'Non-Healing Wounds',
        items: [
          'Stimulate angiogenesis',
          'Enhance fibroblast activity',
          'Promote tissue granulation',
          'Reduce chronic inflammation',
        ],
      },
      {
        h: 'Indications',
        items: [
          'Diabetic ulcers',
          'Venous ulcers',
          'Pressure injuries',
          'Post-surgical wounds',
        ],
      },
    ],
  },
]

export default function Clinical() {
  return (
    <section className="clinical" id="clinical">
      <div className="container clinical-content">
        <span className="section-eyebrow">Clinical Applications</span>
        <h2 className="section-title">
          Biologic solutions for the most challenging clinical conditions.
        </h2>
        <p className="section-lede">
          CytoRegenX products are engineered to deliver measurable functional
          improvement across spine, joint, and wound care — meeting the highest
          standards of safety, consistency, and therapeutic potential.
        </p>

        <div className="clinical-grid">
          {CLINICAL_COLUMNS.map((col) => (
            <div className="clinical-col" key={col.title}>
              <h3>{col.title}</h3>
              {col.apps.map((app) => (
                <div className="clinical-app" key={app.h}>
                  <h4>{app.h}</h4>
                  <ul>
                    {app.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
