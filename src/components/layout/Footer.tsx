import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative z-10 py-8 mt-auto border-t border-border/30 glass-surface">
    <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-sm">
          <i className="text-[10px] fas fa-atom" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">
            © 2025 Hemera OS · <span className="text-gradient-aurora font-bold">Lumenios</span>
          </p>
          <p className="text-[10px] text-muted-foreground/70">Terminal de Inteligência Pedagógica</p>
        </div>
      </motion.div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-[11px] font-medium text-muted-foreground hover:text-primary transition">Ajuda</a>
        <a href="#" className="text-[11px] font-medium text-muted-foreground hover:text-primary transition">Privacidade</a>
        <div className="flex gap-2.5 pl-4 border-l border-border/50">
          {[
            { icon: "fab fa-instagram", color: "hover:text-accent" },
            { icon: "fab fa-twitter", color: "hover:text-primary" },
            { icon: "fab fa-linkedin", color: "hover:text-primary" },
          ].map((s) => (
            <motion.a
              key={s.icon}
              href="#"
              whileHover={{ scale: 1.15, y: -2 }}
              className={`text-muted-foreground/60 ${s.color} transition`}
            >
              <i className={`text-sm ${s.icon}`} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
