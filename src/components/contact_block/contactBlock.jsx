import { profile } from "../../data/profile.js";
import Icon from "../icons/icons.jsx";
import styles from "./contactBlock.module.css";

export default function ContactBlock() {
  return (
    <div className={styles.block}>
      <a className={styles.email} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className={`${styles.links} mono`}>
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <Icon name={link.icon} size={26} />
          </a>
        ))}
      </div>
    </div>
  );
}
