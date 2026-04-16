import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";

const crianças = [
  { id: 1, nome: "Helena S.", avatar: "Helena", idade: "2 anos", turma: "Turma Girassol" },
  { id: 2, nome: "Miguel A.", avatar: "Miguel", idade: "1 ano", turma: "Turma Girassol" },
  { id: 3, nome: "Alice R.", avatar: "Alice", idade: "3 anos", turma: "Turma Estrela" },
  { id: 4, nome: "Arthur L.", avatar: "Arthur", idade: "2 anos", turma: "Turma Estrela" },
];

const registrosHoje = [
  { id: 1, crianca: "Helena S.", tipo: "alimentacao", hora: "08:30", desc: "Café da manhã — comeu bem (frutas e mingau)" },
  { id: 2, crianca: "Miguel A.", tipo: "sono", hora: "09:15", desc: "Dormiu por 1h30 — sono tranquilo" },
  { id: 3, crianca: "Alice R.", tipo: "atividade", hora: "10:00", desc: "Pintura com tinta guache — muito participativa" },
  { id: 4, crianca: "Helena S.", tipo: "recado", hora: "11:00", desc: "Mãe ligou pedindo troca de roupa extra" },
  { id: 5, crianca: "Arthur L.", tipo: "alimentacao", hora: "11:30", desc: "Almoço — comeu metade do prato, rejeitou legumes" },
  { id: 6, crianca: "Miguel A.", tipo: "saude", hora: "13:00", desc: "Temperatura normal, sem sinais de febre" },
];

const tipoConfig: Record<string, { icon: string; color: string; bg: string; label: string }> = {
  alimentacao: { icon: "fas fa-utensils", color: "text-[hsl(25,90%,55%)]", bg: "bg-[hsl(25,90%,55%)]/10", label: "Alimentação" },
  sono: { icon: "fas fa-moon", color: "text-secondary", bg: "bg-secondary/10", label: "Sono" },
  atividade: { icon: "fas fa-palette", color: "text-success", bg: "bg-success/10", label: "Atividade" },
  recado: { icon: "fas fa-comment-dots", color: "text-primary", bg: "bg-primary/10", label: "Recado" },
  saude: { icon: "fas fa-heartbeat", color: "text-destructive", bg: "bg-destructive/10", label: "Saúde" },
};

