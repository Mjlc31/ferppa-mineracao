import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FileText, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { leadFormSchema, LeadFormData } from "../../types";
import { formatPhone } from "../../utils/calculator";
import { supabase } from "../../lib/supabase";

interface ContactProps {
  initialVolumeStr: string;
}

export function ContactSection({ initialVolumeStr }: ContactProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      clientName: "",
      clientCompany: "",
      clientPhone: "",
      clientVolume: initialVolumeStr,
    },
  });

  const watchPhone = watch("clientPhone");

  useEffect(() => {
    if (watchPhone) {
      const formatted = formatPhone(watchPhone);
      if (formatted !== watchPhone) {
        setValue("clientPhone", formatted);
      }
    }
  }, [watchPhone, setValue]);

  useEffect(() => {
    if (initialVolumeStr) {
      setValue("clientVolume", initialVolumeStr);
    }
  }, [initialVolumeStr, setValue]);

  const sandSettleEffect = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert([
        {
          nome: data.clientName,
          empresa: data.clientCompany,
          telefone: data.clientPhone,
          volume: data.clientVolume,
        },
      ]);

      if (error) {
        if (error.code === "42P01") {
          toast.error("Tabela 'leads' não encontrada no Supabase. Crie a tabela primeiro.");
          console.error(error);
        } else {
          throw error;
        }
      } else {
        toast.success("Cotação enviada com sucesso!");
        setIsSubmitted(true);
      }
    } catch (error: any) {
      console.error("Supabase Error:", error);
      toast.error(error?.message || "Houve um erro de conexão ao enviar o lead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotacao-secao" className="bg-[#172122] border-t border-[#b79152]/35 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-dodge">
        <div className="absolute inset-0 bg-[radial-gradient(#b79152_1.5px,transparent_1.5px)] [background-size:32px_32px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div {...sandSettleEffect} className="space-y-8">
            <div className="flex items-center space-x-2 text-[#b79152]">
              <FileText className="w-5 h-5" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#b79152]">Comercial & Faturamento</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white leading-[0.95]">
              SOLICITE A COTAÇÃO OFICIAL DA SUA CARGA
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-xl">
              Nossos engenheiros e diretores de compras respondem a propostas de faturamento volumétrico no mesmo dia útil. Insira os dados da sua construtora ou empreendimento de alto padrão para receber análise completa de frete e granulometria desejada para todo Alagoas.
            </p>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-[#b79152]/30 text-[#b79152] rounded-none"><Phone className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-white/50 tracking-wider">Contato Imediato WhatsApp</h5>
                  <a href="https://wa.me/5582999999999?text=Ola%20Ferppa%20Mineracao!%20Gostaria%20de%20uma%20cotacao%20de%20areia%20para%20minha%20obra." target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#b79152] transition-colors duration-200">
                    +55 (82) 99999-9999 / Alagoas
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-[#b79152]/30 text-[#b79152] rounded-none"><Mail className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-white/50 tracking-wider">Email Corporativo</h5>
                  <a href="mailto:comercial@ferppa.com" className="text-white font-bold hover:text-[#b79152] transition-colors duration-200">comercial@ferppa.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 border border-[#b79152]/30 text-[#b79152] rounded-none"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-white/50 tracking-wider">Escritório & Jazidas Central</h5>
                  <p className="text-white text-xs font-bold">Maceió / São Miguel dos Campos / Maceió - Alagoas, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-[#1c282a] border border-[#b79152]/30 p-6 sm:p-10 relative rounded-none shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="font-display font-black text-xl uppercase text-white mb-6 tracking-wide border-b border-white/10 pb-4 flex justify-between items-center">
                  <span>Protocolo de Carga</span>
                  <span className="text-[10px] font-mono text-[#b79152]">AL-2026</span>
                </h3>

                <div>
                  <label htmlFor="clientName" className="text-[10px] font-mono uppercase tracking-widest text-[#eae9e5]/60 block mb-2">Seu Nome Completo *</label>
                  <input
                    id="clientName"
                    type="text"
                    {...register("clientName")}
                    placeholder="Ex: Engenheiro Carlos Silva"
                    className="w-full bg-[#172122] border-b border-[#b79152]/30 px-3 py-3 text-white text-sm focus:outline-none focus:border-b-2 focus:border-[#b79152] transition-colors rounded-none placeholder-white/20"
                  />
                  {errors.clientName && <span className="text-red-400 text-xs mt-1 block">{errors.clientName.message}</span>}
                </div>

                <div>
                  <label htmlFor="clientCompany" className="text-[10px] font-mono uppercase tracking-widest text-[#eae9e5]/60 block mb-2">Nome Construtora / Empreendimento</label>
                  <input
                    id="clientCompany"
                    type="text"
                    {...register("clientCompany")}
                    placeholder="Ex: Silva & Associados High-End"
                    className="w-full bg-[#172122] border-b border-[#b79152]/30 px-3 py-3 text-white text-sm focus:outline-none focus:border-b-2 focus:border-[#b79152] transition-colors rounded-none placeholder-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="clientPhone" className="text-[10px] font-mono uppercase tracking-widest text-[#eae9e5]/60 block mb-2">Telefone com DDD *</label>
                    <input
                      id="clientPhone"
                      type="tel"
                      {...register("clientPhone")}
                      placeholder="Ex: (82) 99999-0000"
                      className="w-full bg-[#172122] border-b border-[#b79152]/30 px-3 py-3 text-white text-sm focus:outline-none focus:border-b-2 focus:border-[#b79152] transition-colors rounded-none placeholder-white/20"
                    />
                    {errors.clientPhone && <span className="text-red-400 text-xs mt-1 block">{errors.clientPhone.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="clientVolume" className="text-[10px] font-mono uppercase tracking-widest text-[#eae9e5]/60 block mb-2">Volume Estimado & Tipo *</label>
                    <input
                      id="clientVolume"
                      type="text"
                      {...register("clientVolume")}
                      placeholder="Ex: 48m³ Areia Média"
                      className="w-full bg-[#172122] border-b border-[#b79152]/40 px-3 py-3 text-white text-[#b79152] font-semibold text-sm focus:outline-none focus:border-b-2 focus:border-[#b79152] transition-colors rounded-none placeholder-white/20"
                    />
                    {errors.clientVolume && <span className="text-red-400 text-xs mt-1 block">{errors.clientVolume.message}</span>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#b79152] text-[#172122] font-black text-xs tracking-widest uppercase py-4 hover:brightness-110 hover:shadow-lg transition-all duration-300 rounded-none cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Enviando..." : "Gerar Cotação e Enviar"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[9px] text-[#eae9e5]/40 text-center font-mono mt-3">
                    Seus dados estão protegidos sob governança de segurança comercial corporativa.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#b79152]/10 border border-[#b79152] flex items-center justify-center text-[#b79152] mb-6 rounded-none">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-2 tracking-wide">
                  COTAÇÃO PROTOCOLADA!
                </h3>
                <p className="text-[#eae9e5]/70 text-sm max-w-md mx-auto mb-8">
                  Nossa engenharia e despachantes estão calculando sua viabilidade agora de forma rigorosa.
                </p>
                <div className="space-y-4 w-full">
                  <a
                    href={`https://wa.me/5582999999999`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#b79152] text-[#172122] font-black text-xs tracking-widest uppercase py-3.5 flex items-center justify-center space-x-2 transition-all hover:brightness-110 rounded-none"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Falar no WhatsApp Comercial</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full bg-transparent border border-white/20 text-[#eae9e5] text-xs font-bold uppercase py-3 rounded-none hover:bg-white/5 transition-all duration-300"
                  >
                    Nova Simulação
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
