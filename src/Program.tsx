import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  {
    title: "Module 1 — Révélation",
    content: "Découvre ce qui t’anime profondément et initie ton voyage intérieur.",
    image: "/module1-image.png",
    bg: "bg-[#fdf3e3]",
    color: "from-yellow-400 to-orange-500",
    quote: "La lumière intérieure éclaire même les chemins oubliés.",
  },
  {
    title: "Module 2 — Équilibre",
    content: "Apprends à équilibrer ton esprit, ton corps et tes émotions.",
    image: "/module2-image.png",
    bg: "bg-[#d8e8d3]",
    color: "from-green-400 to-emerald-500",
    quote: "L’équilibre se trouve dans le silence entre deux respirations.",
  },
  {
    title: "Module 3 — Confiance",
    content: "Affirme tes valeurs et avance avec sérénité sur ton chemin.",
    image: "/module3-image.png",
    bg: "bg-[#dfe3f3]",
    color: "from-blue-400 to-indigo-500",
    quote: "La confiance naît quand l’âme s’aligne avec l’action.",
  },
];

const Program = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSelect = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  return (
    <section
      id="program"
      className={`relative w-full py-16 px-4 transition-colors duration-700 ${modules[index].bg}`}
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* TITRE */}
        <motion.h2
          key={modules[index].title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-wide mb-2 text-neutral-800"
        >
          {modules[index].title}
        </motion.h2>

        {/* CITATION */}
        <motion.p
          key={modules[index].quote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="italic text-lg md:text-xl text-neutral-600 max-w-xl mb-4 font-serif"
        >
          “{modules[index].quote}”
        </motion.p>

        {/* IMAGE */}
        <div className="relative w-full h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={modules[index].image}
              src={modules[index].image}
              alt={modules[index].title}
              initial={{ y: direction * 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction * -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-h-full max-w-[260px] md:max-w-[300px] object-contain"
            />
          </AnimatePresence>
        </div>

        {/* CONTENU */}
        <motion.p
          key={modules[index].content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-neutral-700 max-w-xl mb-6 font-semibold"
        >
          {modules[index].content}
        </motion.p>

        {/* BOUTONS MODULES */}
        <div className="flex gap-6 mt-4 mb-2">
          {modules.map((mod, i) => (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                index === i
                  ? mod.color + " shadow-2xl scale-110"
                  : "from-gray-200 to-gray-300"
              } flex items-center justify-center text-white text-lg font-bold transition-all duration-300`}
              whileHover={{ scale: 1.1 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
