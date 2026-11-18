export default function ProjectThumb({ project: p }) {
  if (p.image) {
    return (
      <div className="thumb" style={{ '--tint': p.tint }}>
        <span className="big" aria-hidden="true">
          {p.name}
        </span>
        <img src={p.image} alt={`${p.sub} preview`} />
      </div>
    )
  }

  return (
    <div className="thumb" style={{ '--tint': p.tint }}>
      <span className="big" aria-hidden="true">
        {p.name}
      </span>
      <div className="device" aria-hidden="true">
        <div className="sk" />
        <span className="lbl">Screenshot placeholder</span>
      </div>
      {p.device.includes('phone') ? <div className="phone" aria-hidden="true" /> : null}
    </div>
  )
}
