import React from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export function KineticText({ children, className, delayOffset = 0 }: { children: string; className?: string; delayOffset?: number }) {
  const words = children.split(" ");
  return (
    <span className={cn("inline-flex flex-wrap justify-center overflow-hidden h-fit py-1", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em] last:mr-0 inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: i * 0.04 + delayOffset,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
