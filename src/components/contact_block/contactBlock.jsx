import { profile } from "../../data/profile.js";
import Icon from "../icons/icons.jsx";
import styles from "./contactBlock.module.css";

export default function ContactBlock() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
    ...profile.links,
  ];

  return (
    <div className={styles.block}>
      <p className={styles.availability}>{profile.availability}</p>
      <a className={`${styles.email} mono`} href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className={styles.links}>
        {links.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              <Icon name={link.icon} size={26} />
            </a>
          );
        })}
      </div>
    </div>
  );
}