import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orbital-ring w-[500px] h-[500px] absolute opacity-30" />
        <div className="orbital-ring-reverse w-[700px] h-[700px] absolute opacity-20" />
        <div className="orbital-ring w-[900px] h-[900px] absolute opacity-10" />
      </div>

      {/* Stars */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}

      {/* Rocket trajectory line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <motion.path
          d="M 100 700 Q 400 300 600 400 T 1100 100"
          fill="none"
          stroke="hsl(200 80% 55% / 0.15)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.circle
          r="3"
          fill="hsl(200 80% 55%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M 100 700 Q 400 300 600 400 T 1100 100"
          />
        </motion.circle>
      </svg>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Portfolio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-gradient">
            Mreenmay Kumar Sahu
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10">
            Aerospace Engineering Student — Designing the future of flight, one equation at a time.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-subtle glow-border text-sm text-foreground hover:border-accent/50 transition-all duration-500"
          >
            Explore
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
