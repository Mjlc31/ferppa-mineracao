import { z } from "zod";

export const leadFormSchema = z.object({
  clientName: z.string().min(3, "O nome completo é obrigatório"),
  clientCompany: z.string().optional(),
  clientPhone: z.string().min(14, "Telefone inválido. Ex: (82) 99999-9999"),
  clientVolume: z.string().min(1, "O volume e tipo de areia são obrigatórios"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export type SandType = "fina" | "media" | "grossa";
export type ConstructionType = "residential" | "commercial" | "luxury" | "pavement";

export interface Shipment {
  id: string;
  volume: number;
  type: string;
  destination: string;
  status: "EM ROTA" | "CONCLUÍDO" | "CARREGANDO";
  eta: number; // in minutes
  time: string;
}
