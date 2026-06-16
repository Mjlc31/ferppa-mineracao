import React from "react";
import { motion } from "motion/react";
import { FlaskConical, ShieldCheck, Calendar, Leaf, ArrowRight } from "lucide-react";
import { SpotlightCard } from "../ui/SpotlightCard";
import { SandType } from "../../types";

interface TechnicalProofProps {
  sandTypeSelected: SandType;
  setSandTypeSelected: React.Dispatch<React.SetStateAction<SandType>>;
  onQuoteSpecific: (volume: number, label: string) => void;
}

export function TechnicalProofSection({ sandTypeSelected, setSandTypeSelected, onQuoteSpecific }: TechnicalProofProps) {
  const sandSettleEffect = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <section id="beneficios" className="bg-[#172122] py-24 sm:py-32 relative border-b border-[#b79152]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div {...sandSettleEffect} className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#b79152] text-xs font-extrabold tracking-[0.3em] uppercase mb-4 inline-block">Métricas & Solidez Técnica</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter leading-[0.95]">
            A PROVA TÉCNICA DO MATERIAL
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            A mineração de areia tratada como engenharia pesada. Explore o rigor que assegura as fundações mais imponentes de Alagoas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#b79152]/25 border border-[#b79152]/25">
          <SpotlightCard {...sandSettleEffect} className="col-span-1 md:col-span-2 p-8 sm:p-10 bg-[#172122] flex flex-col justify-between group">
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-[#b79152]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#b79152]/15 transition-all duration-500 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3 text-[#b79152]">
                  <FlaskConical className="w-6 h-6" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#b79152]">Análises Técnicas Diárias</span>
                </div>
                <span className="text-white/40 font-mono text-xs font-semibold">Módulo Técnico #ABNT-2026</span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-white uppercase mb-4 tracking-tight leading-[1.05]">
                "Submetida constantemente a análises laboratoriais."
              </h3>

              <p className="text-white/70 max-w-xl text-sm leading-relaxed mb-8">
                Nossa areia não é apenas extraída; é quantificada. Monitoramos rigorosamente a homogeneidade granulométrica, os teores de silte/argila e a ausência de impurezas vegetais. Projetada para garantir cura ideal e alto fck do concreto.
              </p>

              <div id="laboratorio" className="bg-[#172122] border border-[#b79152]/30 p-6 sm:p-8 mb-6 rounded-none">
                <h4 className="font-display font-extrabold text-[#b79152] text-sm uppercase tracking-wider mb-4">Granulometria por Espectro Térmico / Peneiras</h4>
                
                <div className="flex space-x-2 mb-6 border-b border-white/10 pb-3">
                  {(["fina", "media", "grossa"] as SandType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setSandTypeSelected(t)}
                      className={`px-4 py-2 text-xs font-bold uppercase transition-all duration-200 rounded-none border ${
                        sandTypeSelected === t 
                          ? "bg-[#b79152] text-[#172122] border-[#b79152]" 
                          : "bg-transparent text-white/70 border-white/10 hover:border-[#b79152]/40 hover:text-white"
                      }`}
                    >
                      Areia {t}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">MÓDULO DE FINURA (MF):</span>
                      <span className="text-white font-bold">
                        {sandTypeSelected === "fina" ? "1.4 - 1.7 (Extra Fina)" : sandTypeSelected === "media" ? "2.0 - 2.3 (Ideal Média)" : "2.6 - 3.0 (Altamente Resistente)"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">IMPUREZAS ORGÂNICAS:</span>
                      <span className="text-emerald-400 font-bold">&lt; 0.05% (Traços Nulos)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">TEOR DE SILTE/ARGILA:</span>
                      <span className="text-white font-bold">{sandTypeSelected === "fina" ? "0.8%" : sandTypeSelected === "media" ? "1.1%" : "0.5%"} (Abaixo do limite de 3%)</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/60">APLICAÇÃO IDEAL:</span>
                      <span className="text-[#b79152] font-extrabold uppercase">
                        {sandTypeSelected === "fina" ? "Rebocos Finos" : sandTypeSelected === "media" ? "Alvenarias" : "Estruturas Pesadas"}
                      </span>
                    </div>
                  </div>

                  <div className="border border-[#b79152]/20 p-5 bg-[#1a2526] flex flex-col justify-between h-40 relative">
                    <span className="text-[10px] font-mono text-white/50 uppercase">Curva de Distribuição Granulométrica (Peneiramento)</span>
                    <div className="h-20 flex items-end justify-between px-2 pt-4 relative">
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        <div className="border-t border-white w-full"></div>
                        <div className="border-t border-white w-full"></div>
                        <div className="border-t border-white w-full"></div>
                      </div>

                      <div 
                        className="w-8 bg-[#b79152] transition-all duration-500 relative"
                        style={{ height: sandTypeSelected === "fina" ? "85%" : sandTypeSelected === "media" ? "35%" : "12%" }}
                      >
                        <span className="text-[8px] font-mono absolute -top-4 left-1/2 -translate-x-1/2 text-white">#50</span>
                      </div>
                      <div 
                        className="w-8 bg-[#b79152] transition-all duration-500 relative"
                        style={{ height: sandTypeSelected === "fina" ? "60%" : sandTypeSelected === "media" ? "75%" : "40%" }}
                      >
                        <span className="text-[8px] font-mono absolute -top-4 left-1/2 -translate-x-1/2 text-white">#30</span>
                      </div>
                      <div 
                        className="w-8 bg-[#b79152] transition-all duration-500 relative"
                        style={{ height: sandTypeSelected === "fina" ? "20%" : sandTypeSelected === "media" ? "55%" : "85%" }}
                      >
                        <span className="text-[8px] font-mono absolute -top-4 left-1/2 -translate-x-1/2 text-white">#16</span>
                      </div>
                      <div 
                        className="w-8 bg-[#b79152] transition-all duration-500 relative"
                        style={{ height: "4%" }}
                      >
                        <span className="text-[8px] font-mono absolute -top-4 left-1/2 -translate-x-1/2 text-white">#4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              type="button"
              className="flex items-center space-x-2 text-xs font-bold text-[#b79152] hover:text-[#9d7a41] cursor-pointer relative z-10 bg-transparent border-none p-0" 
              onClick={() => onQuoteSpecific(0, `Areia ${sandTypeSelected.toUpperCase()}`)}
            >
              <span>Deseja cotar este material específico? Enviar para a calculadora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="p-8 bg-[#172122] flex flex-col justify-between group hover:bg-white/[0.01] transition-all duration-300">
            <div className="relative z-10">
              <div className="text-[#b79152] mb-6"><ShieldCheck className="w-8 h-8" /></div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">"Areia de qualidade superior."</h3>
              <p className="text-white/70 text-sm leading-relaxed">Material puro quartzo lavada, com granulometria calibrada mecanicamente. Livre de torrões de argila ou sais minerais corrosivos.</p>
            </div>
            <div className="pt-8 border-t border-white/10 mt-8 text-xs font-mono text-white/50 relative z-10"><span>PADRÃO SÃO MIGUEL / ALAGOAS</span></div>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="p-8 bg-[#172122] flex flex-col justify-between group hover:bg-white/[0.01] transition-all duration-300">
            <div className="relative z-10">
              <div className="text-[#b79152] mb-6"><Calendar className="w-8 h-8" /></div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">"Pontualidade britânica na entrega."</h3>
              <p className="text-white/70 text-sm leading-relaxed">Tratamos prazos com seriedade absoluta. Integração com roteirização em Alagoas garante frotas chegando precisamente na janela horária estipulada.</p>
            </div>
            <div className="pt-8 border-t border-white/10 mt-8 text-xs font-mono text-white/50 flex justify-between items-center relative z-10">
              <span>TOLERÂNCIA EXTRAORDINÁRIA</span>
              <span className="text-emerald-400 font-extrabold pb-0.5 border-b border-emerald-500/20">STATUS: ATIVA</span>
            </div>
          </SpotlightCard>

          <SpotlightCard {...sandSettleEffect} className="p-8 bg-[#172122] flex flex-col justify-between group hover:bg-white/[0.01] transition-all duration-300 md:col-span-3 border-t border-[#b79152]/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="md:max-w-2xl">
                <div className="text-[#b79152] mb-4"><Leaf className="w-8 h-8" /></div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase mb-4 leading-tight">"Mineração sustentável e eficiente."</h3>
                <p className="text-white/70 text-sm leading-relaxed">Operações licenciadas junto aos órgãos reguladores estaduais. Processamento com sistema fechado de circulação de água.</p>
              </div>
              <div className="flex flex-wrap gap-3 max-w-sm">
                <span className="px-3 py-1.5 bg-white/5 text-white/80 font-mono text-[10px] border border-white/10 uppercase rounded-none">Recirculação H2O: 95%</span>
                <span className="px-3 py-1.5 bg-white/5 text-white/80 font-mono text-[10px] border border-white/10 uppercase rounded-none">Licenciamento IMA/AL</span>
                <span className="px-3 py-1.5 bg-white/5 text-[#b79152] font-mono text-[10px] border border-[#b79152]/30 uppercase rounded-none">Origem Certificada</span>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
}
