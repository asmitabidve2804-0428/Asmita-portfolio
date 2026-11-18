import SectionHead from '../components/ui/SectionHead'
import { SKILL_GROUPS, TOOL_GROUPS } from '../data'

export default function Tools() {
  return (
    <section
      className="band band-light"
      id="tools"
      style={{
        background: 'radial-gradient(ellipse 40% 60% at 50% 50%,rgba(163,36,58,.15),transparent 70%),var(--paper)',
      }}
    >
      <div className="wrap">
        <SectionHead
          number="5."
          title="Skills &"
          accent="Tools"
          note="Design craft, Figma systems, visual communication, and the software behind the work."
        />
        <div className="skill-board" data-reveal="">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="tool-board" data-reveal="">
          <h3 className="tool-board-title">Tools &amp; Software</h3>
          <div className="tool-groups">
            {TOOL_GROUPS.map((group) => (
              <div className="tool-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip tool-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
