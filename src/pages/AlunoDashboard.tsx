import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";

const disciplinasMock = [
  { id: 1, titulo: "Matemática Avançada", professor: "Prof. Silva", progresso: 68, imagem: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80" },
  { id: 2, titulo: "Física Quântica", professor: "Prof. Santos", progresso: 45, imagem: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80" },
  { id: 3, titulo: "Literatura Brasileira", professor: "Profa. Costa", progresso: 82, imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80" },
  { id: 4, titulo: "Biologia Molecular", professor: "Prof. Oliveira", progresso: 30, imagem: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=400&q=80" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const AlunoDashboard = () => {
  return (
    <AppLayout role="aluno" auroraVariant="default">
      <div className="max-w-[1600px] mx-auto px-6 space-y-10 pb-20">
        {/* Hero Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden shadow-elevated h-[340px] group bg-foreground"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105 opacity-50"
              alt="Ambiente de Estudos"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-aurora-hero" />
          <div className="absolute inset-0 bg-gradient-aurora-overlay" />

          <div className="absolute inset-0 flex items-center px-8 md:px-14 lg:px-16">
            <div className="relative z-10 max-w-3xl space-y-5">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border rounded-full bg-card/10 backdrop-blur-md border-card/20 text-primary-foreground/70"
              >
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                Ambiente Escolar Online
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-display drop-shadow-xl text-primary-foreground"
              >
                Olá, <span className="text-gradient-aurora">Estudante</span>.
                <br />
                <span className="text-3xl md:text-4xl opacity-80">Hora de evoluir 🚀</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-xl text-base font-medium leading-relaxed text-primary-foreground/70"
              >
                Você tem <strong className="text-primary-foreground">4 disciplinas</strong> ativas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Link
                  to="/disciplinas"
                  className="flex items-center gap-3 px-6 py-3.5 font-bold transition-all shadow-xl bg-card text-foreground rounded-2xl hover:-translate-y-1 hover:shadow-elevated group/btn"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground group-hover/btn:scale-110 transition-transform">
                    <i className="text-[10px] fas fa-play ml-0.5" />
                  </div>
                  Minhas Aulas
                </Link>
                <Link
                  to="/biblioteca"
                  className="flex items-center gap-3 px-6 py-3.5 font-bold transition-all border border-card/25 bg-card/10 backdrop-blur-md rounded-2xl hover:bg-card/20 hover:-translate-y-1 text-primary-foreground/80"
                >
                  <i className="fas fa-book-reader text-sm" /> Biblioteca
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Highlight + Recent */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 relative rounded-[2rem] bg-gradient-highlight p-10 text-primary-foreground overflow-hidden shadow-elevated flex flex-col justify-center min-h-[280px] group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-card/10 blur-3xl group-hover:bg-card/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-56 h-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wide uppercase border rounded-lg bg-card/15 backdrop-blur-md border-card/15">
                <i className="mr-1 fas fa-star text-warning" /> Destaque
              </span>
              <h3 className="mb-3 text-3xl font-bold font-display">Feira de Ciências 2025</h3>
              <p className="mb-6 text-base leading-relaxed opacity-80">
                Prepare seu projeto! Confira o edital oficial, monte sua equipe e inove.
              </p>
              <motion.a
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.gov.br/mec/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold bg-card text-secondary rounded-xl shadow-lg transition-all"
              >
                Ver Edital <i className="fas fa-external-link-alt text-xs opacity-50" />
              </motion.a>
            </div>

            <i className="absolute opacity-10 fas fa-flask text-[10rem] -right-6 -bottom-10 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col p-7 glass-card-strong rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 rounded-full bg-primary/8 blur-3xl -mr-12 -mt-12" />

            <h4 className="flex items-center gap-3 mb-5 text-base font-bold text-foreground">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-warning/15 text-warning">
                <i className="fas fa-history text-sm" />
              </div>
              Últimas Aulas
            </h4>

            <div className="flex-1 space-y-3 overflow-y-auto max-h-[220px] custom-scrollbar pr-1">
              {disciplinasMock.slice(0, 3).map((mat) => (
                <Link
                  key={mat.id}
                  to={`/sala-de-aula/${mat.id}`}
                  className="flex items-center gap-3 p-3 transition-all rounded-xl glass-surface hover:bg-card/70 hover:shadow-sm group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-sm text-primary-foreground shrink-0 group-hover:scale-105 transition-transform">
                    <i className="fas fa-play text-[10px] ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-foreground group-hover:text-primary transition-colors">{mat.titulo}</p>
                    <p className="text-[10px] text-muted-foreground/50">Continuar</p>
                    <div className="w-full h-1 mt-1.5 rounded-full overflow-hidden bg-muted/50">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${mat.progresso}%` }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Disciplines Grid */}
        <section>
          <div className="flex items-end justify-between mb-6 px-1">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">Minhas Disciplinas</h3>
                <p className="text-sm text-muted-foreground/60 font-medium">Acesse o conteúdo das suas matérias.</p>
              </div>
            </div>
            <Link
              to="/disciplinas"
              className="group flex items-center gap-2 text-sm font-semibold text-primary transition-colors glass-card-strong px-4 py-2 rounded-xl"
            >
              Ver tudo
              <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {disciplinasMock.map((mat) => (
              <motion.div key={mat.id} variants={fadeUp}>
                <Link
                  to={`/sala-de-aula/${mat.id}`}
                  className="relative flex flex-col p-4 transition-all duration-300 glass-card-strong group rounded-[2rem] hover:shadow-elevated hover:-translate-y-2 aurora-glow"
                >
                  <div className="relative h-44 mb-4 overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={mat.imagem}
                      alt={mat.titulo}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-card/90 backdrop-blur-sm text-foreground shadow-sm">
                        {mat.professor}
                      </span>
                    </div>
                  </div>

                  <div className="px-1 pb-1 flex-1 flex flex-col">
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {mat.titulo}
                    </h4>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-wider">Progresso</span>
                        <span className="text-xs font-bold text-primary">{mat.progresso}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full overflow-hidden bg-muted/40">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${mat.progresso}%` }}
                          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </AppLayout>
  );
};

export default AlunoDashboard;
