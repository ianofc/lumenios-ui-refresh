import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/layout/AuroraBackground";

const niveis = [
  {
    id: "creche",
    titulo: "Creche",
    subtitulo: "Diário de Bordo",
    desc: "Alimentação, sono, atividades e recados para os pais",
    icon: "fas fa-baby",
    path: "/creche",
    gradient: "from-[hsl(25,90%,60%)] to-[hsl(45,95%,55%)]",
    badge: "0–3 anos",
    glow: "hsla(25, 90%, 60%, 0.15)",
  },
  {
    id: "fundamental",
    titulo: "Fundamental",
    subtitulo: "Trindade Pedagógica",
    desc: "Gradebook, chamada, frequência e acompanhamento integral",
    icon: "fas fa-pencil-ruler",
    path: "/fundamental",
    gradient: "from-[hsl(160,70%,45%)] to-[hsl(190,80%,50%)]",
    badge: "6–14 anos",
    glow: "hsla(160, 70%, 45%, 0.15)",
  },
  {
    id: "medio",
    titulo: "Ensino Médio",
    subtitulo: "Preparação Vestibular",
    desc: "Notas, frequência, simulados e preparação para o futuro",
    icon: "fas fa-flask",
    path: "/medio",
    gradient: "from-primary to-secondary",
    badge: "15–17 anos",
    glow: "hsla(239, 84%, 67%, 0.15)",
  },
  {
    id: "graduacao",
    titulo: "Graduação",
    subtitulo: "Autonomia Acadêmica",
    desc: "Cursos, certificados, trilhas de conhecimento e gestão autônoma",
    icon: "fas fa-graduation-cap",
    path: "/graduacao",
    gradient: "from-secondary to-accent",
    badge: "18+ anos",
    glow: "hsla(270, 67%, 60%, 0.15)",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Index = () => (
  <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden selection:bg-primary/20 selection:text-primary">
    <AuroraBackground variant="default" />

    <div className="relative z-10 w-full max-w-6xl px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-neon text-primary-foreground">
            <i className="text-2xl fas fa-atom" />
          </div>
        </motion.div>
        <h1 className="mb-4 text-6xl md:text-7xl font-black tracking-tight font-display text-foreground">
          Hemera <span className="text-gradient-aurora">OS</span>
        </h1>
        <p className="text-lg font-medium text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Terminal de Inteligência Pedagógica — selecione seu ambiente de aprendizado
        </p>
      </motion.div>

      {/* Level Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {niveis.map((nivel) => (
          <motion.div key={nivel.id} variants={item}>
            <Link
              to={nivel.path}
              className="group relative flex flex-col h-full p-6 overflow-hidden glass-card-strong rounded-3xl aurora-glow hover:shadow-elevated transition-all duration-500 hover:-translate-y-3"
              style={{ "--glow-color": nivel.glow } as React.CSSProperties}
            >
              {/* Gradient accent top */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${nivel.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: nivel.glow }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 4 }}
                className={`flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${nivel.gradient} text-white shadow-lg`}
              >
                <i className={`${nivel.icon} text-xl`} />
              </motion.div>

              {/* Badge */}
              <span className="inline-block self-start px-3 py-1 mb-3 text-[10px] font-bold tracking-wider uppercase rounded-lg bg-muted/60 text-muted-foreground">
                {nivel.badge}
              </span>

              {/* Text */}
              <h2 className="mb-1 text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300">
                {nivel.titulo}
              </h2>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
                {nivel.subtitulo}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {nivel.desc}
              </p>

              {/* Enter arrow */}
              <div className="flex items-center gap-2 mt-5 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-[-8px] group-hover:translate-x-0">
                Entrar <motion.i className="fas fa-arrow-right text-xs" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 text-center text-xs text-muted-foreground/50 font-medium"
      >
        <i className="fas fa-shield-alt mr-1.5" /> Powered by Hemera OS · Lumenios
      </motion.p>
    </div>
  </div>
);

export default Index;
