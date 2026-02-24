import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Experience
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative pl-8 border-l border-border">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            <div className="glass rounded-xl p-6 glow-border-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0 hidden sm:flex">
                  <Briefcase size={24} />
                </div>
                <div>
                  <span className="text-accent font-mono text-xs tracking-wider">June — July 2025</span>
                  <h3 className="font-display font-semibold text-lg text-foreground mt-2">
                    Summer Training — Product Engineering
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    Gained hands-on experience in 3D modeling, 3D printing optimization, and production workflows. 
                    Worked on real-world engineering challenges, bridging the gap between design intent and manufacturing precision.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
