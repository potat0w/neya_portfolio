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
          Student Dude
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          aarav
          <br />
          gupta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-8"
        >
          I build developer tools, game engines, and open source infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3"
        >
          {[
            { label: "mail", href: "mailto:tribejustice35@gmail.com" },
            { label: "github", href: "https://github.com/Aarav2709" },
            { label: "linkedin", href: "https://linkedin.com/in/aarav2709" },
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
