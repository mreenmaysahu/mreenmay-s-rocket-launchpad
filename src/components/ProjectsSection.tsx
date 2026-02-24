import { motion } from "framer-motion";
import { Rocket, Plane } from "lucide-react";

const projects = [
  {
    title: "Sugar Rocket",
    year: "2025",
    icon: <Rocket size={22} />,
    description:
      "Designed and tested a solid-propellant rocket using a potassium nitrate and sugar fuel mixture. Focused on propulsion chemistry, nozzle geometry, and rocket dynamics.",
  },
  {
    title: "RC Plane Workshop — I",
    year: "August 2023",
    icon: <Plane size={22} />,
    description:
      "Built a functional RC aircraft prototype with emphasis on aerodynamic stability and flight performance. Iterated through multiple designs to optimize lift-to-drag ratio.",
  },
  {
    title: "RC Plane Workshop — II",
    year: "2025",
    icon: <Plane size={22} />,
    description:
      "Advanced study of radio signal systems, flight mechanics, and control surfaces including ailerons and rudders. Focused on precise maneuvering and real-time telemetry.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 glow-border glow-border-hover flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  {project.icon}
                </div>
                <span className="text-accent font-mono text-xs tracking-wider">{project.year}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
