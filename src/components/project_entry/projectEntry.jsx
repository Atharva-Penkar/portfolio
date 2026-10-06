import SpecTable from "../spec_table/specTable.jsx";
import ReplFigure from "../../figures/replFigure.jsx";
import PipelineFigure from "../../figures/pipelineFigure.jsx";
import styles from "./projectEntry.module.css";

const figures = {
  repl: ReplFigure,
  pipeline: PipelineFigure,
};

export default function ProjectEntry({ project }) {
  const Figure = figures[project.figure];
  const specs = <SpecTable rows={project.specs} />;

  return (
    <article id={project.id} className={styles.entry}>
      <div className={styles.text}>
        <div className={`${styles.label} mono`}>
          {project.number} / {project.area}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        {Figure && specs}
        {project.links.length > 0 && (
          <div className={`${styles.links} mono`}>
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.visual}>
        {Figure ? (
          <figure className={styles.figure}>
            <Figure />
            <figcaption className={`${styles.caption} mono`}>
              {project.caption}
            </figcaption>
          </figure>
        ) : (
          specs
        )}
      </div>
    </article>
  );
}