const CrecheDashboard = () => {
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"timeline" | "novo">("timeline");

  const filteredRegistros = selectedChild
    ? registrosHoje.filter((r) => r.crianca === crianças.find((c) => c.id === selectedChild)?.nome)
    : registrosHoje;

  return (
    <AppLayout role="aluno" auroraVariant="warm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(25,90%,60%)] to-[hsl(45,95%,55%)] text-white shadow-lg"
            >
              <i className="text-xl fas fa-baby" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-black font-display text-foreground">Diário de Bordo</h1>
              <p className="text-sm text-muted-foreground/70 font-medium">Creche · Turma Girassol & Estrela</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Children Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <div className="glass-card-strong rounded-3xl p-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-4 flex items-center gap-2">
                <i className="fas fa-child" /> Crianças
              </h3>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedChild(null)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all text-sm font-semibold ${
                    selectedChild === null
                      ? "bg-primary/8 text-primary glass-surface"
                      : "hover:bg-muted/50 text-muted-foreground"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${selectedChild === null ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    <i className="fas fa-users text-xs" />
                  </div>
                  Todas
                </button>
                {crianças.map((c) => (
                  <motion.button
                    key={c.id}
                    whileHover={{ x: 3 }}
                    onClick={() => setSelectedChild(c.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      selectedChild === c.id ? "glass-surface bg-primary/5" : "hover:bg-muted/40"
                    }`}
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${c.avatar}&background=f59e0b&color=fff&size=36&rounded=true&bold=true`}
                      alt={c.nome}
                      className="w-9 h-9 rounded-xl shadow-sm"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{c.nome}</p>
                      <p className="text-[10px] text-muted-foreground/60">{c.idade} · {c.turma}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card-strong rounded-3xl p-5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 mb-4 flex items-center gap-2">
                <i className="fas fa-chart-pie" /> Resumo do Dia
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: "fas fa-utensils", val: "3", label: "Refeições", bg: "bg-[hsl(25,90%,60%)]/10 text-[hsl(25,90%,55%)]" },
                  { icon: "fas fa-moon", val: "1", label: "Sonecas", bg: "bg-secondary/10 text-secondary" },
                  { icon: "fas fa-palette", val: "1", label: "Atividades", bg: "bg-success/10 text-success" },
                  { icon: "fas fa-comment-dots", val: "1", label: "Recados", bg: "bg-primary/10 text-primary" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.04 }}
                    className="flex flex-col items-center p-3.5 rounded-2xl bg-muted/20 glass-surface"
                  >
                    <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${s.bg} mb-2`}>
                      <i className={`${s.icon} text-xs`} />
                    </div>
                    <span className="text-xl font-black font-display text-foreground">{s.val}</span>
                    <span className="text-[9px] text-muted-foreground/70 font-semibold">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {/* Tab bar */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex p-1.5 rounded-2xl glass-card-strong">
                {[
                  { key: "timeline" as const, icon: "fas fa-stream", label: "Timeline" },
                  { key: "novo" as const, icon: "fas fa-plus", label: "Novo Registro" },
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
              <div className="flex-1" />
              <span className="text-xs font-semibold text-muted-foreground/60 glass-surface px-3 py-1.5 rounded-lg">
                <i className="far fa-calendar mr-1.5" /> 16 Abr 2026
              </span>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "timeline" ? (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {filteredRegistros.map((reg, i) => {
                    const cfg = tipoConfig[reg.tipo];
                    return (
                      <motion.div
                        key={reg.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ x: 4 }}
                        className="flex gap-4 p-4 glass-card-strong rounded-2xl hover:shadow-float transition-shadow group cursor-default"
                      >
                        <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${cfg.bg} ${cfg.color} shrink-0`}>
                          <i className={cfg.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-bold text-foreground">{reg.crianca}</span>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{reg.desc}</p>
                        </div>
                        <span className="text-[11px] font-semibold text-muted-foreground/50 shrink-0 tabular-nums">{reg.hora}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="novo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-card-strong rounded-3xl p-7"
                >
                  <h3 className="text-lg font-bold font-display text-foreground mb-5">Novo Registro</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-bold text-muted-foreground/70 mb-2 uppercase tracking-wider">Criança</label>
                      <select className="w-full px-4 py-3 text-sm glass-surface rounded-xl text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition border border-border/50">
                        {crianças.map((c) => (
                          <option key={c.id}>{c.nome}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-muted-foreground/70 mb-2 uppercase tracking-wider">Tipo</label>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(tipoConfig).map(([key, cfg]) => (
                          <motion.button
                            key={key}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold glass-surface rounded-xl hover:bg-primary/5 transition text-foreground"
                          >
                            <i className={`${cfg.icon} ${cfg.color}`} /> {cfg.label}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-muted-foreground/70 mb-2 uppercase tracking-wider">Descrição</label>
                      <textarea
                        rows={3}
                        placeholder="Descreva o registro..."
                        className="w-full px-4 py-3 text-sm glass-surface rounded-xl text-foreground placeholder:text-muted-foreground/40 focus:ring-2 focus:ring-primary/20 outline-none transition resize-none border border-border/50"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 text-sm font-bold bg-gradient-to-r from-[hsl(25,90%,60%)] to-[hsl(45,95%,55%)] text-white rounded-xl shadow-lg hover:shadow-neon transition-all"
                    >
                      <i className="fas fa-paper-plane mr-2" /> Enviar Registro
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CrecheDashboard;
