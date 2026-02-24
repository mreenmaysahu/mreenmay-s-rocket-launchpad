import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-mono text-xs tracking-[0.3em] uppercase mb-3">Reach Out</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-foreground">
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/mreenmay-kumar-sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full glass-subtle glow-border text-sm text-foreground hover:border-accent/50 transition-all duration-500"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="mailto:mreenmay10@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full glass-subtle glow-border text-sm text-foreground hover:border-accent/50 transition-all duration-500"
          >
            <Mail size={16} />
            mreenmay10@gmail.com
          </a>

          <a
            href="tel:+918208998784"
            className="flex items-center gap-2 px-5 py-3 rounded-full glass-subtle glow-border text-sm text-foreground hover:border-accent/50 transition-all duration-500"
          >
            <Phone size={16} />
            +91 8208998784
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm"
        >
          <MapPin size={14} />
          Kharagpur, West Bengal
        </motion.div>

        <p className="text-muted-foreground/40 text-xs mt-16">
          © {new Date().getFullYear()} Mreenmay Kumar Sahu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default ContactSection;
