import { useEffect } from 'react'

/** Matches original reveal: IntersectionObserver + 2.5s fallback. */
export function useReveal(deps = []) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('in'))
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

    const fallback = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('in'))
    }, 2500)

    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
