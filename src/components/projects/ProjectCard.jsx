import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project: p, onOpenCase }) {
  return (
    <article className={`card${p.wide ? ' wide' : ''}${p.off ? ' off' : ''}`} data-reveal="">
      <ProjectThumb project={p} />
      <div className="tags">
        {p.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <h3>
        {p.name}
        <small>{p.sub}</small>
      </h3>
      <p>{p.desc}</p>
      <div className="roleline">
        My role: <b>{p.role}</b>
      </div>
      <button className="cs" type="button" data-id={p.id} onClick={(e) => onOpenCase(p.id, e.currentTarget)}>
        View Case Study <span aria-hidden="true">→</span>
      </button>
    </article>
  )
}
