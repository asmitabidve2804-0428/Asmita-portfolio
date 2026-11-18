import { TICKER_ITEMS } from '../../constants/nav'

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div>
        {[...TICKER_ITEMS, ...TICKER_ITEMS].flatMap((item, i) => [
          <span key={`t-${i}`}>{item}</span>,
          <i key={`d-${i}`}>●</i>,
        ])}
      </div>
    </div>
  )
}
