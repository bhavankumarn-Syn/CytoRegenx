import HelixLogo from './HelixLogo.jsx'
import logo from '../images/cyto_logo_dark.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="logo" style={{ color: '#fff', marginBottom: '16px' }}>
            <img src={logo} style={{maxWidth : '240px'}} />
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9cb4bf' }}>
            Advancing regenerative medicine with precision-engineered biologics.
            Next-generation platelet lysates and bone marrow–derived stem cell
            therapies for spine, joint, and chronic wound care.
          </p>
        </div>
        <div>
          <h5>Platforms</h5>
          <ul>
            <li>
              <a href="#specialties">Platelet Lysates</a>
            </li>
            <li>
              <a href="#specialties">Bone Marrow Stem Cells</a>
            </li>
            <li>
              <a href="#specialties">Combination Biologics</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#lab">Our Lab</a>
            </li>
            <li>
              <a href="#clinical">Clinical Applications</a>
            </li>
            <li>
              <a href="#invest">Investors</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Connect</h5>
          <ul
            style={{
              listStyle: 'none',
              fontSize: '14px',
              lineHeight: 1.9,
              color: '#9cb4bf',
            }}
          >
            <li>
              <a href="tel:7144861085">📞 714-486-1085</a>
            </li>
            <li>
              <a href="mailto:info@cytoregenx.com">✉️ info@cytoregenx.com</a>
            </li>
            <li style={{ marginTop: '8px', color: '#9cb4bf' }}>
              FDA-Registered Laboratory
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-disclaimer">
        <strong style={{ color: '#f5d07a' }}>Important:</strong> CytoRegenX
        operates an FDA-registered laboratory. FDA-registered status indicates
        regulatory recognition of the manufacturing facility and does not
        constitute FDA approval of any specific therapeutic product. All
        biologic products are physician-prescribed and intended for use within
        the clinician–patient relationship.
      </div>

      <div className="footer-bottom">
        <span>© 2026 CytoRegenX. All rights reserved.</span>
        <span>FDA-registered · Precision-Engineered Biologics</span>
      </div>
    </footer>
  )
}
