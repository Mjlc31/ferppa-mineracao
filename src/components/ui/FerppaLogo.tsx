import React from "react";

export function FerppaLogo({
  variant = "vertical",
  className = "h-24",
  light = false
}: {
  variant?: "vertical" | "horizontal";
  className?: string;
  light?: boolean;
}) {
  const fgColor = light ? "#172122" : "#eae9e5";
  const bgColor = light ? "#eae9e5" : "#172122";

  if (variant === "vertical") {
    return (
      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Symbol */}
        {/* Left Peak (Gold) */}
        <path d="M 90 95 L 145 35 L 175 68 L 157 84 L 145 70 L 115 95 Z" fill="#b79152" />
        {/* Right Peak (Gold) */}
        <path d="M 155 95 L 187 60 L 220 95 Z" fill="#b79152" />
        {/* Cutout (Bg-colored) */}
        <path d="M 173 95 L 187 80 L 201 95 Z" fill={bgColor} />

        {/* Text 'ferppa' */}
        <text
          x="150"
          y="155"
          textAnchor="middle"
          fontFamily='"Outfit", sans-serif'
          fontWeight="900"
          fontSize="52"
          fill={fgColor}
          letterSpacing="-0.03em"
        >
          ferppa
        </text>

        {/* Line Left */}
        <line x1="45" y1="184" x2="105" y2="184" stroke="#b79152" strokeWidth="1" />
        {/* Subtext 'mineração' */}
        <text
          x="150"
          y="188"
          textAnchor="middle"
          fontFamily='"Montserrat", sans-serif'
          fontWeight="500"
          fontSize="13"
          fill="#b79152"
          letterSpacing="0.25em"
        >
          MINERAÇÃO
        </text>
        {/* Line Right */}
        <line x1="195" y1="184" x2="255" y2="184" stroke="#b79152" strokeWidth="1" />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Left Peak (Gold) */}
        <path d="M 20 50 L 50 17 L 66 35 L 56 44 L 50 37 L 34 50 Z" fill="#b79152" />
        {/* Right Peak (Gold) */}
        <path d="M 55 50 L 73 30 L 91 50 Z" fill="#b79152" />
        {/* Cutout */}
        <path d="M 65 50 L 73 42 L 81 50 Z" fill={bgColor} />

        {/* Text 'ferppa' */}
        <text
          x="105"
          y="42"
          fontFamily='"Outfit", sans-serif'
          fontWeight="900"
          fontSize="36"
          fill={fgColor}
          letterSpacing="-0.03em"
        >
          ferppa
        </text>

        {/* Subtext 'mineração' */}
        <text
          x="105"
          y="56"
          fontFamily='"Montserrat", sans-serif'
          fontWeight="500"
          fontSize="10"
          fill="#b79152"
          letterSpacing="0.32em"
        >
          MINERAÇÃO
        </text>
      </svg>
    );
  }
}
