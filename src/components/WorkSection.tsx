import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

interface Project {
  title: string;
  description: string;
  tags: string[];
  source?: string;
  live?: string;
  stars?: number;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "HyPrism",
    description: "Multiplatform Hytale launcher written in Go. Handles mod lifecycle management, version switching, and automated updates across Windows, macOS, and Linux.",
    tags: ["go"],
    source: "https://github.com/Aarav2709/Hyprism",
    live: "https://yyyumeniku.github.io/hyprism-site/",
    stars: 470,
    featured: true,
  },
  {
    title: "Needlelight",
    description: "Rewrite of the Lumafly mod assistant. Faster startup, reduced memory footprint, and native cross platform tooling built with C# and Python.",
    tags: ["c#", "python"],
    source: "https://github.com/Aarav2709/Needlelight",
    stars: 55,
    featured: true,
  },
  {
    title: "CyberQuestJR",
    description: "Cybersecurity education platform with interactive games and quizzes. React frontend, FastAPI backend. Placed 4th globally at Student HackPad.",
    tags: ["react", "fastapi", "typescript"],
    source: "https://github.com/Aarav2709/CyberQuestJR",
    live: "https://cyberquestjr.vercel.app/",
    stars: 4,
  },
  {
    title: "Fun Run 2: Reborn",
    description: "Ground up remake of the multiplayer racing game in Solar2D. Custom physics, local multiplayer networking, character progression system, and power up engine.",
    tags: ["lua", "solar2d"],
    source: "https://github.com/Aarav2709/FR2-Reborn",
    stars: 8,
  },
  {
    title: "KubeTimr",
    description: "Keyboard first, offline first speedcube timer. WCA inspection mode, seeded scramble generation, statistical analysis, and training splits.",
    tags: ["typescript", "react", "vite"],
    source: "https://github.com/Aarav2709/KubeTimr",
    live: "https://kubetimr.vercel.app/",
    stars: 3,
  },
  {
    title: "Typeconomy",
    description: "Typing driven economy game. Real time WPM tracking, upgrade tree, and idle automation mechanics. React and Vite.",
    tags: ["react", "vite"],
    source: "https://github.com/Nathan5471/typeconomy",
    live: "https://typeconomy.vercel.app/",
    stars: 14,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className={`bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-colors ${
      project.featured ? "md:col-span-2" : ""
    }`}
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        {project.featured && (
          <span className="font-mono text-[10px] bg-tag text-tag-foreground px-2 py-0.5 rounded-full uppercase tracking-wider">
            Featured
          </span>
        )}
        {project.stars !== undefined && (
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={12} /> {project.stars}
          </span>
        )}
      </div>
    </div>

    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

    <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[11px] bg-tag text-tag-foreground px-2 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View source"
          >
            <Github size={16} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="View live"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const WorkSection = () => {
  return (
    <section id="work" className="py-24 section-container">
      <SectionHeader number="03" title="featured work" />
      <div className="section-divider pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
