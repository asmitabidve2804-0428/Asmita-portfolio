import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../constants/nav'

/** Highlights the nav link for the section currently in view. */
export function useSectionSpy() {
  const [activeHref, setActiveHref] = useState('')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const hrefs = NAV_LINKS.map((l) => l.href)
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const href = '#' + en.target.id
            if (hrefs.includes(href)) setActiveHref(href)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s))
    return () => spy.disconnect()
  }, [])

  return activeHref
}
