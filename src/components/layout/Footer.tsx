import React from "react";

export function Footer() {
  return (
    <div className="mt-28 pt-8 border-t border-[#b79152]/30 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 tracking-wide gap-6">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <span className="font-bold text-[#b79152]">© 2026 Ferppa Mineração S.A.</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span>Maceió - Alagoas, Brasil</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px]">
        <span>Licenças IMA/AL nº 582-10/26</span>
        <span>•</span>
        <span>Granulometria Garantida</span>
        <span>•</span>
        <span>Desenvolvido com Rigor Máximo</span>
      </div>
    </div>
  );
}
