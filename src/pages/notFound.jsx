import { Link } from "react-router";
import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={`${styles.code} mono`}>Error 404</div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        This address doesn't match any page on the site.
      </p>
      <Link className={`${styles.home} mono`} to="/">
        Back to the home page
      </Link>
    </main>
  );
}