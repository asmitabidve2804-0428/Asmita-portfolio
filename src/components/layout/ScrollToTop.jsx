import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Only resets scroll on real path changes — not when using in-page #hash links. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
