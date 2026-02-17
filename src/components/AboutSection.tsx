import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-container">
      <SectionHeader number="01" title="about" />
      <div className="section-divider pt-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-muted-foreground leading-relaxed max-w-2xl"
        >
          <div>
            <h3 className="text-foreground font-semibold mb-2">Hi, I'm Kahon.</h3>
            <p>
              I'm a full-stack developer passionate about building clean, user-focused applications. Currently, I'm learning AI and Machine Learning—exploring data processing, model development, and ways to integrate intelligent systems into real projects. I aim to grow my skills while solving real-world problems with scalable solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-foreground font-semibold mb-2">Education</h3>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Bachelor of Computer Science & Telecommunication Engineering</h4>
              <p className="text-sm">Noakhali Science And Technology University</p>
              <p className="text-sm">09/2023 - 05/2027</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
