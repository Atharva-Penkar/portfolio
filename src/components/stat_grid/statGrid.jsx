import styles from "./statGrid.module.css";

export default function StatGrid({ stats }) {
  return (
    <dl className={styles.grid}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <dd className={styles.value}>{s.value}</dd>
          <dt className="mono">{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
