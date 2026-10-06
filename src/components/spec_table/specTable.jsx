import styles from "./specTable.module.css";

export default function SpecTable({ caption, rows }) {
  return (
    <div>
      {caption && <div className={`${styles.caption} mono`}>{caption}</div>}
      <dl className={styles.table}>
        {rows.map(([label, value]) => (
          <div key={label} className={styles.row}>
            <dt className="mono">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
