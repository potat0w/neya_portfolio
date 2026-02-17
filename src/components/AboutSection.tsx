import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-container">
      <SectionHeader number="01" title="about" />
      <div className="section-divider pt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-muted-foreground leading-relaxed max-w-2xl"
        >
          <p>
            I write software that ships. My work spans developer tooling, game engine internals, and web infrastructure. I build in Go, TypeScript, Python, and Lua, and I contribute to open source projects that people actually use.
          </p>
          <p>
            When I solve a problem, I publish the solution. When existing tools fall short, I build better ones. That approach has led to 50k+ downloads, recognition across international hackathons, and a portfolio of tools used by developers worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
