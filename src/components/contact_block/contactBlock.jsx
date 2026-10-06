import { profile } from "../../data/profile.js";
import styles from "./contactBlock.module.css";

export default function ContactBlock() {
  return (
    <div>
      <a className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className={`${styles.links} mono`}>
        {profile.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
