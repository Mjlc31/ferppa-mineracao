import React from "react";
import { motion } from "motion/react";
import { Quote, Star, Building2 } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";

export function TestimonialsSection() {
  const sandSettleEffect = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <section id="depoimentos" className="bg-[#101415] text-white py-24 sm:py-32 relative border-b border-[#b79152]/30">
      <div className="absolute inset-0 bg-[#b79152]/[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-[#101415] z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div {...sandSettleEffect} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#b79152] text-xs font-extrabold tracking-[0.3em] uppercase mb-4 inline-block">Prova Social</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tighter leading-[0.95]">
            CONFIANÇA EM FUNDAÇÕES DE <span className="text-[#b79152]">ALTO PADRÃO</span>
          </h2>
          <p className="text-white/60 mt-6 text-base max-w-2xl mx-auto font-medium">
            Avaliações reais das construtoras e engenharias mais exigentes de Alagoas, que solidificam seus empreendimentos com foco em rigor logístico e laudos de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[auto]">
          <SpotlightCard {...sandSettleEffect} className="md:col-span-2 bg-[#172122] p-8 sm:p-10 border border-[#b79152]/20 rounded-none flex flex-col justify-between group">
            <div className="relative z-10">
              <Quote className="w-10 h-10 text-[#b79152]/40 mb-6" />
              <p className="text-lg sm:text-xl font-serif italic text-[#eae9e5]/90 mb-8 leading-relaxed">
                "Na construção de resorts de luxo no litoral norte, a previsibilidade da granulometria é inegociável. A Ferppa é a única fornecedora da região que nos garante o volume exato, no timing preciso, sempre respaldada por ensaios em laboratório particular. Mudaram completamente a forma como dimensionamos concreto estrutural."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-[#b79152]/20 pt-6 mt-4 gap-4 relative z-10">
              <div>
                <h4 className="font-bold text-white text-sm tracking-wide uppercase">Roberto C. P.</h4>
                <p className="text-xs text-[#b79152] mt-1 uppercase font-mono tracking-widest">Diretor de Engenharia • V2 Construtora</p>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-[#b79152] fill-[#b79152]" />)}
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="md:col-span-1 bg-[#172122] p-8 border border-white/10 rounded-none flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#b79152] fill-transparent" />)}
              </div>
              <p className="text-[13px] font-medium text-[#eae9e5]/80 mb-6 leading-relaxed">
                "Nossa usina dependia de homogeneidade para traços de fck superiores a 40 MPa. A areia tratada da Ferppa resolveu nossas patologias na matriz cimentícia."
              </p>
            </div>
            <div className="border-t border-white/10 pt-4 mt-auto relative z-10">
              <h4 className="font-bold text-white text-[11px] uppercase tracking-wider">Eng. Camila Assis</h4>
              <p className="text-[10px] text-white/50 mt-1 uppercase font-mono tracking-widest">TechPré Soluções</p>
            </div>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="md:col-span-1 bg-gradient-to-br from-[#b79152]/10 to-[#172122] p-8 border border-[#b79152]/30 rounded-none flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 z-0">
              <Building2 className="w-24 h-24 text-[#b79152]" />
            </div>
            <div className="relative z-10">
              <p className="text-[14px] font-medium text-[#eae9e5] mb-6 leading-relaxed">
                "O rastreamento logístico que eles possuem foi o fator decisivo para operarmos nas concretagens de radier com mais tranquilidade em horários adversos."
              </p>
            </div>
            <div className="border-t border-[#b79152]/30 pt-4 mt-auto relative z-10">
              <h4 className="font-bold text-[#b79152] text-[11px] uppercase tracking-wider">Moura Dubeux</h4>
              <p className="text-[10px] text-white/70 mt-1 uppercase font-mono tracking-widest">Setor de Suprimentos</p>
            </div>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="md:col-span-1 bg-[#b79152] p-8 rounded-none flex flex-col justify-center items-center text-center text-[#172122]">
            <h3 className="font-display font-black text-3xl mb-2 relative z-10">+400k</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-6 drop-shadow-sm relative z-10">Toneladas Entregues</p>
            <div className="w-8 h-[1px] bg-[#172122]/30 mb-6 relative z-10"></div>
            <p className="text-[11px] font-semibold relative z-10">Consistência que solidificou as maiores obras do litoral.</p>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="md:col-span-3 bg-[#172122] p-8 sm:p-10 border border-white/10 rounded-none flex flex-col md:flex-row gap-8 items-center md:items-start group">
            <div className="md:w-1/4 flex-shrink-0 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8 relative z-10">
              <div className="w-16 h-16 bg-white/5 border border-white/20 flex items-center justify-center mb-4 text-[#b79152] font-display font-black text-2xl">BR</div>
              <h4 className="font-bold text-white text-[13px] tracking-wide uppercase text-center md:text-left">Consórcio BR-104</h4>
              <p className="text-[10px] text-white/50 mt-1 uppercase font-mono tracking-widest text-center md:text-left">Infraestrutura</p>
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-[#b79152] fill-[#b79152]" />)}
              </div>
            </div>
            <div className="md:w-3/4 flex flex-col justify-center relative z-10">
              <Quote className="w-6 h-6 text-white/10 mb-4" />
              <p className="text-[14px] text-[#eae9e5]/80 leading-relaxed italic">
                "Infraestrutura pesada requer parceiros de mineração pesada. A operação com draga da Ferppa nos atende e nunca nos deixou em desabastecimento crítico durante os picos de pavimentação. A emissão fiscal sem surpresas e compliance ambiental impecável também alivia nossa auditoria."
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
