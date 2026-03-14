/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Footer com fundo navy escuro, links organizados e acentos dourados.
 */
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F1A2E] text-white">
      {/* Main footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A84C] flex items-center justify-center bg-[#C9A84C]/10">
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
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Há mais de 12 anos proporcionando experiências de fé, cultura e lazer
              nos locais mais venerados do Cristianismo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/allianceviagens/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-[#C9A84C] flex items-center justify-center text-white/40 hover:text-[#C9A84C] transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/allianceviagens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/10 hover:border-[#C9A84C] flex items-center justify-center text-white/40 hover:text-[#C9A84C] transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Roteiros", href: "#roteiros" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Roteiros */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-6">
              Próximos Roteiros
            </h4>
            <ul className="space-y-3">
              {[
                "Aparecida e Campos do Jordão",
                "O Melhor de Portugal",
                "Cidades Históricas de Minas",
                "Itália e Portugal",
                "Leste Europeu",
              ].map((roteiro) => (
                <li key={roteiro}>
                  <a
                    href="#roteiros"
                    className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                  >
                    {roteiro}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[#C9A84C] text-sm font-bold uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@allianceviagens.com"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                >
                  <Mail size={14} className="text-[#C9A84C]/60 shrink-0" />
                  contato@allianceviagens.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                >
                  <Phone size={14} className="text-[#C9A84C]/60 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <MapPin size={14} className="text-[#C9A84C]/60 shrink-0" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Alliance Viagens. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-[#C9A84C] text-xs transition-colors">
              Política de Privacidade
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 border border-white/10 hover:border-[#C9A84C] flex items-center justify-center text-white/30 hover:text-[#C9A84C] transition-all duration-300"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
