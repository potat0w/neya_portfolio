import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { value: "50k+", label: "Downloads across Python and C projects." },
  { value: "100k+", label: "Visitors across live deployments." },
  { value: "10+", label: "Listed repos for minimalist design." },
];

const achievements = [
  { badge: "Top 80", title: "GambitoR 4.0 at IIT Roorkee out of 100k+ participants." },
  { badge: "Shastra 2026", title: "Qualified both rounds at IIT Madras. DSA, coding, maths, and reasoning against school and college students." },
  { badge: "3rd Global", title: "Won Lumi Hackathon. Placed 3rd globally and received $200 in cash prizes." },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-24 section-container">
      <SectionHeader number="02" title="highlights" />
      <div className="section-divider pt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-3"
            >
              <span className="font-mono text-xs bg-tag text-tag-foreground px-3 py-1 rounded-full whitespace-nowrap self-start">
                {item.badge}
              </span>
              <p className="text-sm text-muted-foreground">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
