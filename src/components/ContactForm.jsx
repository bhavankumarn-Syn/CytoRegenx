import { useState, useRef, useEffect } from 'react'

const ROLE_OPTIONS = [
  { value: 'patient', label: 'Patient' },
  { value: 'clinician', label: 'Clinician' },
  { value: 'investor', label: 'Investor' },
  { value: 'partner', label: 'Strategic Partner' },
  { value: 'other', label: 'Other' },
]

function randInt() {
  return Math.floor(Math.random() * 8) + 2 // 2..9
}
function makeToken() {
  return btoa(Date.now() + ':' + Math.random().toString(36).slice(2))
}

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  organization: '',
  role: '',
  areaOfInterest: '',
  message: '',
  humanCheck: '',
  consent: false,
  website: '', // honeypot
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL)
  const [math, setMath] = useState(() => ({ a: randInt(), b: randInt() }))
  const [token, setToken] = useState(() => makeToken())
  const [ready, setReady] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null) // { msg, type }

  const loadTimeRef = useRef(Date.now())
  const formRef = useRef(null)
  const humanRef = useRef(null)
  const feedbackRef = useRef(null)

  // Enable the submit button only after JS mounts — mirrors the original's
  // "bots that don't run JS can't submit" guard. Also re-stamp the load time.
  useEffect(() => {
    loadTimeRef.current = Date.now()
    setReady(true)
  }, [])

  function update(name, value) {
    setFields((f) => ({ ...f, [name]: value }))
    setFeedback((fb) => (fb && fb.type === 'error' ? null : fb))
  }

  function showFeedback(msg, type) {
    setFeedback({ msg, type })
    if (type === 'success') {
      setTimeout(() => {
        feedbackRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 0)
    }
  }

  function rollMath() {
    setMath({ a: randInt(), b: randInt() })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setFeedback(null)

    // 1. Honeypot — if a hidden field was filled, treat as a bot.
    //    We silently pretend success so bots don't learn what tripped them.
    if (fields.website.trim() !== '') {
      showFeedback('Thank you — your message has been received.', 'success')
      setFields(INITIAL)
      return
    }

    // 2. Timing check — humans take more than ~3 seconds to fill a form.
    const elapsedMs = Date.now() - loadTimeRef.current
    if (elapsedMs < 3000) {
      showFeedback(
        'That was a bit fast — please review your message and try again.',
        'error',
      )
      return
    }

    // 3. Math challenge — bots rarely solve runtime-generated arithmetic.
    const humanAnswer = parseInt(fields.humanCheck.trim(), 10)
    if (isNaN(humanAnswer) || humanAnswer !== math.a + math.b) {
      showFeedback(
        'The verification answer doesn\u2019t look right. Please try again.',
        'error',
      )
      rollMath()
      setFields((f) => ({ ...f, humanCheck: '' }))
      humanRef.current?.focus()
      return
    }

    // 4. Token integrity — confirms the token was set by our JS.
    if (!token) {
      showFeedback(
        'A security check failed. Please refresh the page and try again.',
        'error',
      )
      return
    }

    // 5. Native HTML5 validation for required fields, email format, etc.
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity()
      return
    }

    // ---- All checks passed. Submit. ----
    setSubmitting(true)

    const data = {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      phone: fields.phone,
      organization: fields.organization,
      role: fields.role,
      areaOfInterest: fields.areaOfInterest,
      message: fields.message,
      humanCheck: fields.humanCheck,
      consent: fields.consent,
      formToken: token,
      loadedAt: loadTimeRef.current,
    }

    // -------------------------------------------------------------------
    // INTEGRATION POINT:
    //   Replace the simulated submission below with a real call to your
    //   backend. Examples:
    //
    //   // Formspree:
    //   fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   })
    //
    //   // Custom endpoint:
    //   fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   })
    // -------------------------------------------------------------------

    // Simulated submission for the static preview:
    setTimeout(() => {
      showFeedback(
        'Thank you, ' +
          (data.firstName || 'and welcome') +
          '. A member of the CytoRegenX team will follow up at ' +
          (data.email || 'the email provided') +
          ' shortly.',
        'success',
      )
      setFields(INITIAL)
      setSubmitting(false)
      rollMath()
      setToken(makeToken())
    }, 900)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Partner with CytoRegenX.</h2>
            <p className="section-lede">
              Whether you're a clinician seeking standardized regenerative
              biologics, an investor exploring precision medicine, a patient
              with a condition we treat, or a strategic partner — tell us how we
              can help.
            </p>

            <div className="contact-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <a href="tel:7144861085">714-486-1085</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:info@cytoregenx.com">info@cytoregenx.com</a>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">🏛️</div>
                <div>
                  <div className="contact-info-label">Facility</div>
                  <span>FDA-Registered Laboratory</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form
              ref={formRef}
              className="contact-form"
              autoComplete="on"
              noValidate
              onSubmit={handleSubmit}
            >
              {/* HONEYPOT: invisible to humans; bots typically fill all fields */}
              <div className="honeypot" aria-hidden="true">
                <label htmlFor="cx-website">Website (do not fill)</label>
                <input
                  type="text"
                  id="cx-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.website}
                  onChange={(e) => update('website', e.target.value)}
                />
              </div>

              <div className="form-row form-row-2">
                <div className="form-field">
                  <label htmlFor="cx-fname">
                    First name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="cx-fname"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    value={fields.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cx-lname">
                    Last name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="cx-lname"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    value={fields.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row form-row-2">
                <div className="form-field">
                  <label htmlFor="cx-email">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="cx-email"
                    name="email"
                    required
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cx-phone">Phone</label>
                  <input
                    type="tel"
                    id="cx-phone"
                    name="phone"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cx-org">
                    Organization / Practice{' '}
                    <span className="optional">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="cx-org"
                    name="organization"
                    autoComplete="organization"
                    value={fields.organization}
                    onChange={(e) => update('organization', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>
                    I am a... <span className="req">*</span>
                  </label>
                  <div
                    className="pill-group"
                    role="radiogroup"
                    aria-label="Role"
                  >
                    {ROLE_OPTIONS.map((opt, idx) => (
                      <label className="pill" key={opt.value}>
                        <input
                          type="radio"
                          name="role"
                          value={opt.value}
                          required={idx === 0}
                          checked={fields.role === opt.value}
                          onChange={() => update('role', opt.value)}
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cx-area">
                    Area of interest <span className="req">*</span>
                  </label>
                  <select
                    id="cx-area"
                    name="areaOfInterest"
                    required
                    value={fields.areaOfInterest}
                    onChange={(e) => update('areaOfInterest', e.target.value)}
                  >
                    <option value="">— Select an area —</option>
                    <optgroup label="Conditions">
                      <option value="spine">
                        Spine — DDD, facet, axial pain, annular tears
                      </option>
                      <option value="joint">
                        Joint — osteoarthritis, tendon, ligament, cartilage
                      </option>
                      <option value="wound">
                        Chronic wounds — diabetic, venous, pressure
                      </option>
                    </optgroup>
                    <optgroup label="Platforms">
                      <option value="platelet-lysate">
                        Platelet lysate platform
                      </option>
                      <option value="stem-cell">
                        Bone marrow stem cell platform
                      </option>
                      <option value="combination">
                        Combination biologic therapies
                      </option>
                    </optgroup>
                    <optgroup label="Business">
                      <option value="investment">
                        Investment / fundraising
                      </option>
                      <option value="partnership">
                        Partnership / licensing
                      </option>
                      <option value="press">Press / media inquiry</option>
                      <option value="other">Something else</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cx-message">
                    How can we help? <span className="req">*</span>
                  </label>
                  <textarea
                    id="cx-message"
                    name="message"
                    rows={5}
                    required
                    minLength={20}
                    placeholder="Briefly describe your condition, question, or proposal. Please don't include sensitive medical details — a team member will follow up to take a full history."
                    value={fields.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                  <div className="form-hint">20 characters minimum.</div>
                </div>
              </div>

              {/* Human verification: math challenge generated at runtime */}
              <div className="form-row">
                <div className="form-field human-check">
                  <label htmlFor="cx-human">
                    Quick verification: {math.a} + {math.b}?{' '}
                    <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="cx-human"
                    name="humanCheck"
                    required
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="Type the answer"
                    ref={humanRef}
                    value={fields.humanCheck}
                    onChange={(e) => update('humanCheck', e.target.value)}
                  />
                  <div className="form-hint">
                    This helps us filter automated submissions.
                  </div>
                </div>
              </div>

              <div className="form-row">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    id="cx-consent"
                    name="consent"
                    required
                    checked={fields.consent}
                    onChange={(e) => update('consent', e.target.checked)}
                  />
                  <span>
                    I consent to CytoRegenX storing the information I've provided
                    in order to respond to my inquiry.{' '}
                    <span className="req">*</span>
                  </span>
                </label>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-dark form-submit"
                  disabled={!ready || submitting}
                >
                  <span className="btn-label">
                    {submitting ? 'Sending…' : 'Send Message'}
                  </span>
                  <span className="btn-arrow">→</span>
                </button>
                <p className="form-disclaimer">
                  By submitting, you agree to be contacted by a CytoRegenX team
                  member. This form is not a substitute for clinical
                  consultation; for medical emergencies, call 911.
                </p>
              </div>

              <div
                ref={feedbackRef}
                className={
                  feedback
                    ? 'form-feedback show ' + feedback.type
                    : 'form-feedback'
                }
                role="status"
                aria-live="polite"
              >
                {feedback?.msg}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
