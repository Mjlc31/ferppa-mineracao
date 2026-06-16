import { useState, useMemo } from "react";
import { ConstructionType, SandType } from "../types";
import { calculateSandVolume } from "../utils/calculator";

export function useCalculator() {
  const [constructionType, setConstructionType] = useState<ConstructionType>("residential");
  const [floorArea, setFloorArea] = useState<number>(500);
  const [sandTypeSelected, setSandTypeSelected] = useState<SandType>("fina");

  const volumes = useMemo(
    () => calculateSandVolume(floorArea, constructionType),
    [floorArea, constructionType]
  );

  return {
    constructionType,
    setConstructionType,
    floorArea,
    setFloorArea,
    sandTypeSelected,
    setSandTypeSelected,
    volumes,
  };
}
