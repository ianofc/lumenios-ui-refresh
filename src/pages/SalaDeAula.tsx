import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";

const modulosMock = [
  {
    titulo: "Módulo 1 — Introdução",
    conteudos: [
      { id: 1, titulo: "Bem-vindo ao Curso", tipo: "VIDEO" },
      { id: 2, titulo: "Fundamentos Teóricos", tipo: "TEXTO" },
      { id: 3, titulo: "Quiz de Revisão", tipo: "EXERCICIO" },
    ],
  },
  {
    titulo: "Módulo 2 — Aprofundamento",
    conteudos: [
      { id: 4, titulo: "Conceitos Avançados", tipo: "VIDEO" },
      { id: 5, titulo: "Material Complementar", tipo: "TEXTO" },
      { id: 6, titulo: "Prática Guiada", tipo: "EXERCICIO" },
    ],
  },
];

const SalaDeAula = () => {
  const { id } = useParams();
  const [sidebarTab, setSidebarTab] = useState<"aulas" | "conteudos" | "ferramentas">("aulas");
  const [selectedAula, setSelectedAula] = useState(1);
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({ "Módulo 1 — Introdução": true, "Módulo 2 — Aprofundamento": true });

  const currentAula = modulosMock.flatMap((m) => m.conteudos).find((c) => c.id === selectedAula);

  const toggleModule = (titulo: string) => setOpenModules((prev) => ({ ...prev, [titulo]: !prev[titulo] }));

  const getIcon = (tipo: string) => {
    if (tipo === "EXERCICIO") return "fas fa-pencil-alt";
    if (tipo === "TEXTO") return "fas fa-file-alt";
    return "fas fa-play ml-0.5";
  };

  return (
    <AppLayout role="aluno" auroraVariant="deep">
      <div className="flex flex-col lg:flex-row h-[calc(100vh-200px)] max-w-[1800px] mx-auto gap-5 px-6 pb-6">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col flex-1 min-w-0 overflow-hidden glass-card-strong rounded-[2rem] group"
        >
          {currentAula?.tipo === "VIDEO" ? (
            <div className="relative w-full overflow-hidden aspect-video bg-foreground">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-card/20 backdrop-blur-md flex items-center justify-center cursor-pointer border border-card/20"
                >
                  <i className="text-3xl fas fa-play text-primary-foreground/80 ml-1.5" />
                </motion.div>
                <p className="mt-4 text-sm text-primary-foreground/40 font-medium">Clique para reproduzir</p>
              </div>
            </div>
          ) : currentAula?.tipo === "EXERCICIO" ? (
            <div className="flex flex-col w-full h-full p-10 overflow-y-auto bg-muted/10 custom-scrollbar">
              <div className="w-full max-w-3xl mx-auto">
                <span className="px-3 py-1 mb-4 text-[10px] font-bold rounded-lg bg-primary/10 text-primary inline-block">
                  <i className="mr-1 fas fa-pencil-alt" /> Prática
                </span>
                <h2 className="mb-6 text-2xl font-bold font-display text-foreground">{currentAula.titulo}</h2>

                <div className="p-7 mb-6 glass-card-strong rounded-2xl">
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">Responda a questão abaixo:</p>
                  <div className="space-y-2.5">
                    {["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"].map((alt) => (
                      <label
                        key={alt}
                        className="flex items-center gap-4 p-4 glass-surface rounded-xl cursor-pointer hover:bg-primary/5 group transition-colors"
                      >
                        <input type="radio" name="resp" className="w-4 h-4 text-primary border-border focus:ring-primary accent-primary" />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{alt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-3 font-bold bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-neon transition-all"
                  >
                    Enviar
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center w-full h-56 bg-gradient-to-br from-primary/8 to-secondary/8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-4 glass-card-strong shadow-lg rounded-2xl text-primary"
                  >
                    <i className="text-3xl fas fa-file-alt" />
                  </motion.div>
                  <h2 className="text-xl font-bold text-primary font-display">{currentAula?.titulo}</h2>
                </div>
              </div>
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                <h1 className="text-2xl font-bold font-display text-foreground mb-2">{currentAula?.titulo || "Aula"}</h1>
                <p className="flex items-center gap-2 text-sm text-muted-foreground/60 mb-6">
                  <i className="far fa-clock" /> Módulo de Aprendizado
                </p>
                <div className="leading-relaxed text-muted-foreground space-y-4">
                  <p>Conteúdo da aula será exibido aqui. Este é o material de texto para estudo do aluno, com explicações detalhadas sobre o tema abordado.</p>
                  <p>O professor pode adicionar texto formatado, imagens, links e materiais complementares para enriquecer a experiência de aprendizado.</p>
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-full lg:w-[380px] flex flex-col glass-card-strong rounded-[2rem] overflow-hidden h-full shrink-0"
        >
          <div className="p-4 border-b border-border/20">
            <div className="flex p-1.5 rounded-xl glass-surface">
              {([
                { key: "aulas", icon: "fas fa-list-ul", label: "Aulas" },
                { key: "conteudos", icon: "fas fa-folder-open", label: "Conteúdos" },
                { key: "ferramentas", icon: "fas fa-toolbox", label: "Tools" },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSidebarTab(tab.key)}
                  className={`flex items-center justify-center flex-1 gap-2 py-2.5 text-[12px] font-semibold transition-all rounded-lg ${
                    sidebarTab === tab.key ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <i className={`${tab.icon} text-[11px]`} /> {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto custom-scrollbar">
            {sidebarTab === "aulas" && modulosMock.map((modulo) => (
              <div key={modulo.titulo} className="overflow-hidden glass-surface rounded-2xl">
                <button
                  onClick={() => toggleModule(modulo.titulo)}
                  className="flex items-center justify-between w-full p-4 hover:bg-muted/30 transition"
                >
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground/60">{modulo.titulo}</span>
                  <motion.i
                    animate={{ rotate: openModules[modulo.titulo] ? 180 : 0 }}
                    className="text-[10px] fas fa-chevron-down text-muted-foreground/40"
                  />
                </button>

                {openModules[modulo.titulo] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="divide-y divide-border/15"
                  >
                    {modulo.conteudos.map((aula) => (
                      <motion.button
                        key={aula.id}
                        whileHover={{ x: 3 }}
                        onClick={() => setSelectedAula(aula.id)}
                        className={`flex items-center gap-3 p-3.5 w-full text-left transition-all ${
                          selectedAula === aula.id
                            ? "bg-primary/5 border-l-2 border-primary"
                            : "border-l-2 border-transparent hover:bg-primary/3"
                        }`}
                      >
                        <div className={`flex items-center justify-center w-8 h-8 rounded-lg text-[10px] shadow-sm shrink-0 ${
                          selectedAula === aula.id
                            ? "bg-primary/10 text-primary"
                            : "glass-surface text-muted-foreground"
                        }`}>
                          <i className={getIcon(aula.tipo)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium leading-tight line-clamp-2 ${
                            selectedAula === aula.id ? "text-primary" : "text-foreground"
                          }`}>
                            {aula.titulo}
                          </p>
                          <p className="text-[9px] text-muted-foreground/50 mt-0.5 capitalize">{aula.tipo.toLowerCase()}</p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {sidebarTab === "conteudos" && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <i className="fas fa-folder-open text-4xl text-muted-foreground/20 mb-3" />
                <p className="text-sm text-muted-foreground/50 font-medium">Materiais complementares aparecerão aqui.</p>
              </div>
            )}

            {sidebarTab === "ferramentas" && (
              <div className="space-y-2.5">
                {[
                  { icon: "fas fa-robot", label: "Assistente IA", desc: "Tire dúvidas com inteligência artificial" },
                  { icon: "fas fa-calculator", label: "Calculadora", desc: "Calculadora científica integrada" },
                  { icon: "fas fa-sticky-note", label: "Anotações", desc: "Salve suas notas de aula" },
                ].map((tool) => (
                  <motion.button
                    key={tool.label}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-4 w-full p-4 glass-surface rounded-xl hover:bg-primary/5 group transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <i className={tool.icon} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">{tool.label}</p>
                      <p className="text-[11px] text-muted-foreground/50">{tool.desc}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default SalaDeAula;
