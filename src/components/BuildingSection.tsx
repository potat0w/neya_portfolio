import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "HyPrism",
    description: "Multiplatform Hytale launcher with integrated mod management. Written in Go.",
  },
  {
    name: "FR2: Reborn",
    description: "Complete multiplayer racing game remake. Built with Solar2D and Lua.",
  },
  {
    name: "Needlelight",
    description: "Refined Lumafly assistant with cross platform tooling. Built with C# and Python.",
  },
];

const BuildingSection = () => {
  return (
    <section id="building" className="py-24 section-container">
      <SectionHeader number="05" title="currently building" />
      <div className="section-divider pt-8 space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 hover:border-muted-foreground/30 transition-colors"
          >
            <h3 className="font-semibold mb-1">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BuildingSection;
