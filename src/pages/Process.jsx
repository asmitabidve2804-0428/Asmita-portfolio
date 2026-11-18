import SectionHead from '../components/ui/SectionHead'
import { STEPS } from '../data'

export default function Process() {
  return (
    <section className="band band-light process" id="process">
      <div className="wrap">
        <SectionHead
          number="3."
          title="My Design"
          accent="Process"
          note="Six steps from a rough question to a tested prototype."
        />
        <ol
          className="thread"
          style={{ listStyle: 'none', margin: 0, paddingInline: 0, paddingBottom: 0 }}
          id="thread"
        >
          {STEPS.map((s, i) => (
            <li className="step" data-reveal="" key={s[0]}>
              <span className="dot" aria-hidden="true" />
              <div className="no">0{i + 1}</div>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
