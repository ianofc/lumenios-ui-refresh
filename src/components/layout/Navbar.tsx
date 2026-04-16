import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

interface NavbarProps {
  role: "aluno" | "professor";
}

const alunoNav: NavItem[] = [
  { label: "Início", icon: "fas fa-home", path: "/" },
  { label: "Disciplinas", icon: "fas fa-book-open", path: "/disciplinas" },
  { label: "Desempenho", icon: "fas fa-chart-line", path: "/desempenho" },
  { label: "Biblioteca", icon: "fas fa-bookmark", path: "/biblioteca" },
];

const professorNav: NavItem[] = [
  { label: "Painel", icon: "fas fa-layer-group", path: "/professor" },
  { label: "Turmas", icon: "fas fa-users", path: "/professor/turmas" },
  { label: "Planejamento", icon: "fas fa-calendar-alt", path: "/professor/planejamento" },
  { label: "Avaliações", icon: "fas fa-clipboard-check", path: "/professor/avaliacoes" },
];

const Navbar = ({ role }: NavbarProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = role === "aluno" ? alunoNav : professorNav;
  const isAluno = role === "aluno";

  const logoIcon = isAluno ? "fas fa-atom" : "fas fa-chalkboard-teacher";
  const subtitle = isAluno ? "Ambiente do Aluno" : "Portal Docente";
  const homePath = isAluno ? "/" : "/professor";

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav">
      <div className="max-w-[1600px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to={homePath} className="flex items-center gap-3 group shrink-0">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-neon text-primary-foreground"
          >
            <i className={`${logoIcon} text-base`} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-foreground font-display leading-tight">
              Hemera<span className="text-gradient-aurora">OS</span>
            </span>
            <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-muted-foreground/70">
              {subtitle}
            </span>
          </div>
        </Link>

        {/* Center nav pills — desktop */}
        <div className="hidden md:flex items-center glass-surface px-1.5 py-1.5 rounded-2xl gap-0.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-2 px-4 py-2 text-[13px] font-semibold transition-all duration-300 rounded-xl ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-card rounded-xl shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <i className={`${item.icon} text-[11px]`} /> {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl glass-surface text-muted-foreground hover:text-foreground transition"
          >
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl glass-surface text-muted-foreground hover:text-primary transition-colors"
          >
            <i className={isAluno ? "far fa-bell" : "fas fa-inbox"} />
          </motion.button>

          <div className="relative hidden md:block pl-3 border-l border-border/50">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-3 group"
            >
              <div className="hidden lg:block text-right">
                <p className="text-xs font-semibold text-foreground leading-tight">
                  {isAluno ? "Estudante" : "Professor"}
                </p>
                <p className="text-[10px] text-muted-foreground/70 font-medium">
                  {isAluno ? "Matriculado" : "Docente"}
                </p>
              </div>
              <motion.img
                whileHover={{ scale: 1.08 }}
                src={`https://ui-avatars.com/api/?name=${isAluno ? "E" : "P"}&background=${isAluno ? "6366f1" : "a855f7"}&color=fff&bold=true&size=40`}
                alt="Avatar"
                className="w-9 h-9 rounded-xl border-2 border-card shadow-sm object-cover"
              />
            </button>

            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 w-56 p-2 space-y-0.5 top-12 glass-card-strong rounded-2xl z-50"
                >
                  <Link
                    to="#"
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl text-foreground hover:bg-primary/5 hover:text-primary transition"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <i className={`w-4 text-muted-foreground ${isAluno ? "fas fa-id-card" : "fas fa-user-tie"}`} />
                    {isAluno ? "Carteirinha" : "Meu Perfil"}
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl text-foreground hover:bg-primary/5 hover:text-primary transition"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <i className="w-4 fas fa-cog text-muted-foreground" /> Configurações
                  </Link>
                  <div className="h-px my-1.5 bg-border/50" />
                  <button className="flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-xl text-destructive hover:bg-destructive/5 w-full transition">
                    <i className="w-4 fas fa-sign-out-alt" /> Sair
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition ${
                      isActive ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:bg-card/50"
                    }`}
                  >
                    <i className={`${item.icon} w-5 text-center`} /> {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
