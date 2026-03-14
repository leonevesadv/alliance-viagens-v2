/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção Sobre Nós com layout assimétrico: imagem à esquerda, texto à direita.
 * Ícones de diferenciais com moldura dourada.
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cross, Users, Globe, BookOpen } from "lucide-react";

const features = [
  {
    icon: Cross,
    title: "Diretor Espiritual",
    description: "Todos os grupos contam com a presença de um padre para orientação espiritual durante a viagem.",
  },
  {
    icon: Users,
    title: "Grupos Organizados",
    description: "Viagens em grupo com guia turístico especializado e atendimento personalizado.",
  },
  {
    icon: Globe,
    title: "Destinos Sagrados",
    description: "Roteiros cuidadosamente planejados para os locais mais venerados do Cristianismo.",
  },
  {
    icon: BookOpen,
    title: "Cultura e Lazer",
    description: "Além da fé, proporcionamos experiências culturais enriquecedoras em cada destino.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-[#F5F0E8]" ref={ref}>
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
            Quem Somos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-[#1A2744] text-3xl lg:text-5xl font-bold"
          >
            Sobre a Alliance Viagens
          </motion.h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80"
                alt="Peregrinos em viagem religiosa"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C9A84C] -z-10" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -left-4 lg:left-8 bg-[#1A2744] text-white p-6 shadow-xl">
              <span className="font-serif text-[#C9A84C] text-4xl font-bold block">12+</span>
              <span className="text-white/80 text-sm uppercase tracking-wider">Anos de<br />Experiência</span>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-[#1A2744]/80 text-lg leading-relaxed mb-6">
              Somos uma agência de viagens e turismo religioso com mais de 12 anos de existência,
              que visa proporcionar <strong className="text-[#1A2744]">lazer, cultura e reafirmação da fé cristã-católica</strong>,
              formando grupos com diretor espiritual (padre) e guia turístico.
            </p>
            <p className="text-[#1A2744]/80 text-lg leading-relaxed mb-8">
              Nosso compromisso é levar você aos locais mais venerados do Cristianismo
              no Brasil e no mundo, proporcionando uma experiência transformadora que
              une espiritualidade, história e cultura em cada roteiro cuidadosamente planejado.
            </p>
            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-[#C9A84C]/30" />
              <div className="w-2 h-2 rotate-45 bg-[#C9A84C]" />
              <div className="h-px flex-1 bg-[#C9A84C]/30" />
            </div>
            <p className="font-serif text-[#1A2744] text-xl italic leading-relaxed">
              "Venha realizar a viagem dos seus sonhos com a Alliance Viagens!"
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              className="bg-white p-6 border border-[#C9A84C]/20 hover:border-[#C9A84C]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#C9A84C]/5"
            >
              <div className="w-12 h-12 border-2 border-[#C9A84C]/40 group-hover:border-[#C9A84C] flex items-center justify-center mb-4 transition-colors">
                <feature.icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-serif text-[#1A2744] text-lg font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#1A2744]/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
