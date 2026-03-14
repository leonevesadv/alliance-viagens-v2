/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção CTA com imagem de fundo em parallax e chamada para ação.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/portugal-card-YnbeSULRiod7EQX7iX6T5S.png')`,
        }}
      />
      <div className="absolute inset-0 bg-[#1A2744]/80" />

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Decorative */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]/50" />
            <div className="w-2 h-2 rotate-45 bg-[#C9A84C]" />
            <div className="w-12 h-px bg-[#C9A84C]/50" />
          </div>

          <h2 className="font-serif text-white text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Sua próxima peregrinação
            <br />
            <span className="text-[#C9A84C]">começa aqui</span>
          </h2>

          <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Junte-se a centenas de peregrinos que já viveram experiências
            transformadoras com a Alliance Viagens. Reserve seu lugar agora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-[#C9A84C] hover:bg-[#B8973B] text-[#1A2744] px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A84C]/20 hover:-translate-y-0.5"
            >
              Reserve Agora
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
