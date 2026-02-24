import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Education & Background
          </h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-xl p-6 glow-border-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Bachelor of Technology — Aerospace Engineering
                </h3>
                <p className="text-accent text-sm mt-1">Lovely Professional University</p>
                <p className="text-muted-foreground text-sm mt-1">2023 — 2027 &nbsp;·&nbsp; CGPA: 7.18</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass rounded-xl p-6 glow-border-hover"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                <School size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Schooling
                </h3>
                <p className="text-accent text-sm mt-1">Kendriya Vidyalaya No-2, Kharagpur</p>
                <p className="text-muted-foreground text-sm mt-1">Completed secondary and senior secondary education</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
