import { useState } from 'react'
import SectionHead from '../components/ui/SectionHead'
import { WORK } from '../data'

const FILTER_CATS = ['All', ...new Set(WORK.map((w) => w[1]))]

export default function MoreWork() {
  const [filter, setFilter] = useState('All')

  return (
    <section className="band band-light gallery" id="more">
      <div className="wrap">
        <SectionHead
          number="6."
          title="Additional"
          accent="Design Work"
          note="Social media creatives, brochures, flyers, presentations and other visual pieces."
        />
        <div className="filters" id="filters" role="group" aria-label="Filter design work">
          {FILTER_CATS.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} data-c={c} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="wall" id="wall">
          {WORK.map((w, i) => (
            <figure
              key={`${w[0]}-${w[1]}-${i}`}
              className="tile"
              data-c={w[1]}
              hidden={!(filter === 'All' || w[1] === filter)}
              style={{ '--ar': w[2], '--r': w[3] }}
            >
              <div className="art">
                Artwork placeholder
                <br />
                Add your {w[0].toLowerCase()}
              </div>
              <figcaption>
                {w[0]}
                <span>{w[1]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
