import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  { label: "Accueil", target: "home" },
  { label: "À propos", target: "about" },
  { label: "Programme", target: "program" },
  { label: "Contact", target: "contact" },
];

// Couleurs selon la section active
const sectionColors: Record<string, string> = {
  home: "bg-white/30",
  about: "bg-blue-500/30",
  program: "bg-yellow-400/30",
  contact: "bg-pink-500/30",
};

const FloatingMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const sharedColor = sectionColors[activeSection] || "bg-white/30";

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Bouton principal flottant */}
      <motion.div
        whileHover={{ rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full ${sharedColor} backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-300`}
      >
        <HiOutlineMenuAlt3 className="text-white text-2xl" />
      </motion.div>

      {/* Menu visible */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-4 mt-6 items-end"
          >
            {links.map((link, i) => (
              <motion.li
                key={i}
                onClick={() => handleClick(link.target)}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`relative px-6 py-2 text-white ${sharedColor} 
                  backdrop-blur-md border border-white/20 rounded-full shadow-md hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden transition-all duration-300`}
              >
                <span className="z-10 relative font-medium tracking-wide">
                  {link.label}
                </span>
                {/* ruban lumineux */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-0 left-0 h-full w-full bg-white/10 blur-md rotate-2"
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingMenu;
