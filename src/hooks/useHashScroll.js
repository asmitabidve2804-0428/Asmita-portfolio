import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #hash targets on load and when the hash changes. */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return

    if (!hash) return

    const id = hash.replace(/^#/, '')
    const el = document.getElementById(id)
    if (!el) return

    // Wait a frame so layout/fonts are ready
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash, pathname])
}
