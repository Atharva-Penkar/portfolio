import styles from "./figures.module.css";

const session = [
  ['SET user:1 "atharva"', "OK"],
  ["LPUSH queue job:42 job:43", "(integer) 2"],
  ["HSET session:9 lang cpp", "(integer) 1"],
  ["HGETALL session:9", '1) "mpp"', '2) "cmake"'],
];

export default function ReplFigure() {
  return (
    <div className={styles.repl}>
      {session.map(([command, ...output]) => (
        <div key={command}>
          <div>
            <span className={styles.prompt}>mini-redis:6379&gt;</span> {command}
          </div>
          {output.map((line) => (
            <div key={line} className={styles.output}>
              {line}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
