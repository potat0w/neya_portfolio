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
    title: "OneEarth",
    description: "AI-powered platform for wildlife conservation with species data and a cruelty-free shopping assistant. Winner of AnimalHack 2025.",
    tags: ["ai", "conservation", "web"],
    source: "https://github.com/kaho0/OneEarth",
    live: "https://animal-rho-six.vercel.app/",
    featured: true,
  },
  {
    title: "VerdictAI",
    description: "AI-driven legal assistant offering real-time Q&A on Bangladesh law using a Gemini and FAISS backend.",
    tags: ["ai", "legal", "gemini"],
    source: "https://github.com/kaho0/VerdictAI",
    live: "https://verdict-ai-psi.vercel.app/",
    featured: true,
  },
  {
    title: "Meloo",
    description: "Music streaming platform with a clean interface and smart recommendations powered by Gemini API.",
    tags: ["music", "streaming", "gemini"],
    source: "https://github.com/kaho0/Meloo",
    live: "https://melobo.vercel.app/",
  },
  {
    title: "Attendly",
    description: "QR-Based Attendance Management System with React, TypeScript, Node.js, PostgreSQL, JWT authentication, QR check-ins, and role-based dashboards.",
    tags: ["attendance", "qr", "fullstack"],
    source: "https://github.com/potat0w/attendly",
    live: "https://dbms-project-mocha-eta.vercel.app/",
  },
  {
    title: "AquaFin",
    description: "E-commerce platform for aquatic products with authentication, cart, reviews, and real-time updates.",
    tags: ["ecommerce", "react", "nodejs"],
    source: "https://github.com/kaho0/AquaFin",
    live: "https://aqua-fin-34ev.vercel.app/",
  },
  {
    title: "My Vid",
    description: "A YouTube-inspired app with video search, categories, and smooth playback for an engaging viewing experience.",
    tags: ["video", "react", "streaming"],
    source: "https://github.com/kaho0/My-Vid",
    live: "https://you-vid-xi.vercel.app/",
  },
  {
    title: "Voyage Vista",
    description: "Travel booking platform that lets users explore destinations, view details, and book trips with ease.",
    tags: ["travel", "booking", "react"],
    source: "https://github.com/kaho0/Voyage-vista",
    live: "https://vista-omega.vercel.app/",
  },
  {
    title: "Gradiaaa",
    description: "Full-stack web app that enhances communication and resource sharing between students and teachers.",
    tags: ["education", "mern", "socket"],
    source: "https://github.com/kaho0/Gradiaaa",
    live: "https://gradiaaa.vercel.app/",
  },
  {
    title: "Skylaa",
    description: "Real-time chat application built with the MERN stack and Socket.IO for instant communication.",
    tags: ["chat", "mern", "socketio"],
    source: "https://github.com/kaho0/Skylaa",
    live: "https://skyla-7t80.onrender.com/",
  },
  {
    title: "Flow",
    description: "A modern web application with sleek UI and responsive design.",
    tags: ["ui", "react", "modern"],
    source: "https://github.com/kaho0/Aura",
    live: "https://aura-nu.vercel.app/",
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
      <SectionHeader number="02" title="featured work" />
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
