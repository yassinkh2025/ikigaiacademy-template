import { useRef, useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Apparition globale de la section
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }

    // Animation des champs du formulaire
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      gsap.fromTo(
        inputs,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Animation du bouton au hover
    if (buttonRef.current) {
      const btn = buttonRef.current;
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, {
          scale: 1.05,
          boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
          duration: 0.3,
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          scale: 1,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
        });
      });
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-[80vh] px-6 py-20 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/japan-classroom2.jpg')" }}
    >
      {/* Overlay doux */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      {/* Formulaire animé */}
      <div className="relative z-10 w-full max-w-xl bg-white/60 backdrop-blur-md shadow-2xl rounded-xl p-8 text-neutral-900 border border-neutral-300">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-wide">
          Contacte-nous
        </h2>

        <form ref={formRef} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ton nom"
            className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Ton email"
            className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            rows={4}
            placeholder="Ton message"
            className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
          ></textarea>
          <button
            ref={buttonRef}
            type="submit"
            className="mt-4 bg-gradient-to-r from-yellow-300 to-amber-500 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
