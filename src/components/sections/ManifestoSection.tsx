import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Layers } from "lucide-react";
import { FerppaLogo } from "../ui/FerppaLogo";
import { ManifestoWord } from "../ui/ManifestoWord";

export function ManifestoSection() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: manifestoScrollProgress } = useScroll({
    target: manifestoRef,
    offset: ["start end", "end start"]
  });

  const manifestoHeadline = "Nasceu da identificação da falta de uma empresa com elevado grau de profissionalismo no mercado de mineração de areia em Alagoas.";
  const manifestoHeadlineWords = manifestoHeadline.split(" ");

  const sandSettleEffect = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <section id="origem" className="bg-[#eae9e5] text-[#172122] py-24 sm:py-32 relative border-b border-[#b79152]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div {...sandSettleEffect} className="space-y-8">
            <div className="flex items-center space-x-2 text-[#b79152]">
              <Layers className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#b79152]">Nossa História & Propósito</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#172122] leading-[0.95]">
              PORQUE A CONFIABILIDADE IMPORTA.
            </h2>
            
            <div 
              ref={manifestoRef} 
              className="text-2xl sm:text-4xl font-display font-black text-[#172122] leading-[1.05] tracking-tighter border-l-4 border-[#b79152] pl-6 py-2 uppercase flex flex-wrap"
            >
              {manifestoHeadlineWords.map((word, i) => (
                <ManifestoWord 
                  key={i} 
                  word={word} 
                  index={i} 
                  total={manifestoHeadlineWords.length} 
                  progress={manifestoScrollProgress} 
                />
              ))}
            </div>

            <p className="text-base text-[#172122]/80 leading-relaxed max-w-xl">
              O mercado de construção civil de alto padrão e infraestrutura em Alagoas sempre sofreu com a informalidade, atrasos inexplicáveis de entrega e variações perigosas na granulometria da areia. A Ferppa foi fundada para introduzir o máximo rigor corporativo, engenharia científica e conformidade absoluta em toda a cadeia de areia.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border border-[#172122]/10 p-5 bg-[#eae9e5] rounded-none">
                <h4 className="font-display font-black text-3xl sm:text-4xl text-[#b79152]">100%</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-[#172122]/80 mt-1">Licenciado e Ambiental</p>
              </div>
              <div className="border border-[#172122]/10 p-5 bg-[#eae9e5] rounded-none">
                <h4 className="font-display font-black text-3xl sm:text-4xl text-[#172122]">+- 0s</h4>
                <p className="text-xs font-bold uppercase tracking-wider text-[#172122]/80 mt-1">Tolerância de Atraso</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...sandSettleEffect} 
            className="bg-[#172122] p-8 sm:p-12 border border-[#b79152]/30 relative shadow-2xl flex flex-col items-center justify-center min-h-[460px]"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="absolute top-4 left-4 text-[10px] font-mono text-[#b79152]/40">BRAND_SEC_GRID_01</div>
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#eae9e5]/30">ALAGOAS_MINING_CORP</div>
            
            <div className="relative z-10 w-full max-w-xs transition-transform duration-500 hover:scale-[1.03]">
              <FerppaLogo variant="vertical" className="w-full h-auto" light={false} />
            </div>

            <div className="mt-8 border-t border-[#b79152]/20 pt-4 w-full text-center relative z-10">
              <p className="text-[10px] font-mono text-[#eae9e5]/60 tracking-widest uppercase">
                Estética Industrial High-End (Aço, Carbono e Areia de Alto Padrão)
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
