import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-container">
      <div className="pt-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          Kahon
          <span className="hidden lg:inline">
            <br />
            Binte Zaman
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-8"
        >
          Learning machine learning algorithms and AI ML
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3"
        >
          {[
            { label: "resume", href: "/Kahon (3).pdf" },
            { label: "github", href: "https://github.com/kaho0" },
            { label: "linkedin", href: "https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-4 py-2 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-all"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
