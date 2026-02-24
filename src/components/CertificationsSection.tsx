import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "3D Printing Course & Ansys", year: "2025" },
  { title: "Hone Communication Skills", year: "2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Credentials</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 text-foreground">
            Certifications
          </h2>
        </motion.div>

        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-5 flex items-center gap-4 glow-border-hover"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <Award size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-medium text-foreground">{cert.title}</h3>
              </div>
              <span className="text-accent font-mono text-xs tracking-wider">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
