import { profile } from "../../data/profile.js";
import SpecTable from "../spec_table/specTable.jsx";
import styles from "./titleBlock.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <div className={`${styles.role} mono`}>{profile.role}</div>
        <h1 className={styles.name}>
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary} mono`}
            href="#projects"
          >
            Read the projects
          </a>
          <a
            className={`${styles.button} mono`}
            href={`${import.meta.env.BASE_URL}resume.pdf`}
          >
            Resume (PDF)
          </a>
        </div>
      </div>
      <div className={styles.aside}>
        <SpecTable
          caption="Table 1. Key characteristics"
          rows={profile.keyFacts}
        />
      </div>
    </section>
  );
}
