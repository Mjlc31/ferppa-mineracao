import { ConstructionType } from "../types";

export const calculateSandVolume = (area: number, type: ConstructionType) => {
  let factorFina = 1.8; // m³ per 100m²
  let factorMedia = 3.2;
  let factorGrossa = 4.5;

  if (type === "commercial") {
    factorFina = 2.0;
    factorMedia = 4.0;
    factorGrossa = 6.0;
  } else if (type === "luxury") {
    factorFina = 2.5;
    factorMedia = 4.5;
    factorGrossa = 7.0;
  } else if (type === "pavement") {
    factorFina = 0.5;
    factorMedia = 8.0;
    factorGrossa = 1.0;
  }

  return {
    equivalentFina: Math.round((area / 100) * factorFina),
    equivalentMedia: Math.round((area / 100) * factorMedia),
    equivalentGrossa: Math.round((area / 100) * factorGrossa),
  };
};

export const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};
