import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Building", href: "#building" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-card/80 backdrop-blur-xl border border-border rounded-full px-4 py-2.5 flex items-center gap-1">
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-1 font-mono text-sm text-foreground hover:text-link-hover transition-colors"
        >
          <Home size={14} />
          <span className="font-medium">Aarav Gupta</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5 ml-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-2 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-3 flex flex-col gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
