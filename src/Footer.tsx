import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiChevronUp } from "react-icons/hi";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-10 px-4 bg-gradient-to-b from-[#fdf3e3] to-[#f7ecd9] text-center text-black font-magic text-lg tracking-wide overflow-hidden"
    >
      {/* BOUTON RETOUR EN HAUT */}
      <div className="absolute -top-6 right-6 z-10">
        <button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-sakura text-3xl hover:scale-110 hover:shadow-2xl transition duration-300 relative group"
        >
          <HiChevronUp className="z-10" />
          {/* Halo animé */}
          <div className="absolute inset-0 rounded-full bg-sakura/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-500 animate-pulse"></div>
        </button>
      </div>

      {/* TEXTE */}
      Fait avec équilibre et passion par{" "}
      <span className="text-sakura font-bold">SAYATH</span> — © Ikigai Academy 2025
    </footer>
  );
};

export default Footer;
