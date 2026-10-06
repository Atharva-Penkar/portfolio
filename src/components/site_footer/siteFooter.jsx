import styles from "./siteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={`${styles.footer} mono`}>
      <span>Rev. 1.0 / Last revised Oct 2026</span>
      <span>Specifications subject to improvement without notice</span>
    </footer>
  );
}
