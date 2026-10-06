import { sections } from "../../data/profile.js";
import styles from "./siteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={`${styles.header} mono`}>
      <div className={styles.meta}>
        <span className={styles.docId}>Atharva Penkar</span>
        <span>Rev. 1.0</span>
      </div>
      <nav className={styles.nav} aria-label="Sections">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.number} {s.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
