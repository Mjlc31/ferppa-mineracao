import React from "react";
import { motion } from "motion/react";
import { Scale, CheckCircle2 } from "lucide-react";
import { ConstructionType } from "../../types";

interface SimulatorProps {
  constructionType: ConstructionType;
  setConstructionType: React.Dispatch<React.SetStateAction<ConstructionType>>;
  floorArea: number;
  setFloorArea: React.Dispatch<React.SetStateAction<number>>;
  volumes: { equivalentFina: number; equivalentMedia: number; equivalentGrossa: number; };
  onQuoteSpecific: (volume: number, label: string) => void;
}

export function SimulatorSection({
  constructionType, setConstructionType, floorArea, setFloorArea, volumes, onQuoteSpecific
}: SimulatorProps) {
  const sandSettleEffect = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <section id="simulador" className="bg-[#eae9e5] text-[#172122] py-24 sm:py-32 relative border-b border-[#b79152]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div {...sandSettleEffect} className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-[#b79152]">
              <Scale className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-widest">Dimensionamento Rápido</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter text-[#172122] leading-[1.05]">
              SIMULADOR DE PRECISÃO DE VOLUME
            </h2>
            <p className="text-base text-[#172122]/80 leading-relaxed">
              Estime o volume exato de areia necessário para as etapas estruturais de acabamento de acordo com a área do projeto de engenharia. Nosso algoritmo gera a volumetria aproximada com margem de segurança técnica padronizada.
            </p>
            <div className="p-4 border-l-4 border-[#b79152] bg-[#172122]/5 rounded-none">
              <p className="text-xs font-semibold text-[#1a2c2e]">
                Nota Técnica: 1m³ de areia úmida equivale a aproximadamente 1.6 toneladas. Caminhões semipesados padrão transportam 12m³, carretas articuladas transportam 25m³ a 30m³.
              </p>
            </div>
            <div className="space-y-3 pt-4 font-sans text-[#172122]/95">
              <div className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#b79152] flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Granulometria calculada conforme ABNT NBR 7211.</span>
              </div>
              <div className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="w-5 h-5 text-[#b79152] flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Entrega roteirizada com rastreamento logístico total para Alagoas.</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 bg-[#172122] p-6 sm:p-10 border border-[#b79152]/30 text-white shadow-2xl relative rounded-none">
            <div className="absolute top-0 right-0 bg-[#b79152] text-[#172122] font-mono text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
              Ferppa Calc Eng v2.5
            </div>

            <h3 className="font-display font-black text-xl sm:text-2xl uppercase mb-6 text-white border-b border-white/10 pb-3">
              Parâmetros do Empreendimento
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-white/60 block mb-3">Tipo de Obra</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: "residential", label: "Residencial Padrão" },
                    { key: "luxury", label: "Alto Padrão / Luxo" },
                    { key: "commercial", label: "Prédios / Comercial" },
                    { key: "pavement", label: "Pavimentação / Solo" }
                  ].map(type => (
                    <button
                      key={type.key}
                      onClick={() => setConstructionType(type.key as ConstructionType)}
                      className={`py-2.5 px-1 text-[10px] sm:text-xs font-bold uppercase transition-all duration-300 rounded-none text-center border ${
                        constructionType === type.key 
                          ? "bg-[#b79152] text-[#172122] border-[#b79152]" 
                          : "bg-white/5 text-[#eae9e5] border-white/10 hover:border-[#b79152]/40"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-white/60">Área Útil do Projeto (Floors / Lajes)</label>
                  <span className="text-sm font-mono font-bold text-[#b79152]">{floorArea} m²</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={floorArea}
                  onChange={(e) => setFloorArea(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 accent-[#b79152] outline-none rounded-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
                  <span>50 m²</span>
                  <span>2500 m²</span>
                  <span>5000 m²</span>
                </div>
              </div>

              <div className="border-t border-b border-white/10 py-6 my-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-4 text-center">Estimativa Técnica de Areia Desejada</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#1c282a] p-4 border border-[#b79152]/20 text-center relative group rounded-none">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">AREIA FINA</span>
                    <span className="text-2xl font-display font-black text-[#b79152] block">{volumes.equivalentFina} m³</span>
                    <span className="text-[9px] text-[#eae9e5]/60 font-mono block mt-1">{(volumes.equivalentFina * 1.6).toFixed(0)} T (Acabamento)</span>
                    <button 
                      onClick={() => onQuoteSpecific(volumes.equivalentFina, "Areia Fina (Reboco)")}
                      className="w-full mt-3 bg-white/5 hover:bg-[#b79152] hover:text-[#172122] text-[10px] font-bold py-2 transition-all duration-300 uppercase tracking-wider rounded-none border border-[#b79152]/20"
                    >
                      Cotar Este
                    </button>
                  </div>

                  <div className="bg-[#1c282a] p-4 border border-[#b79152]/45 text-center relative group rounded-none">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">AREIA MÉDIA</span>
                    <span className="text-2xl font-display font-black text-[#b79152] block">{volumes.equivalentMedia} m³</span>
                    <span className="text-[9px] text-[#eae9e5]/60 font-mono block mt-1">{(volumes.equivalentMedia * 1.6).toFixed(0)} T (Assentamento)</span>
                    <button 
                      onClick={() => onQuoteSpecific(volumes.equivalentMedia, "Areia Média (Assentamento)")}
                      className="w-full mt-3 bg-[#b79152]/20 hover:bg-[#b79152] hover:text-[#172122] text-[10px] font-bold py-2 transition-all duration-300 uppercase tracking-wider rounded-none border border-[#b79152]/40 text-amber-100"
                    >
                      Cotar Este
                    </button>
                  </div>

                  <div className="bg-[#1c282a] p-4 border border-[#b79152]/20 text-center relative group rounded-none">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">AREIA GROSSA</span>
                    <span className="text-2xl font-display font-black text-[#b79152] block">{volumes.equivalentGrossa} m³</span>
                    <span className="text-[9px] text-[#eae9e5]/60 font-mono block mt-1">{(volumes.equivalentGrossa * 1.6).toFixed(0)} T (Estrutural)</span>
                    <button 
                      onClick={() => onQuoteSpecific(volumes.equivalentGrossa, "Areia Grossa (Concretagem)")}
                      className="w-full mt-3 bg-white/5 hover:bg-[#b79152] hover:text-[#172122] text-[10px] font-bold py-2 transition-all duration-300 uppercase tracking-wider rounded-none border border-[#b79152]/20"
                    >
                      Cotar Este
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between text-xs font-mono bg-[#1c282a] p-4 border border-[#b79152]/20 rounded-none">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ROTA LOGÍSTICA COMPATÍVEL</span>
                </div>
                <span className="text-white/60">TEMPO DE CARREGAMENTO ESTIMADO: &lt; 2 HORAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
