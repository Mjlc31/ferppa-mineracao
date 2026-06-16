import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/cn";

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  type = "button",
  disabled,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < 120) {
      setPosition({ x: distanceX * 0.35, y: distanceY * 0.35 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 120, damping: 12, mass: 0.1 }}
        className="h-full w-full"
      >
        {href ? (
          <a href={href} className={cn(className, disabled && "opacity-50 cursor-not-allowed")} onClick={onClick} {...props}>
            {children}
          </a>
        ) : (
          <button type={type} disabled={disabled} className={cn(className, disabled && "opacity-50 cursor-not-allowed")} onClick={onClick} {...props}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
