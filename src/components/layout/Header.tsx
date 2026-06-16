import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { FerppaLogo } from "../ui/FerppaLogo";
import { MagneticButton } from "../ui/MagneticButton";

export function Header() {
  const { scrollY } = useScroll();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isHeaderHidden ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#172122]/90 backdrop-blur-lg border-b border-[#b79152]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FerppaLogo variant="horizontal" className="h-9 w-auto" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center space-x-8 text-[11px] tracking-[0.25em] font-bold text-[#eae9e5]/90"
        >
          <a href="#origem" className="hover:text-[#b79152] transition-colors duration-250">A EMPRESA</a>
          <a href="#beneficios" className="hover:text-[#b79152] transition-colors duration-250">QUALIDADE</a>
          <a href="#laboratorio" className="hover:text-[#b79152] transition-colors duration-250">LABORATÓRIO</a>
          <a href="#simulador" className="hover:text-[#b79152] transition-colors duration-250">LOGÍSTICA</a>
        </motion.div>
        <div>
          <MagneticButton
            href="#cotacao-secao"
            className="text-xs bg-[#b79152] text-[#172122] px-6 py-3 rounded-none font-bold uppercase tracking-tight hover:brightness-110 hover:shadow-lg hover:shadow-[#b79152]/10 transition-all duration-300 active:scale-95 inline-block"
          >
            Solicitar Orçamento
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
}
