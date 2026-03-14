/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção de depoimentos com fundo navy, citações em Playfair Display Italic
 * e aspas ornamentais douradas.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Viajei para a Terra Santa com a Alliance Viagens em 2016, realizando um sonho muito antigo de conhecer os locais em que Jesus realizou os milagres, transformando a vida das pessoas e trazendo a Boa Notícia de um mundo melhor. Uma viagem magnífica!",
    author: "Maria de Lourdes",
    trip: "Terra Santa, 2016",
  },
  {
    id: 2,
    text: "A peregrinação a Fátima foi uma experiência transformadora. A organização impecável da Alliance Viagens nos permitiu viver cada momento com intensidade e devoção. O padre que nos acompanhou tornou tudo ainda mais especial.",
    author: "José Carlos",
    trip: "Portugal, 2019",
  },
  {
    id: 3,
    text: "Conhecer o Vaticano e as igrejas de Roma com a Alliance foi um sonho realizado. Cada detalhe foi pensado com carinho, desde os hotéis até os momentos de oração nos locais sagrados. Recomendo de olhos fechados!",
    author: "Ana Paula",
    trip: "Itália, 2022",
  },
  {
    id: 4,
    text: "As cidades históricas de Minas Gerais me encantaram profundamente. A riqueza do barroco, as igrejas centenárias e a espiritualidade que emana de cada lugar. A Alliance proporcionou uma viagem inesquecível.",
    author: "Roberto Mendes",
    trip: "Minas Gerais, 2023",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="depoimentos"
      className="py-24 lg:py-32 bg-[#1A2744] relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[#C9A84C] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#C9A84C] text-sm uppercase tracking-[0.3em] font-semibold mb-3"
          >
            O Que Dizem Nossos Peregrinos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-white text-3xl lg:text-5xl font-bold"
          >
            Depoimentos
          </motion.h2>
        </div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Quote icon */}
            <Quote
              size={80}
              className="text-[#C9A84C]/15 absolute -top-6 left-0 lg:-left-8"
            />

            {/* Testimonial content */}
            <div className="min-h-[250px] flex items-center">
              <div className="w-full text-center px-4 lg:px-12">
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-serif text-white/90 text-xl lg:text-2xl italic leading-relaxed mb-8"
                >
                  "{testimonials[current].text}"
                </motion.p>

                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-8 h-px bg-[#C9A84C]/50" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A84C]" />
                    <div className="w-8 h-px bg-[#C9A84C]/50" />
                  </div>
                  <p className="text-[#C9A84C] font-bold text-base uppercase tracking-wider">
                    {testimonials[current].author}
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    {testimonials[current].trip}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 border border-[#C9A84C]/30 hover:border-[#C9A84C] flex items-center justify-center text-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/10"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`transition-all duration-300 ${
                      index === current
                        ? "w-8 h-2 bg-[#C9A84C]"
                        : "w-2 h-2 bg-[#C9A84C]/30 hover:bg-[#C9A84C]/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 border border-[#C9A84C]/30 hover:border-[#C9A84C] flex items-center justify-center text-[#C9A84C]/60 hover:text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/10"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
