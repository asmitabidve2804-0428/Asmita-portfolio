export default function SectionHead({ number, title, accent, note }) {
  return (
    <div className="sec-head" data-reveal="">
      <h2 className="sec-title">
        <span className="n">{number}</span>
        {title} <em>{accent}</em>
      </h2>
      <p className="sec-note">{note}</p>
    </div>
  )
}
