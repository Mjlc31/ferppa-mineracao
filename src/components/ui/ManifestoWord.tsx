import React from "react";
import { motion, useTransform } from "motion/react";

export function ManifestoWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: any }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start * 0.45, end * 0.45 + 0.05], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.22em] last:mr-0">
      {word}
    </motion.span>
  );
}
