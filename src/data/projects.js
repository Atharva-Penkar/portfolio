export const projects = [
  {
    id: "mini-redis",
    number: "3.1",
    area: "Distributed systems",
    title: "Mini-Redis",
    summary:
      "A Redis-compatible in-memory key-value store, written from the TCP socket upward.",
    specs: [
      ["Protocol", "Custom RESP parser and serialiser"],
      ["Types", "Strings, Lists and Hashes across 15+ commands"],
      ["Storage", "Hash table with incremental rehashing, WAL durability"],
      ["I/O", "Multi-client server on an epoll event loop"],
    ],
    figure: "repl",
    caption: "Fig. 1. A session against the server.",
    links: [
      { label: "GitHub", href: "https://github.com/Atharva-Penkar/mini-redis" },
    ],
  },
  {
    id: "risc-v",
    number: "3.2",
    area: "Computer architecture",
    title: "RISC-V Assembler and CPU Simulator",
    summary: "A five-stage pipelined CPU and the assembler that feeds it.",
    specs: [
      ["Pipeline", "IF, ID, EX, MEM, WB"],
      ["ISA", "30+ unique instructions"],
      ["Assembler", "Memory access, jumps, label-based branching"],
      ["Hazards", "Detection and stalling, measured across workloads"],
    ],
    figure: "pipeline",
    caption:
      "Fig. 2. Load-use hazard. The add needs x5 before the load has read it, so the pipeline holds for one cycle.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Atharva-Penkar/RISC-V-CPU-Simulator",
      },
    ],
  },
  {
    id: "cache-coherence",
    number: "3.3",
    area: "Research, with Dr. Debiprasanna Sahoo",
    title: "Multi-Cache Coherence Protocol",
    summary:
      "A model of how several caches agree on one copy of the truth, checked scenario by scenario.",
    specs: [
      ["Model", "MESI state machines per cache"],
      ["Modules", "CPU automata and cache controllers over shared memory"],
      ["Coverage", "20+ protocol scenarios, including edge cases"],
    ],
    figure: null,
    caption: null,
    links: [],
  },
  {
    id: "chat",
    number: "3.4",
    area: "Computer networks",
    title: "Terminal Chat Application",
    summary:
      "A concurrent chat server and an Ncurses client, built on raw sockets and POSIX threads.",
    specs: [
      ["Server", "50 concurrent users over POSIX threads"],
      [
        "Client",
        "Ncurses interface with real-time display and message navigation",
      ],
      ["Commands", "Group broadcast, private messaging, timed muting"],
    ],
    figure: null,
    caption: null,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/asingh772004/Computer-Networks-Chat-Application",
      },
    ],
  },
];
