import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader = ({ number, title }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-baseline gap-4 mb-8"
    >
      <span className="font-mono text-sm text-section-number">{number}</span>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    </motion.div>
  );
};

export default SectionHeader;
