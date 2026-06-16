import { useState, useEffect } from "react";
import { Shipment } from "../types";

const INITIAL_SHIPMENTS: Shipment[] = [
  { id: "FP-1082", volume: 36, type: "Areia Grossa (Estruturas)", destination: "Edf. Golden Horizon - Jatiúca, Maceió", status: "EM ROTA", eta: 14, time: "10:35" },
  { id: "FP-1083", volume: 24, type: "Areia Fina (Reboco Premium)", destination: "Cond. Reserva de São Miguel - Barra de São Miguel", status: "EM ROTA", eta: 29, time: "10:48" },
  { id: "FP-1084", volume: 48, type: "Areia Média (Assentamento)", destination: "Complexo Logístico - Polo Industrial, Marechal Deodoro", status: "CARREGANDO", eta: 45, time: "11:15" },
  { id: "FP-1081", volume: 24, type: "Areia Grossa (Estruturas)", destination: "Edf. Saint Michel - Ponta Verde, Maceió", status: "CONCLUÍDO", eta: 0, time: "10:12" }
];

export function useLogistics() {
  const [shipments, setShipments] = useState<Shipment[]>(INITIAL_SHIPMENTS);

  const triggerNewShipmentSimulation = () => {
    const destinations = ["Edf. Bellagio - Jatiúca, Maceió", "Residência Cond. Fechado - Antares, Maceió", "Centro Corporativo - Arapiraca", "Pousada Boutique - Milagres, Alagoas", "Obra Industrial - Marechal Deodoro"];
    const types = ["Areia Fina (Reboco Premium)", "Areia Média (Assentamento)", "Areia Grossa (Estruturas)"];
    const volumes = [12, 24, 36, 48];
    const randDest = destinations[Math.floor(Math.random() * destinations.length)];
    const randType = types[Math.floor(Math.random() * types.length)];
    const randVol = volumes[Math.floor(Math.random() * volumes.length)];
    const newId = `FP-${Math.floor(Math.random() * 900) + 1100}`;
    
    const newShip: Shipment = {
      id: newId,
      volume: randVol,
      type: randType,
      destination: randDest,
      status: "EM ROTA",
      eta: Math.floor(Math.random() * 35) + 10,
      time: "Agora"
    };

    setShipments(prev => [newShip, ...prev.slice(0, 4)]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShipments(prev =>
        prev.map(s => {
          if (s.status === "EM ROTA" && s.eta > 1) {
            return { ...s, eta: s.eta - 1 };
          } else if (s.status === "EM ROTA" && s.eta === 1) {
            return { ...s, status: "CONCLUÍDO", eta: 0 };
          }
          return s;
        })
      );
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return { shipments, triggerNewShipmentSimulation };
}
