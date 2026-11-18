import Ticker from '../components/home/Ticker'
import ArrowIcon from '../components/ui/ArrowIcon'
import { TOC_LINKS } from '../constants/nav'
import { HERO, SITE } from '../data'
import { useHashScroll } from '../hooks/useHashScroll'
import { useReveal } from '../hooks/useReveal'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import MoreWork from './MoreWork'
import Process from './Process'
import Projects from './Projects'
import Tools from './Tools'

/** Single-page portfolio: hero + all sections (each section lives in its own file). */
export default function Home() {
  useReveal()
  useHashScroll()

  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <div className="meta">
            <span>Portfolio / 2026</span>
            <span className="avail">
              <i aria-hidden="true" />
              Available for new projects
            </span>
          </div>
          <p className="role">{HERO.role}</p>
          <h1 className="name" aria-label={SITE.name}>
            <span>Asmita</span>
            <span className="l2">
              <span>Bidve</span>
              <span className="portrait-c" role="img" aria-label="Portrait placeholder">
                PHOTO
              </span>
            </span>
          </h1>
          <div className="hero-row">
            <div>
              <p className="lead">{HERO.lead}</p>
              <div className="ctas">
                <a className="btn btn-p" href="#work">
                  View My Work <ArrowIcon />
                </a>
                <a className="btn btn-g" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
            <nav className="toc" aria-label="Contents">
              <div className="toc-t">Contents</div>
              <ol>
                {TOC_LINKS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>
                      <span>{item.n}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <Ticker />

      <About />
      <Projects />
      <Process />
      <Experience />
      <Tools />
      <MoreWork />
      <Contact />
    </>
  )
}
