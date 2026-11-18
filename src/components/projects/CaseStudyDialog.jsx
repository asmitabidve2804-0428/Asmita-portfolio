import { useEffect, useRef } from 'react'

export default function CaseStudyDialog({ project, onClose, lastBtnRef }) {
  const dlgRef = useRef(null)

  useEffect(() => {
    const dlg = dlgRef.current
    if (!dlg) return

    if (project) {
      if (!dlg.open) dlg.showModal()
    } else if (dlg.open) {
      dlg.close()
    }
  }, [project])

  useEffect(() => {
    const dlg = dlgRef.current
    if (!dlg) return undefined

    const handleClose = () => {
      onClose()
      lastBtnRef?.current?.focus?.()
    }

    dlg.addEventListener('close', handleClose)
    return () => dlg.removeEventListener('close', handleClose)
  }, [onClose, lastBtnRef])

  return (
    <dialog
      id="dlg"
      ref={dlgRef}
      aria-labelledby="dlgTitle"
      onClick={(e) => {
        if (e.target === dlgRef.current || e.target.closest('[data-close]')) {
          dlgRef.current?.close()
        }
      }}
    >
      {project ? (
        <div className="dlg">
          <div className="dlg-top">
            <h3 id="dlgTitle">
              {project.name}
              <em>{project.sub}</em>
            </h3>
            <button className="x" type="button" aria-label="Close case study" data-close="">
              ×
            </button>
          </div>
          <div className="tags">
            {project.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
            <span className="tag">Role: {project.role}</span>
          </div>
          <div className="split">
            <div className="shot">
              {project.image ? (
                <img src={project.image} alt={`${project.name} preview`} />
              ) : (
                <>
                  Screenshot placeholder
                  <br />
                  Add the main project image
                </>
              )}
            </div>
            <div>
              <div className="lab">Overview</div>
              <p style={{ marginTop: 8 }}>{project.desc}</p>
              <h4>Role</h4>
              <p>{project.role}</p>
              <div className="tags" style={{ marginTop: 20 }}>
                {project.tags.map((t) => (
                  <span className="tag" key={`scope-${t}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
