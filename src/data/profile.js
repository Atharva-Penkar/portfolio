export const profile = {
  firstName: "Atharva",
  lastName: "Penkar",
  role: "Systems and backend engineer",
  summary:
    "I work close to the machine: kernel drivers, storage engines, CPU pipelines and the protocols that keep caches consistent. Dual degree in Computer Science at IIT Bhubaneswar, former intern Microsoft.",
  email: "22cs02011@iitbbs.ac.in",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/Atharva-Penkar",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/atharva-penkar/",
      icon: "linkedin",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Atharva_Penkar/",
      icon: "leetcode",
    },
  ],
  keyFacts: [
    ["Institute", "IIT Bhubaneswar"],
    ["Programme", "B.Tech and M.Tech (Dual Degree), CSE"],
    ["CGPA", "8.25 / 10"],
    ["Last role", "Software Engineering Intern, Microsoft"],
    ["Languages", "C, C++, Python, Java"],
  ],
};

export const overview =
  "Most of what I build sits below the application layer. At Microsoft I validated the kernel implementation behind multi-disk crash-consistent snapshots. On my own time I have written a Redis-compatible store from the socket up, a pipelined RISC-V simulator, and a model of the MESI coherence protocol.";

export const stats = [
  { value: "79", label: "kernel driver unit tests" },
  { value: "30+", label: "RISC-V instructions simulated" },
  { value: "15+", label: "Redis commands implemented" },
  { value: "50", label: "concurrent chat clients" },
];

export const sections = [
  { number: "1.0", title: "Overview", id: "overview" },
  { number: "2.0", title: "Experience", id: "experience" },
  { number: "3.0", title: "Projects", id: "projects" },
  { number: "4.0", title: "Skills", id: "skills" },
  { number: "5.0", title: "Contact", id: "contact" },
];
