import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { KineticText } from "../ui/KineticText";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowRight, Scale, Clock, Sparkles } from "lucide-react";
import { useLogistics } from "../../hooks/useLogistics";

export function HeroSection() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Disable parallax on mobile for performance
  const heroY = useTransform(scrollY, [0, 800], isMobile ? [0, 0] : [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 600], isMobile ? [1, 1] : [1, 0]);
  
  const { shipments, triggerNewShipmentSimulation } = useLogistics();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden bg-[#172122] border-b border-[#b79152]/30">
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-dodge">
        <div className="absolute inset-0 bg-[radial-gradient(#b79152_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="12%" y1="0" x2="12%" y2="100%" stroke="#b79152" strokeWidth="0.5" />
          <line x1="88%" y1="0" x2="88%" y2="100%" stroke="#b79152" strokeWidth="0.5" />
          <path d="M0 100 L20 80 L40 90 L60 70 L80 85 L100 60 L100 100 Z" fill="#b79152" />
        </svg>
      </div>

      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[12%] flex-col items-center justify-between py-32 pointer-events-none z-20 border-r border-[#b79152]/10 bg-[#172122]/40 backdrop-blur-sm">
        <div className="-rotate-180 text-[9px] font-mono tracking-[0.4em] text-[#b79152]/70 uppercase" style={{ writingMode: 'vertical-rl' }}>
          Lat 09°39'57"S • Lon 35°44'07"W
        </div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#b79152]/0 via-[#b79152]/30 to-[#b79152]/0"></div>
        <div className="-rotate-180 text-[10px] font-bold tracking-[0.5em] text-[#eae9e5]/30 uppercase mix-blend-screen" style={{ writingMode: 'vertical-rl' }}>
          Ferppa Mineração S.A.
        </div>
      </div>

      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-[12%] flex-col items-center justify-between py-32 pointer-events-auto z-20 border-l border-[#b79152]/10 bg-[#172122]/40 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6 mt-8">
          <a href="#" className="text-[#eae9e5]/40 hover:text-[#b79152] transition-colors -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase">Instagram</a>
          <a href="#" className="text-[#eae9e5]/40 hover:text-[#b79152] transition-colors -rotate-90 text-[9px] font-mono tracking-[0.3em] uppercase">LinkedIn</a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="-rotate-180 text-[9px] font-mono tracking-[0.3em] text-[#b79152]/70 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-[#b79152] absolute top-0"
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </div>
      </div>

      {/* Orbs de luz — menores em mobile para performance */}
      <div className="absolute bottom-[-5%] right-[-5%] w-[200px] h-[200px] sm:w-[450px] sm:h-[450px] bg-[#b79152]/8 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[5%] left-[-5%] w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] bg-[#b79152]/4 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none"></div>

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 px-5 py-2 border border-[#b79152]/40 bg-[#b79152]/5 text-[#b79152] text-xs font-black tracking-[0.3em] uppercase flex items-center space-x-2"
        >
          <span className="w-1.5 h-1.5 bg-[#b79152] inline-block animate-pulse"></span>
          <span>Alagoas • Brasil • Mineração de Areia Premium</span>
        </motion.div>

        <h1 className="font-display font-black text-4xl sm:text-7xl md:text-8xl uppercase text-white leading-[0.95] tracking-tighter mb-6 sm:mb-8 flex flex-col items-center">
          <KineticText delayOffset={0.1}>QUALIDADE E</KineticText>
          <KineticText delayOffset={0.3} className="text-[#b79152]">PONTUALIDADE.</KineticText>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#eae9e5]/80 font-sans font-medium text-base sm:text-2xl max-w-2xl mb-8 sm:mb-12 tracking-wide leading-relaxed px-2 sm:px-0"
        >
          "Entrega pontual de areia de qualidade para o seu empreendimento em Alagoas."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            href="#cotacao-secao"
            className="w-full sm:w-auto px-8 py-4 bg-[#b79152] text-[#172122] font-extrabold text-sm tracking-widest uppercase hover:brightness-110 transition-all duration-300 rounded-none flex items-center justify-center space-x-3 group shadow-xl shadow-[#b79152]/10"
          >
            <span>Solicitar Cotação</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          
          <MagneticButton
            href="#beneficios"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#eae9e5]/30 text-[#eae9e5] font-extrabold text-sm tracking-widest uppercase hover:bg-white/5 hover:border-[#b79152] transition-all duration-300 rounded-none flex items-center justify-center"
          >
            <span>Ver Prova Técnica</span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-4xl mt-16 p-4 sm:p-6 bg-[#172122] border border-[#b79152]/35 text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-3 border-b border-[#b79152]/30">
            <div className="flex items-center space-x-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-display font-bold text-xs tracking-[0.25em] uppercase text-white">Logística de Despacho Ativa</span>
              <span className="text-[10px] font-mono text-[#b79152] bg-[#b79152]/10 px-2.5 py-0.5 font-bold uppercase">ALAGOAS</span>
            </div>
            <button 
              onClick={triggerNewShipmentSimulation}
              className="mt-2 sm:mt-0 text-[10px] sm:text-xs font-bold text-[#b79152] hover:text-[#9d7a41] flex items-center space-x-1 transition-colors duration-200 self-start"
            >
              <span>Simular Nova Entrega</span>
              <Sparkles className="w-3 h-3" />
            </button>
          </div>

          {/* Mostrar apenas 2 entregas no mobile para não sobrecarregar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {shipments.slice(0, isMobile ? 2 : 4).map((s) => (
              <div 
                key={s.id} 
                className={`p-4 border transition-all duration-300 rounded-none ${
                  s.status === "EM ROTA" 
                    ? "border-amber-500/30 bg-amber-500/5" 
                    : s.status === "CONCLUÍDO" 
                    ? "border-emerald-500/30 bg-emerald-500/5" 
                    : "border-[#b79152]/20 bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#b79152]">{s.id}</span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 tracking-wider ${
                    s.status === "EM ROTA" 
                      ? "bg-amber-500/10 text-amber-400" 
                      : s.status === "CONCLUÍDO" 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-white/10 text-white/70"
                  }`}>
                    {s.status}
                  </span>
                </div>
                <h4 className="text-white font-bold text-xs tracking-wide line-clamp-1">{s.destination}</h4>
                <div className="flex items-center justify-between mt-2.5 text-[10px] text-white/60 font-mono">
                  <span className="flex items-center">
                    <Scale className="w-3.5 h-3.5 mr-1 text-[#b79152]" />
                    {s.volume} m³ ({s.type})
                  </span>
                  <span className="flex items-center text-white font-bold">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#b79152]" />
                    {s.status === "EM ROTA" ? `ETA: ${s.eta} min` : s.status === "CONCLUÍDO" ? "ENTREGUE (Pontual)" : "AGUARDANDO DESPACHO"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
