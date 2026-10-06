import Hero from "../components/title_block/titleBlock.jsx";
import Section from "../components/section/section.jsx";
import { sections } from "../data/profile.js";

export default function Home() {
  return (
    <main>
      <Hero />
      {sections.map((s) => (
        <Section key={s.id} {...s}>
          <p>{s.title} content goes here.</p>
        </Section>
      ))}
    </main>
  );
}
