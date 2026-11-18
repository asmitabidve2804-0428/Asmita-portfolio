import { useState } from 'react'
import ArrowIcon from '../components/ui/ArrowIcon'
import { SITE } from '../data'

export default function Contact() {
  const [copyLabel, setCopyLabel] = useState('Copy address')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setCopyLabel('Copied')
    } catch {
      const el = document.getElementById('emailTxt')
      if (el) {
        const r = document.createRange()
        r.selectNodeContents(el)
        const s = getSelection()
        s.removeAllRanges()
        s.addRange(r)
      }
      setCopyLabel('Press Ctrl/Cmd + C')
    }
    setTimeout(() => setCopyLabel('Copy address'), 2200)
  }

  return (
    <section className="band contact" id="contact" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <p className="eyebrow" data-reveal="">
          7. Contact Me
        </p>
        <h2 className="say" data-reveal="">
          Interested in working <em>together</em>?
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M20 2 23.5 16.5 38 20 23.5 23.5 20 38 16.5 23.5 2 20 16.5 16.5Z" />
          </svg>
        </h2>
        <div className="ctas" data-reveal="">
          <a className="btn btn-p" id="ctaMail" href={`mailto:${SITE.email}`}>
            Let&apos;s Work Together <ArrowIcon />
          </a>
        </div>
        <div className="links links-wide" data-reveal="">
          <div>
            <small>Email</small>
            <strong id="emailTxt">{SITE.email}</strong>
            <button className="copy" id="copyBtn" type="button" onClick={copyEmail}>
              {copyLabel}
            </button>
          </div>
          <a href={SITE.phoneHref}>
            <small>Phone</small>
            <strong>{SITE.phone}</strong>
          </a>
          <div>
            <small>Location</small>
            <strong>{SITE.location}</strong>
          </div>
          <a id="liLink" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            <small>LinkedIn</small>
            <strong>View profile ↗</strong>
          </a>
          <a id="beLink" href={SITE.behance} target="_blank" rel="noopener noreferrer">
            <small>Behance</small>
            <strong>View portfolio ↗</strong>
          </a>
        </div>
        <div className="foot">
          <span>© 2026 {SITE.name}</span>
          <span>{SITE.title}</span>
          <span className="foot-links">
            <a href={SITE.behance} target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${SITE.email}`}>Email</a>
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </section>
  )
}
