import styles from "./section.module.css";

export default function Section({ number, title, id, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.heading}>
        <span className={`${styles.number} mono`}>{number}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
