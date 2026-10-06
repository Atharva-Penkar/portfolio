import { animate } from "motion";
import { sections } from "../../data/profile.js";
import styles from "./siteHeader.module.css";

const HEADER_OFFSET = 80;

function scrollToSection(event, id) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();

  const destination =
    target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduceMotion) {
    window.scrollTo(0, destination);
  } else {
    animate(window.scrollY, destination, {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  }

  window.history.pushState(null, "", `#${id}`);
}

export default function SiteHeader() {
  return (
    <header className={`${styles.header} mono`}>
      <div className={styles.meta}>
        <span className={styles.docId}>Atharva Penkar</span>
        <span>Rev. 1.0</span>
      </div>
      <nav className={styles.nav} aria-label="Sections">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(event) => scrollToSection(event, s.id)}
          >
            {s.number} {s.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
