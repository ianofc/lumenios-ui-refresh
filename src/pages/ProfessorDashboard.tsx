import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const horarios = ["07:30", "08:20", "09:10", "10:10", "11:00", "13:30", "14:20", "15:10"];

const gradeMock: Record<string, Record<string, { nome: string; alunos: number } | null>> = {
  "07:30": { Segunda: { nome: "Matemática 9A", alunos: 32 }, Terça: null, Quarta: { nome: "Física 8B", alunos: 28 }, Quinta: null, Sexta: { nome: "Matemática 7C", alunos: 35 } },
  "08:20": { Segunda: { nome: "Matemática 9A", alunos: 32 }, Terça: { nome: "Física 9A", alunos: 30 }, Quarta: { nome: "Física 8B", alunos: 28 }, Quinta: { nome: "Lab. Ciências", alunos: 25 }, Sexta: null },
  "09:10": { Segunda: null, Terça: { nome: "Física 9A", alunos: 30 }, Quarta: null, Quinta: { nome: "Lab. Ciências", alunos: 25 }, Sexta: { nome: "Reforço", alunos: 12 } },
  "10:10": { Segunda: { nome: "Matemática 8A", alunos: 34 }, Terça: null, Quarta: { nome: "Matemática 8A", alunos: 34 }, Quinta: null, Sexta: null },
  "11:00": { Segunda: { nome: "Matemática 8A", alunos: 34 }, Terça: null, Quarta: null, Quinta: null, Sexta: null },
  "13:30": { Segunda: null, Terça: { nome: "Física 7A", alunos: 29 }, Quarta: null, Quinta: { nome: "Física 7A", alunos: 29 }, Sexta: null },
  "14:20": { Segunda: null, Terça: { nome: "Física 7A", alunos: 29 }, Quarta: null, Quinta: null, Sexta: null },
  "15:10": { Segunda: null, Terça: null, Quarta: null, Quinta: null, Sexta: null },
};

