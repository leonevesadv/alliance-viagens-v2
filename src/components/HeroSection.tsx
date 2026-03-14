/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Hero section full-screen com imagem do Vaticano, overlay gradiente
 * e texto sobreposto com tipografia Playfair Display.
 */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/hero-banner-Q92LYjEFR7wBcoemrmsfHq.png";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Basílica de São Pedro no Vaticano ao pôr do sol"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2744]/85 via-[#1A2744]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744]/60 via-transparent to-[#1A2744]/30" />
      </div>

      {/* Ornamental top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Decorative element */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[2px] bg-[#C9A84C] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Peregrinações & Turismo Religioso
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
          >
            Realize a viagem
            <br />
            <span className="text-[#C9A84C]">dos seus sonhos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Há mais de 12 anos proporcionando experiências de fé, cultura e lazer
            nos locais mais venerados do Cristianismo no Brasil e no mundo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#roteiros"
              className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#B8973B] text-[#1A2744] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A84C]/20 hover:-translate-y-0.5"
            >
              Nossos Roteiros
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              Conheça a Alliance
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 bg-[#1A2744]/80 backdrop-blur-md border-t border-[#C9A84C]/20"
      >
        <div className="container py-5 flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-0">
          <StatItem number="12+" label="Anos de Experiência" />
          <div className="hidden lg:block w-px h-10 bg-[#C9A84C]/30" />
          <StatItem number="50+" label="Roteiros Realizados" />
          <div className="hidden lg:block w-px h-10 bg-[#C9A84C]/30" />
          <StatItem number="1000+" label="Peregrinos Atendidos" />
          <div className="hidden lg:block w-px h-10 bg-[#C9A84C]/30" />
          <StatItem number="15+" label="Países Visitados" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#C9A84C] transition-colors hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 px-4">
      <span className="font-serif text-[#C9A84C] text-2xl lg:text-3xl font-bold">
        {number}
      </span>
      <span className="text-white/70 text-xs uppercase tracking-wider leading-tight">
        {label}
      </span>
    </div>
  );
}
