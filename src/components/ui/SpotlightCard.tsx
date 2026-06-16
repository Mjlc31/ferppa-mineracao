import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "../../utils/cn";

export function SpotlightCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLMotionProps<"div">) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 mix-blend-color-dodge z-0"
        style={{
          opacity: opacity,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(183, 145, 82, 0.15), transparent 80%)`
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 border border-[#b79152]/30 z-0"
        style={{
          opacity: opacity,
          WebkitMaskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent)`
        }}
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
