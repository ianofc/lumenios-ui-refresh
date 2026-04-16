import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";
import { Progress } from "@/components/ui/progress";

const trilhas = [
  { id: 1, titulo: "Engenharia de Software", progresso: 68, cursos: 12, concluidos: 8, certificados: 3, icon: "fas fa-code", cor: "from-primary to-secondary" },
  { id: 2, titulo: "Ciência de Dados", progresso: 42, cursos: 10, concluidos: 4, certificados: 1, icon: "fas fa-brain", cor: "from-secondary to-accent" },
  { id: 3, titulo: "Design UX/UI", progresso: 25, cursos: 8, concluidos: 2, certificados: 0, icon: "fas fa-palette", cor: "from-accent to-[hsl(25,90%,60%)]" },
];

const cursosRecentes = [
  { id: 1, titulo: "Algoritmos Avançados", professor: "Dr. Ricardo Lima", progresso: 85, aulas: 24, assistidas: 20, tipo: "Obrigatória" },
  { id: 2, titulo: "Machine Learning Aplicado", professor: "Dra. Camila Torres", progresso: 60, aulas: 18, assistidas: 11, tipo: "Eletiva" },
  { id: 3, titulo: "Banco de Dados NoSQL", professor: "Prof. André Costa", progresso: 30, aulas: 16, assistidas: 5, tipo: "Obrigatória" },
  { id: 4, titulo: "Prototipagem com Figma", professor: "Prof. Julia Mendes", progresso: 100, aulas: 12, assistidas: 12, tipo: "Extra" },
];

const certificados = [
  { id: 1, titulo: "Fundamentos de Python", emissao: "Mar 2026", carga: "40h", badge: "fas fa-medal" },
  { id: 2, titulo: "Introdução ao React", emissao: "Jan 2026", carga: "60h", badge: "fas fa-award" },
  { id: 3, titulo: "SQL para Análise de Dados", emissao: "Nov 2025", carga: "30h", badge: "fas fa-certificate" },
  { id: 4, titulo: "Design Thinking", emissao: "Set 2025", carga: "20h", badge: "fas fa-star" },
];

type TabKey = "trilhas" | "cursos" | "certificados";

const GraduacaoDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("trilhas");

  const auraAcademica = 72;
  const auraExtra = 45;
  const auraTotal = Math.round((auraAcademica * 0.7 + auraExtra * 0.3));

  return (
    <AppLayout role="aluno" auroraVariant="vibrant">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + Aura Bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg"
              >
                <i className="text-xl fas fa-graduation-cap" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-black font-display text-foreground">Graduação</h1>
                <p className="text-sm text-muted-foreground/70 font-medium">Autonomia Acadêmica · Ciência da Computação</p>
              </div>
            </div>

            {/* Aura Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:ml-auto glass-card-strong rounded-2xl p-5 flex items-center gap-5 min-w-[320px] aurora-glow"
            >
              <div className="relative flex items-center justify-center w-16 h-16">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="hsl(var(--muted))" strokeWidth="3.5" strokeOpacity="0.3" />
                  <motion.circle
                    cx="32" cy="32" r="28" fill="none"
                    stroke="url(#aura-grad)" strokeWidth="3.5" strokeLinecap="round"
                    initial={{ strokeDasharray: "0 176" }}
                    animate={{ strokeDasharray: `${auraTotal * 1.76} 176` }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <defs>
                    <linearGradient id="aura-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--secondary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute text-lg font-black font-display text-foreground">{auraTotal}</span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-1.5">Aura de Progresso</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground/70">Acadêmica <span className="font-bold text-primary">{auraAcademica}%</span></span>
                  <span className="text-muted-foreground/70">Extra <span className="font-bold text-secondary">{auraExtra}%</span></span>
                </div>
                <p className="text-[9px] text-muted-foreground/40 mt-1">Experiência acumulada entre core + AVA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex p-1.5 mb-6 rounded-2xl glass-card-strong w-fit">
          {[
            { key: "trilhas" as const, icon: "fas fa-route", label: "Trilhas" },
            { key: "cursos" as const, icon: "fas fa-play-circle", label: "Meus Cursos" },
            { key: "certificados" as const, icon: "fas fa-certificate", label: "Certificados" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tab-pill ${activeTab === tab.key ? "tab-pill-active" : "tab-pill-inactive"}`}
            >
              <i className={tab.icon} /> {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "trilhas" && (
            <motion.div
              key="trilhas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-4"
            >
              {trilhas.map((trilha, i) => (
                <motion.div
                  key={trilha.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass-card-strong rounded-3xl p-6 hover:shadow-elevated transition-all group cursor-pointer aurora-glow"
                >
                  <div className="flex items-start gap-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${trilha.cor} text-white shadow-lg shrink-0`}
                    >
                      <i className={`${trilha.icon} text-xl`} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors">{trilha.titulo}</h3>
                        <span className="px-2.5 py-0.5 text-[9px] font-bold rounded-lg bg-muted/50 text-muted-foreground/70">
                          {trilha.certificados} certificados
                        </span>
                      </div>
                      <Progress value={trilha.progresso} className="h-2.5 rounded-full mb-2.5" />
                      <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
                        <span><span className="font-bold text-foreground">{trilha.concluidos}</span>/{trilha.cursos} cursos</span>
                        <span className="font-bold text-primary">{trilha.progresso}% completo</span>
                      </div>
                    </div>
                    <motion.i
                      className="fas fa-chevron-right text-muted-foreground/20 group-hover:text-primary transition-colors mt-5"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "cursos" && (
            <motion.div
              key="cursos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-4 md:grid-cols-2"
            >
              {cursosRecentes.map((curso, i) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="glass-card-strong rounded-3xl p-6 hover:shadow-float transition-all group cursor-pointer aurora-glow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-lg ${
                      curso.tipo === "Obrigatória" ? "bg-primary/10 text-primary" :
                      curso.tipo === "Eletiva" ? "bg-secondary/10 text-secondary" :
                      "bg-success/10 text-success"
                    }`}>
                      {curso.tipo}
                    </span>
                    {curso.progresso === 100 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-success"
                      >
                        <i className="fas fa-check-circle" />
                      </motion.span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors mb-1">{curso.titulo}</h3>
                  <p className="text-xs text-muted-foreground/60 mb-5">{curso.professor}</p>
                  <Progress value={curso.progresso} className="h-2 rounded-full mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground/60">
                    <span>{curso.assistidas}/{curso.aulas} aulas</span>
                    <span className="font-bold text-primary">{curso.progresso}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "certificados" && (
            <motion.div
              key="certificados"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {certificados.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card-strong rounded-3xl p-6 hover:shadow-neon transition-all text-center group cursor-pointer aurora-glow"
                >
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent text-white shadow-lg"
                  >
                    <i className={`${cert.badge} text-2xl`} />
                  </motion.div>
                  <h3 className="text-sm font-bold font-display text-foreground mb-1 group-hover:text-primary transition-colors">{cert.titulo}</h3>
                  <p className="text-[10px] text-muted-foreground/60 mb-2">{cert.carga}</p>
                  <span className="text-[10px] font-semibold text-muted-foreground/40">{cert.emissao}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export default GraduacaoDashboard;
