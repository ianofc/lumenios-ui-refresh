import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";

const bibliotecaMock = [
  { id: 1, titulo: "Álgebra Linear e Aplicações", autor: "Gilbert Strang", tipo: "PDF", categoria: "Matemática", imagem: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=300&q=80" },
  { id: 2, titulo: "Mecânica Clássica", autor: "Herbert Goldstein", tipo: "PDF", categoria: "Física", imagem: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=300&q=80" },
  { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", tipo: "eBook", categoria: "Literatura", imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80" },
  { id: 4, titulo: "Biologia Celular", autor: "Bruce Alberts", tipo: "PDF", categoria: "Biologia", imagem: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=300&q=80" },
  { id: 5, titulo: "Introdução à Programação", autor: "Python Brasil", tipo: "Vídeo", categoria: "Tecnologia", imagem: "https://images.unsplash.com/photo-1515879218367-8466d910auj?auto=format&fit=crop&w=300&q=80" },
  { id: 6, titulo: "História do Brasil", autor: "Boris Fausto", tipo: "eBook", categoria: "História", imagem: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=300&q=80" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const Biblioteca = () => {
  return (
    <AppLayout role="aluno" auroraVariant="default">
      <div className="max-w-[1600px] mx-auto px-6 pb-20 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Biblioteca Digital</h1>
            <p className="text-sm text-muted-foreground/60 font-medium">Acesse livros, apostilas e materiais de estudo.</p>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card-strong rounded-2xl p-4 flex items-center gap-3"
        >
          <div className="flex items-center flex-1 gap-3 px-4 py-3 rounded-xl glass-surface">
            <i className="fas fa-search text-muted-foreground/40" />
            <input
              type="text"
              placeholder="Pesquisar na biblioteca..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/40 text-sm"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 font-bold rounded-xl bg-primary text-primary-foreground hover:shadow-neon transition text-sm"
          >
            Buscar
          </motion.button>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {bibliotecaMock.map((bib) => (
            <motion.div
              key={bib.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="flex gap-4 p-4 glass-card-strong rounded-2xl hover:shadow-float transition-all group cursor-pointer aurora-glow"
            >
              <div className="w-22 h-30 rounded-xl overflow-hidden bg-muted shrink-0 w-[88px] h-[120px]">
                <img src={bib.imagem} alt={bib.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary mb-1">{bib.categoria}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">{bib.titulo}</h3>
                <p className="text-xs text-muted-foreground/50 mb-3">{bib.autor}</p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[9px] font-bold rounded-lg bg-primary/8 text-primary">{bib.tipo}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="ml-auto text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    <i className="fas fa-download mr-1" /> Baixar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Biblioteca;
