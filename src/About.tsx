import { useState } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    key: "savoir",
    title: "Savoir",
    description: "La connaissance est le socle de l’éveil.",
    image: "/test2.png",
    glow: "0 0 10px #ff6b6b",
    textAlign: "items-start",
  },
  {
    key: "respect",
    title: "Respect",
    description: "Le respect tisse les liens durables entre les êtres.",
    image: "/test2.png",
    glow: "0 0 10px #94c6ff",
    textAlign: "items-center",
  },
  {
    key: "transmission",
    title: "Transmission",
    description: "Partager, c’est faire vivre les savoirs.",
    image: "/test3.png",
    glow: "0 0 10px #f6a9d3",
    textAlign: "items-end",
  },
];

export default function About() {
  const [selectedPillar, setSelectedPillar] = useState("savoir");
  const activePillar = pillars.find((p) => p.key === selectedPillar);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#dbe9c0] text-black overflow-hidden flex flex-col justify-center items-center px-4 py-20"
      style={{
        backgroundImage: "url('/nos-piliers-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay flou */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

      {/* Titre animé */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-5xl md:text-7xl font-bold leading-tight tracking-tight text-black drop-shadow z-10"
      >
        Nos Piliers
      </motion.h2>

      {/* Texte animé */}
      <motion.p
        key={selectedPillar}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center text-xl md:text-3xl max-w-3xl z-10 font-light px-4 mb-10 text-black"
      >
        {activePillar?.description}
      </motion.p>

      {/* Piliers */}
      <div className="relative w-full max-w-6xl flex items-end justify-between px-4 md:px-12 z-10">
        {pillars.map((pillar) => (
          <div key={pillar.key} className={`flex flex-col ${pillar.textAlign} w-1/3`}>
            <motion.img
              src={pillar.image}
              alt={pillar.title}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{
                opacity: selectedPillar === pillar.key ? 1 : 0.3,
                scale: selectedPillar === pillar.key ? 1.05 : 0.9,
              }}
              transition={{ duration: 0.5 }}
              className={`w-[200px] h-[200px] mx-auto mb-3 pointer-events-none ${
                selectedPillar === pillar.key ? "animate-glow" : ""
              }`}
              style={{
                filter:
                  selectedPillar === pillar.key
                    ? `drop-shadow(${pillar.glow})`
                    : "drop-shadow(0 0 0 transparent)",
              }}
            />

            <button
              onClick={() => setSelectedPillar(pillar.key)}
              className={`group relative inline-flex items-center justify-center 
                px-3 py-2 md:px-5 md:py-2.5 
                text-sm md:text-base
                font-semibold rounded-full border transition-all duration-300 mx-auto mt-3 
                min-w-[90px] md:min-w-[120px] shadow-md
                ${
                  selectedPillar === pillar.key
                    ? "bg-black text-white border-black hover:scale-105"
                    : "bg-white/80 text-black border-black hover:bg-black hover:text-white hover:scale-105"
                }`}
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-gradient-to-r from-[#111] via-[#555] to-[#111] rounded-full z-0"></span>
              <span className="relative z-10 tracking-wide uppercase">{pillar.title}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