const ProfessorDashboard = () => {
  const [periodo, setPeriodo] = useState<"manha" | "tarde">("manha");

  const filteredHorarios = horarios.filter((h) => {
    if (periodo === "manha") return h < "12:00";
    return h >= "12:00";
  });

  return (
    <AppLayout role="professor" auroraVariant="default">
      <div className="max-w-[1600px] mx-auto px-6 pb-20 space-y-8">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden shadow-elevated min-h-[300px] group bg-foreground"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out group-hover:scale-105 opacity-35"
              alt="Sala de Aula"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-aurora-hero" />
          <div className="absolute inset-0 bg-gradient-aurora-overlay" />

          <div className="absolute inset-0 flex items-center px-8 md:px-12 lg:px-16">
            <div className="relative z-10 flex flex-col items-end justify-between w-full gap-6 md:flex-row">
              <div className="max-w-2xl space-y-5">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase border rounded-full bg-card/10 backdrop-blur-md border-card/20 text-primary-foreground/70"
                >
                  Portal Docente
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold leading-tight md:text-5xl font-display drop-shadow-xl text-primary-foreground"
                >
                  Olá, <span className="text-gradient-aurora">Professor</span>.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { icon: "fas fa-layer-group", value: "6", label: "Turmas", bg: "bg-primary/15" },
                    { icon: "fas fa-user-graduate", value: "187", label: "Alunos", bg: "bg-success/15" },
                    { icon: "fas fa-clock", value: "3", label: "Hoje", bg: "bg-warning/15" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-2.5 px-4 py-2.5 bg-card/10 backdrop-blur-md rounded-xl border border-card/10">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${stat.bg} text-primary-foreground/80`}>
                        <i className={`${stat.icon} text-sm`} />
                      </div>
                      <div>
                        <p className="text-lg font-bold leading-none text-primary-foreground">{stat.value}</p>
                        <p className="text-[9px] uppercase font-bold tracking-wider text-primary-foreground/50">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-6 py-3.5 font-bold bg-card text-foreground rounded-2xl shadow-xl hover:shadow-elevated transition-all"
                >
                  <i className="fas fa-plus" /> Nova Turma
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Grade Horária */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card-strong rounded-[2rem] overflow-hidden"
        >
          <div className="flex flex-col items-center justify-between gap-4 p-6 border-b border-border/20 sm:flex-row">
            <h2 className="flex items-center gap-3 text-lg font-bold text-foreground">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" /> Grade Horária
            </h2>
            <div className="flex p-1 glass-surface rounded-xl">
              {(["manha", "tarde"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    periodo === p ? "bg-card text-primary shadow-sm" : "text-muted-foreground"
                  }`}
                >
                  {p === "manha" ? "Manhã" : "Tarde"}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-muted/15">
                  <th className="w-28 px-5 py-4 text-[10px] font-bold text-left uppercase tracking-wider text-muted-foreground/60">Horário</th>
                  {diasSemana.map((dia) => (
                    <th key={dia} className="w-1/5 px-5 py-4 text-[10px] font-bold text-center uppercase tracking-wider text-muted-foreground/60">{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/15">
                {filteredHorarios.map((tempo) => (
                  <tr key={tempo} className="hover:bg-primary/3 transition">
                    <td className="px-5 py-4 text-xs font-bold border-r border-border/15 text-muted-foreground/60 bg-muted/10 tabular-nums">{tempo}</td>
                    {diasSemana.map((dia) => {
                      const item = gradeMock[tempo]?.[dia];
                      return (
                        <td key={dia} className="relative h-20 p-2 align-top border-r border-dashed border-border/15 last:border-0 group">
                          {item ? (
                            <motion.div
                              whileHover={{ scale: 1.03 }}
                              className="block w-full h-full p-3 glass-surface rounded-xl hover:bg-primary/5 cursor-pointer transition-colors"
                            >
                              <h4 className="text-sm font-bold truncate text-primary">{item.nome}</h4>
                              <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground/50">
                                <i className="fas fa-user-graduate text-[9px]" />
                                <span className="text-[10px] font-semibold">{item.alunos}</span>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="flex items-center justify-center w-full h-full opacity-0 cursor-pointer rounded-xl group-hover:opacity-100 hover:bg-muted/30 transition-all">
                              <i className="fas fa-plus text-muted-foreground/25 text-xs" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 relative rounded-[2rem] bg-gradient-highlight p-9 text-primary-foreground overflow-hidden shadow-elevated flex flex-col justify-center min-h-[240px] group"
          >
            <div className="absolute top-0 right-0 w-72 h-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-card/8 blur-3xl" />
            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wide uppercase border rounded-lg bg-card/15 backdrop-blur-md border-card/15">
                <i className="mr-1 fas fa-lightbulb text-warning" /> Dica Pedagógica
              </span>
              <h3 className="mb-3 text-2xl font-bold font-display">Planejamento Semanal</h3>
              <p className="mb-6 text-sm leading-relaxed opacity-80">
                Organize suas aulas da semana, defina objetivos claros e acompanhe o progresso dos seus alunos.
              </p>
              <motion.div whileHover={{ scale: 1.04 }}>
                <Link
                  to="/professor/planejamento"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold bg-card text-secondary rounded-xl shadow-lg transition-all"
                >
                  Planejar <i className="fas fa-arrow-right text-xs" />
                </Link>
              </motion.div>
            </div>
            <i className="absolute opacity-10 fas fa-chalkboard text-[9rem] -right-4 -bottom-6 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card-strong rounded-[2rem] p-7 flex flex-col"
          >
            <h4 className="flex items-center gap-3 mb-5 text-base font-bold text-foreground">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-success/15 text-success">
                <i className="fas fa-chart-bar text-sm" />
              </div>
              Resumo Rápido
            </h4>
            <div className="space-y-2.5 flex-1">
              {[
                { label: "Aulas esta semana", value: "18", icon: "fas fa-calendar-check", color: "text-primary" },
                { label: "Atividades pendentes", value: "5", icon: "fas fa-tasks", color: "text-warning" },
                { label: "Avaliações corrigidas", value: "42", icon: "fas fa-check-circle", color: "text-success" },
                { label: "Presença média", value: "94%", icon: "fas fa-user-check", color: "text-secondary" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between p-3.5 rounded-xl glass-surface hover:bg-card/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <i className={`${item.icon} ${item.color} text-sm`} />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  <span className={`text-lg font-bold font-display ${item.color}`}>{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfessorDashboard;
