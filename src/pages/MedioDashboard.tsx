import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";
import { Progress } from "@/components/ui/progress";

const disciplinas = [
  { nome: "Matemática", professor: "Prof. Ricardo", nota: 7.8, freq: 92, icon: "fas fa-square-root-alt", cor: "text-primary" },
  { nome: "Física", professor: "Prof. Marcos", nota: 6.5, freq: 88, icon: "fas fa-atom", cor: "text-secondary" },
  { nome: "Química", professor: "Profa. Laura", nota: 8.2, freq: 95, icon: "fas fa-flask", cor: "text-success" },
  { nome: "Biologia", professor: "Prof. Carla", nota: 9.0, freq: 97, icon: "fas fa-dna", cor: "text-accent" },
  { nome: "Português", professor: "Profa. Ana", nota: 7.0, freq: 90, icon: "fas fa-book", cor: "text-warning" },
  { nome: "História", professor: "Prof. João", nota: 8.5, freq: 93, icon: "fas fa-landmark", cor: "text-primary" },
];

const simulados = [
  { id: 1, titulo: "Simulado ENEM — Ciências da Natureza", data: "20 Abr", questoes: 45, status: "pendente" },
  { id: 2, titulo: "Simulado ENEM — Matemática", data: "27 Abr", questoes: 45, status: "pendente" },
  { id: 3, titulo: "Simulado ENEM — Linguagens", data: "10 Abr", questoes: 45, status: "concluido", acertos: 34 },
  { id: 4, titulo: "Simulado ENEM — Humanas", data: "03 Abr", questoes: 45, status: "concluido", acertos: 38 },
];

const getNotaColor = (n: number) => n >= 7 ? "text-success" : n >= 5 ? "text-warning" : "text-destructive";

const MedioDashboard = () => {
  const [tab, setTab] = useState<"visao" | "simulados">("visao");

  const mediaGeral = disciplinas.reduce((s, d) => s + d.nota, 0) / disciplinas.length;
  const freqGeral = Math.round(disciplinas.reduce((s, d) => s + d.freq, 0) / disciplinas.length);

  return (
    <AppLayout role="aluno" auroraVariant="deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg"
              >
                <i className="text-xl fas fa-flask" />
              </motion.div>
              <div>
                <h1 className="text-3xl font-black font-display text-foreground">Ensino Médio</h1>
                <p className="text-sm text-muted-foreground/70 font-medium">3º Ano · Preparação Vestibular</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="lg:ml-auto flex gap-3">
              {[
                { label: "Média Geral", val: mediaGeral.toFixed(1), color: getNotaColor(mediaGeral), icon: "fas fa-chart-line" },
                { label: "Frequência", val: `${freqGeral}%`, color: freqGeral >= 80 ? "text-success" : "text-destructive", icon: "fas fa-calendar-check" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card-strong rounded-2xl px-5 py-3 flex items-center gap-3"
                >
                  <i className={`${s.icon} ${s.color}`} />
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground/60">{s.label}</p>
                    <p className={`text-2xl font-black font-display ${s.color}`}>{s.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex p-1.5 mb-6 rounded-2xl glass-card-strong w-fit">
          {[
            { key: "visao" as const, icon: "fas fa-th-large", label: "Visão Geral" },
            { key: "simulados" as const, icon: "fas fa-file-alt", label: "Simulados" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`tab-pill ${tab === t.key ? "tab-pill-active" : "tab-pill-inactive"}`}
            >
              <i className={t.icon} /> {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "visao" && (
            <motion.div
              key="visao"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {disciplinas.map((disc, i) => (
                <motion.div
                  key={disc.nome}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                  className="glass-card-strong rounded-3xl p-5 hover:shadow-float transition-all group cursor-pointer aurora-glow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex items-center justify-center w-11 h-11 rounded-xl glass-surface shadow-sm ${disc.cor}`}>
                      <i className={disc.icon} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{disc.nome}</h3>
                      <p className="text-[10px] text-muted-foreground/60">{disc.professor}</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between mb-3">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground/50 font-bold">Média</p>
                      <p className={`text-3xl font-black font-display ${getNotaColor(disc.nota)}`}>{disc.nota.toFixed(1)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground/50 font-bold">Frequência</p>
                      <p className={`text-lg font-bold ${disc.freq >= 80 ? "text-success" : "text-destructive"}`}>{disc.freq}%</p>
                    </div>
                  </div>

                  <Progress value={disc.freq} className="h-1.5 rounded-full" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {tab === "simulados" && (
            <motion.div
              key="simulados"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-3"
            >
              {simulados.map((sim, i) => (
                <motion.div
                  key={sim.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ x: 4 }}
                  className="glass-card-strong rounded-2xl p-5 hover:shadow-float transition-all flex items-center gap-4"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl shrink-0 ${
                    sim.status === "concluido" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}>
                    <i className={sim.status === "concluido" ? "fas fa-check-circle text-xl" : "fas fa-hourglass-half text-xl"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground">{sim.titulo}</h3>
                    <p className="text-xs text-muted-foreground/60"><i className="far fa-calendar mr-1" />{sim.data} · {sim.questoes} questões</p>
                  </div>
                  {sim.status === "concluido" && "acertos" in sim ? (
                    <div className="text-right shrink-0">
                      <p className="text-2xl font-black font-display text-success">{sim.acertos}/{sim.questoes}</p>
                      <p className="text-[10px] text-muted-foreground/60 font-bold">{Math.round(((sim.acertos ?? 0) / sim.questoes) * 100)}% acertos</p>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-5 py-2.5 text-sm font-bold bg-primary text-primary-foreground rounded-xl hover:shadow-neon transition shrink-0"
                    >
                      Iniciar
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
};

export default MedioDashboard;
