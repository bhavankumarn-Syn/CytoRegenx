const COMPARE_ROWS = [
  {
    feature: 'Cell Content',
    pl: 'Acellular (platelets fully lysed)',
    prp: 'Contains intact platelets and leukocytes',
  },
  {
    feature: 'Growth Factor Release',
    pl: 'Immediate, fully available',
    prp: 'Slow release over 5–7 days',
  },
  {
    feature: 'Inflammatory Potential',
    pl: 'Very low (no cells, minimal cytokines)',
    prp: 'Higher due to leukocytes and platelet activation',
  },
  {
    feature: 'Consistency',
    pl: 'Highly consistent (controlled processing)',
    prp: 'Variable (depends on patient biology and centrifuge method)',
  },
  {
    feature: 'Safety for Spine / Epidural Use',
    pl: 'Excellent — acellular and low-inflammatory',
    prp: 'Limited — cellular content increases risk of irritation',
  },
  {
    feature: 'Pain on Injection',
    pl: 'Minimal',
    prp: 'Often higher due to inflammatory mediators',
  },
  {
    feature: 'Ideal Applications',
    pl: 'Spine, nerves, joints, chronic wounds',
    prp: 'Joints, tendons, soft-tissue injuries',
  },
  {
    feature: 'Regulatory Alignment',
    pl: 'Easier to standardize and validate',
    prp: 'More variability; harder to standardize',
  },
  {
    feature: 'Clinical Goal',
    pl: 'Anti-inflammatory, regenerative signaling',
    prp: 'Regenerative signaling with inflammatory component',
  },
]

export default function Compare() {
  return (
    <section className="compare" id="compare">
      <div className="container">
        <span className="section-eyebrow">Platelet Lysate vs PRP</span>
        <h2 className="section-title">
          A clearer therapeutic profile than platelet-rich plasma.
        </h2>
        <p className="section-lede">
          Below is a clinician-friendly comparison of next-generation platelet
          lysates against conventional PRP — highlighting the differences in
          cell content, growth factor release, and clinical application.
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Platelet Lysate (PL)</th>
                <th>Platelet-Rich Plasma (PRP)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td className="pl-col">{row.pl}</td>
                  <td>{row.prp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
