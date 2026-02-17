import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stack = [
  { category: "Languages", items: ["TypeScript", "Python", "Go", "Lua", "C", "C#"] },
  { category: "Frontend", items: ["React", "Astro", "Vite", "HTML/CSS"] },
  { category: "Backend and Tools", items: ["FastAPI", "Solar2D", "CMake", "Git"] },
  { category: "Infrastructure", items: ["Linux", "Docker", "GitHub Actions", "Vercel"] },
];

const StackSection = () => {
  return (
    <section id="stack" className="py-24 section-container">
      <SectionHeader number="04" title="stack" />
      <div className="section-divider pt-8 space-y-6">
        {stack.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-sm text-muted-foreground mb-3 font-mono">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-sm bg-card border border-border text-foreground px-4 py-2 rounded-lg hover:border-muted-foreground/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
