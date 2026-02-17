import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import SectionHeader from "./SectionHeader";

const links = [
  { icon: Mail, label: "kahonbintezaman@gmail.com", href: "mailto:kahonbintezaman@gmail.com" },
  { icon: Phone, label: "+8801609451247", href: "tel:+8801609451247" },
  { icon: Github, label: "github.com/kaho0", href: "https://github.com/kaho0" },
  { icon: Linkedin, label: "linkedin.com/in/kahon-binte-zaman-9414432b4", href: "https://www.linkedin.com/in/kahon-binte-zaman-9414432b4/" },
  { icon: Twitter, label: "x.com/Kahoo_z", href: "https://x.com/Kahoo_z" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 pb-32 section-container">
      <SectionHeader number="05" title="contact" />
      <div className="section-divider pt-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-8 max-w-md leading-relaxed"
        >
          Open to collaboration, consulting, and interesting engineering problems. Reach out directly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <link.icon size={16} className="group-hover:text-foreground transition-colors" />
              <span className="font-mono text-sm">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
