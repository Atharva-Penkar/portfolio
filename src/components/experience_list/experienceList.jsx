import styles from "./experienceList.module.css";

export default function ExperienceList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <article key={item.company} className={styles.entry}>
          <div className={`${styles.period} mono`}>{item.period}</div>
          <div className={styles.body}>
            <h3 className={styles.heading}>
              {item.company} <span className={styles.role}>/ {item.role}</span>
            </h3>
            <ul className={styles.points}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
