import TitleBlock from "../components/title_block/titleBlock.jsx";
import Section from "../components/section/section.jsx";
import StatGrid from "../components/stat_grid/statGrid.jsx";
import ExperienceList from "../components/experience_list/experienceList.jsx";
import SpecTable from "../components/spec_table/specTable.jsx";
import ContactBlock from "../components/contact_block/contactBlock.jsx";
import { overview, stats } from "../data/profile.js";
import { experience } from "../data/experience.js";
import { skills } from "../data/skills.js";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main>
      <TitleBlock />

      <Section number="1.0" title="Overview" id="overview">
        <div className={styles.overview}>
          <p className={styles.lead}>{overview}</p>
          <div className={styles.stats}>
            <StatGrid stats={stats} />
          </div>
        </div>
      </Section>

      <Section number="2.0" title="Experience" id="experience">
        <ExperienceList items={experience} />
      </Section>

      <Section number="3.0" title="Projects" id="projects">
        <p>Projects go here.</p>
      </Section>

      <Section number="4.0" title="Skills" id="skills">
        <SpecTable caption="Table 2. Toolchain" rows={skills} />
      </Section>

      <Section number="5.0" title="Contact" id="contact">
        <ContactBlock />
      </Section>
    </main>
  );
}
