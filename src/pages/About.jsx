import SectionHead from '../components/ui/SectionHead'
import { ABOUT, EDUCATION, LANGUAGES, SITE } from '../data'

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <SectionHead number="1." title="About" accent="Me" note={ABOUT.note} />
        <div className="about">
          <div data-reveal="">
            <figure className="frame">
              <div className="img">
                <span>
                  Portrait placeholder
                  <br />
                  Add your photo or illustration
                </span>
              </div>
              <div className="badge" aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                  </defs>
                  <text>
                    <textPath href="#circ">UI/UX Designer · Open to work · </textPath>
                  </text>
                </svg>
                <b>✦</b>
              </div>
            </figure>
          </div>
          <div data-reveal="">
            <h3>
              Hello, I&apos;m <em>{SITE.name}</em>
            </h3>
            {ABOUT.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="cols">
              {ABOUT.columns.map((col) => (
                <div key={col.title}>
                  <h4>{col.title}</h4>
                  <p>{col.body}</p>
                </div>
              ))}
            </div>
            <div className="chips" aria-label="Strengths">
              {ABOUT.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="about-meta">
              <div>
                <h4>Education &amp; Certifications</h4>
                <ul className="meta-list">
                  {EDUCATION.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.meta}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Languages</h4>
                <div className="chips" aria-label="Languages">
                  {LANGUAGES.map((lang) => (
                    <span className="chip" key={lang}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
