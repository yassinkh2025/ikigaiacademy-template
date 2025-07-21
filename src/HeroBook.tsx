import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FloatingMenu from "./FloatingMenu";

const HeroBook = () => {
  const [startAnim, setStartAnim] = useState(false);
  const titleRef = useRef(null);
  const text = "Un lieu de paix, de savoir et de discipline douce.";

  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const next = document.getElementById("about");
    if (!next) return;
    next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/japan-classroom.jpg')" }}
    >
      <FloatingMenu />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Aura magique */}
      {startAnim && (
        <div
          className="absolute w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full bg-pink-300/20 blur-3xl opacity-40 animate-pulse z-0"
          style={{ top: "58%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
      )}

      {/* Particules flottantes */}
      {startAnim && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-float"
              style={{
                top: `${Math.random() * 90 + 5}%`,
                left: `${Math.random() * 90 + 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Texte et bouton */}
      <div className="relative h-full flex flex-col items-center justify-center z-20 text-center px-4">
        {startAnim && (
          <>
            <motion.h1
              ref={titleRef}
              className="text-3xl md:text-5xl font-bold tracking-wide text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              IKIGAI ACADEMY
            </motion.h1>

            {/* Texte recomposé mot par mot */}
            <div className="flex flex-wrap justify-center mt-2 max-w-2xl">
              {text.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{
                    opacity: 0,
                    x: (Math.random() - 0.5) * 60,
                    rotate: (Math.random() - 0.5) * 20,
                  }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{
                    delay: 1 + i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="text-white/90 text-lg md:text-xl font-light mx-1"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.button
              onClick={handleClick}
              className="mt-6 px-6 py-3 bg-white/90 text-gray-800 font-semibold rounded-full shadow-md hover:bg-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Entrer dans l'académie
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroBook;
