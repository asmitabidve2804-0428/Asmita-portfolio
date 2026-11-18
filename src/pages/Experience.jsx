import SectionHead from '../components/ui/SectionHead'
import { EXPERIENCE, FOCUS_AREAS } from '../data'

export default function Experience() {
  return (
    <section className="band" id="experience">
      <div className="wrap">
        <SectionHead
          number="4."
          title="My"
          accent="Experience"
          note="Two roles across healthcare platform design, digital products, and visual communication."
        />
        <div data-reveal="">
          <div className="exp">
            {EXPERIENCE.map((job) => (
              <div key={job.company}>
                <div className="dates">
                  {job.current ? (
                    <>
                      {job.dates.replace(/\s[–-]\sPresent$/, '')} – <span className="now">Present</span>
                    </>
                  ) : (
                    job.dates
                  )}
                </div>
                <h3>{job.company}</h3>
                <p className="exp-role">{job.role}</p>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="focus">
            {FOCUS_AREAS.map((area, i) => (
              <div key={area}>
                <small>0{i + 1}</small>
                <h3>{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
