import { motion } from "framer-motion";

const languages = ["C++", "Python", "Matlab"];
const tools = ["AutoCAD", "Creo Parametric"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SkillTag = ({ name, index }: { name: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="px-5 py-2.5 rounded-full glass-subtle glow-border text-sm text-foreground font-medium tracking-wide hover:border-accent/50 transition-all duration-500 cursor-default"
  >
    {name}
  </motion.span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Technical Skills
          </h2>
        </motion.div>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((s, i) => (
                <SkillTag key={s} name={s} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Technologies & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((s, i) => (
                <SkillTag key={s} name={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
