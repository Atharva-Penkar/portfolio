import styles from "./figures.module.css";

const CYCLES = 8;

// Each row lists what the instruction does in cycles 1 to 8.
const rows = [
  {
    instruction: "lw  x5, 0(x1)",
    cells: ["IF", "ID", "EX", "MEM", "WB", "", "", ""],
  },
  {
    instruction: "add x6, x5, x2",
    cells: ["", "IF", "ID", "stall", "EX", "MEM", "WB", ""],
  },
  {
    instruction: "sub x7, x6, x3",
    cells: ["", "", "IF", "stall", "ID", "EX", "MEM", "WB"],
  },
];

function cellClass(cell) {
  if (cell === "") return undefined;
  return cell === "stall" ? styles.stall : styles.stage;
}

export default function PipelineFigure() {
  return (
    <div className={styles.scroll}>
      <div className={styles.pipeline}>
        <div className={styles.cycle} style={{ textAlign: "left" }}>
          cycle
        </div>
        {Array.from({ length: CYCLES }, (_, i) => (
          <div key={i} className={styles.cycle}>
            {i + 1}
          </div>
        ))}
        {rows.map((row) => (
          <div key={row.instruction} style={{ display: "contents" }}>
            <div className={styles.instruction}>{row.instruction}</div>
            {row.cells.map((cell, i) => (
              <div key={i} className={cellClass(cell)}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
