/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção de Roteiros com cards em grid escalonado, molduras douradas
 * e hover effects que revelam informações.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const roteiros = [
  {
    id: 1,
    title: "Aparecida e Campos do Jordão",
    date: "27 a 31 de março de 2026",
    location: "São Paulo, Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/aparecida-card-e5F3zTTGtadK5sBYNvCUvE.webp",
    description: "Uma jornada de fé ao maior santuário mariano do mundo, combinada com o charme da cidade serrana.",
    status: "available",
  },
  {
    id: 2,
    title: "Aparecida e Campos do Jordão",
    date: "22 a 26 de junho de 2026",
    location: "São Paulo, Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/aparecida-card-e5F3zTTGtadK5sBYNvCUvE.webp",
    description: "Segunda edição do roteiro mais procurado, perfeita para quem não conseguiu participar da primeira.",
    status: "available",
  },
  {
    id: 3,
    title: "O Melhor de Portugal",
    date: "29 de junho a 7 de julho de 2026",
    location: "Lisboa, Fátima, Porto",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/portugal-card-kn2nVMivqwXojoiZTrpykF.webp",
    description: "Visite o Santuário de Fátima, explore Lisboa e encante-se com a beleza do Porto nesta peregrinação inesquecível.",
    status: "available",
  },
  {
    id: 4,
    title: "Cidades Históricas de Minas",
    date: "25 a 30 de outubro de 2025",
    location: "Minas Gerais, Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/minas-card-QYfuKmJMnNHHvkDjyBUzNF.webp",
    description: "Descubra o barroco mineiro, as igrejas centenárias e a rica história de Ouro Preto, Tiradentes e Mariana.",
    status: "available",
  },
  {
    id: 5,
    title: "Itália e Portugal",
    date: "27 de outubro a 6 de novembro de 2026",
    location: "Roma, Florença, Fátima",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/italia-card-CCUsqzvv5WZQ96d9Fx4gVB.webp",
    description: "Uma peregrinação grandiosa pelo Vaticano, Florença, Assis e os santuários mais sagrados de Portugal.",
    status: "available",
  },
  {
    id: 6,
    title: "Leste Europeu",
    date: "A definir",
    location: "Europa Oriental",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    description: "Em breve, um roteiro especial pelos tesouros religiosos e culturais do Leste Europeu.",
    status: "coming_soon",
  },
];

export default function RoteirosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="roteiros" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container">
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
            Viagens Católicas e Culturais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-[#1A2744] text-3xl lg:text-5xl font-bold mb-4"
          >
            Nossos Roteiros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#1A2744]/60 text-lg max-w-2xl mx-auto"
          >
            Roteiros cuidadosamente planejados para proporcionar uma experiência
            única de fé, cultura e lazer.
          </motion.p>
        </div>

        {/* Roteiros grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roteiros.map((roteiro, index) => (
            <motion.div
              key={roteiro.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <RoteiroCard roteiro={roteiro} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoteiroCard({ roteiro }: { roteiro: typeof roteiros[0] }) {
  const isComingSoon = roteiro.status === "coming_soon";

  return (
    <div className="group relative bg-white border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#C9A84C]/10 overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={roteiro.image}
          alt={roteiro.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744]/60 via-transparent to-transparent" />

        {/* Status badge */}
        {isComingSoon ? (
          <div className="absolute top-4 right-4 bg-[#1A2744]/90 text-[#C9A84C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Em Breve
          </div>
        ) : (
          <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#1A2744] px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Vagas Abertas
          </div>
        )}

        {/* Location overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-sm">
          <MapPin size={14} className="text-[#C9A84C]" />
          {roteiro.location}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-[#1A2744] text-xl font-bold mb-2 group-hover:text-[#8B7332] transition-colors">
          {roteiro.title}
        </h3>

        <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold mb-3">
          <Calendar size={14} />
          {roteiro.date}
        </div>

        <p className="text-[#1A2744]/60 text-sm leading-relaxed mb-5">
          {roteiro.description}
        </p>

        {/* CTA */}
        <a
          href="#contato"
          className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
            isComingSoon
              ? "text-[#1A2744]/40 cursor-default"
              : "text-[#C9A84C] hover:text-[#8B7332] group-hover:gap-3"
          }`}
        >
          {isComingSoon ? "Aguarde Novidades" : "Saiba Mais"}
          {!isComingSoon && <ArrowRight size={16} />}
        </a>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
