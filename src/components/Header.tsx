/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Header com fundo transparente que se torna sólido ao scroll.
 * Tipografia: Playfair Display para logo, Lato para nav links.
 * Cores: Navy (#1A2744), Gold (#C9A84C), Ivory (#F5F0E8)
 */
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Roteiros", href: "#roteiros" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A2744]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center bg-[#C9A84C]/10 group-hover:bg-[#C9A84C]/20 transition-colors">
            <span className="font-serif text-[#C9A84C] text-lg font-bold">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-white text-lg font-bold tracking-wide leading-tight">
              Alliance
            </span>
            <span className="text-[#C9A84C] text-[10px] uppercase tracking-[0.25em] font-semibold leading-tight">
              Viagens & Turismo
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#C9A84C] text-sm font-semibold uppercase tracking-wider transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C9A84C] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Social + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/allianceviagens/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#C9A84C] transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/allianceviagens"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#C9A84C] transition-colors"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8973B] text-[#1A2744] px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/20"
          >
            <Phone size={14} />
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1A2744]/98 backdrop-blur-lg border-t border-[#C9A84C]/20"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-[#C9A84C] text-base font-semibold uppercase tracking-wider transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.instagram.com/allianceviagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#C9A84C] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/allianceviagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#C9A84C] transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8973B] text-[#1A2744] px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all"
              >
                <Phone size={14} />
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
