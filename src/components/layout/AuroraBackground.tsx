import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  variant?: "default" | "warm" | "fresh" | "deep" | "vibrant";
}

const palettes = {
  default: [
    { color: "bg-secondary", x: "-8%", y: "-8%", size: 640, delay: 0 },
    { color: "bg-primary", x: "85%", y: "8%", size: 560, delay: 2 },
    { color: "bg-accent", x: "20%", y: "85%", size: 600, delay: 4 },
  ],
  warm: [
    { color: "bg-[hsl(25,90%,60%)]", x: "-8%", y: "-8%", size: 640, delay: 0 },
    { color: "bg-[hsl(45,95%,55%)]", x: "80%", y: "5%", size: 500, delay: 2 },
    { color: "bg-[hsl(15,85%,55%)]", x: "25%", y: "80%", size: 560, delay: 4 },
  ],
  fresh: [
    { color: "bg-[hsl(160,70%,45%)]", x: "-8%", y: "-5%", size: 600, delay: 0 },
    { color: "bg-[hsl(190,80%,50%)]", x: "82%", y: "10%", size: 520, delay: 2 },
    { color: "bg-[hsl(140,60%,50%)]", x: "20%", y: "82%", size: 580, delay: 4 },
  ],
  deep: [
    { color: "bg-primary", x: "-8%", y: "-5%", size: 640, delay: 0 },
    { color: "bg-secondary", x: "85%", y: "8%", size: 560, delay: 2 },
    { color: "bg-[hsl(220,80%,55%)]", x: "15%", y: "85%", size: 600, delay: 4 },
  ],
  vibrant: [
    { color: "bg-secondary", x: "-5%", y: "-8%", size: 600, delay: 0 },
    { color: "bg-accent", x: "82%", y: "5%", size: 540, delay: 2 },
    { color: "bg-primary", x: "25%", y: "80%", size: 620, delay: 4 },
  ],
};

const AuroraBackground = ({ variant = "default" }: AuroraBackgroundProps) => {
  const orbs = palettes[variant];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Mesh gradient base */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full mix-blend-multiply blur-[140px] opacity-[0.18] ${orb.color}`}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            y: [0, -16, 0],
            x: [0, 8, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default AuroraBackground;
