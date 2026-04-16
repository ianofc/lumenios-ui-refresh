import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuroraBackground from "./AuroraBackground";

interface AppLayoutProps {
  children: ReactNode;
  role: "aluno" | "professor";
  auroraVariant?: "default" | "warm" | "fresh" | "deep" | "vibrant";
}

const AppLayout = ({ children, role, auroraVariant = "default" }: AppLayoutProps) => (
  <div className="relative flex flex-col min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary">
    <AuroraBackground variant={auroraVariant} />
    <Navbar role={role} />
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex-grow pt-8 pb-12"
      >
        {children}
      </motion.main>
    </AnimatePresence>
    <Footer />
  </div>
);

export default AppLayout;
