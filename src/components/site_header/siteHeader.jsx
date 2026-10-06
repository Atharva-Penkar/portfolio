import { sections } from "../../data/profile.js";
import { goToSection, goToTop } from "../../utils/scrollTo.js";
import styles from "./siteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={`${styles.header} mono`}>
      <div className={styles.meta}>
        <a
          className={styles.docId}
          href={import.meta.env.BASE_URL}
          onClick={goToTop}
        >
          Atharva Penkar
        </a>
        <span>Rev. 1.0</span>
      </div>
      <nav className={styles.nav} aria-label="Sections">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(event) => goToSection(event, s.id)}
          >
            {s.number} {s.title}
          </a>
        ))}
      </nav>
    </header>
  );
}