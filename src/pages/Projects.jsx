import { useCallback, useRef, useState } from 'react'
import CaseStudyDialog from '../components/projects/CaseStudyDialog'
import ProjectCard from '../components/projects/ProjectCard'
import SectionHead from '../components/ui/SectionHead'
import { PROJECTS } from '../data'

export default function Projects() {
  const [caseStudyId, setCaseStudyId] = useState(null)
  const lastBtnRef = useRef(null)

  const caseStudy = PROJECTS.find((p) => p.id === caseStudyId) || null

  const openCase = (id, btn) => {
    lastBtnRef.current = btn || document.activeElement
    setCaseStudyId(id)
  }

  const closeCase = useCallback(() => setCaseStudyId(null), [])

  return (
    <>
      <section className="band projects" id="work">
        <div className="wrap">
          <SectionHead
            number="2."
            title="Selected"
            accent="Projects"
            note="Selected work across healthcare, mobile app design, and website design. Open a project for an overview."
          />
          <div className="pgrid" id="pgrid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} onOpenCase={openCase} />
            ))}
          </div>
        </div>
      </section>
      <CaseStudyDialog project={caseStudy} onClose={closeCase} lastBtnRef={lastBtnRef} />
    </>
  )
}
