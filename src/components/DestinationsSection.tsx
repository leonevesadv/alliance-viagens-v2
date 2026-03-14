/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção de destinos em destaque com galeria visual imersiva.
 * Layout assimétrico com imagens de diferentes tamanhos.
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    name: "Vaticano",
    country: "Itália",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/hero-banner-h2i4xp7jVYTbdB3fLvku7E.webp",
    size: "large",
  },
  {
    name: "Fátima",
    country: "Portugal",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/portugal-card-kn2nVMivqwXojoiZTrpykF.webp",
    size: "small",
  },
  {
    name: "Aparecida",
    country: "Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/aparecida-card-e5F3zTTGtadK5sBYNvCUvE.webp",
    size: "small",
  },
  {
    name: "Florença",
    country: "Itália",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/italia-card-CCUsqzvv5WZQ96d9Fx4gVB.webp",
    size: "medium",
  },
  {
    name: "Ouro Preto",
    country: "Brasil",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663067633553/nvCpDSDdTSWSwXCQ2nUvXf/minas-card-QYfuKmJMnNHHvkDjyBUzNF.webp",
    size: "medium",
  },
];

export default function DestinationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
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
            Destinos Sagrados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-[#1A2744] text-3xl lg:text-5xl font-bold mb-4"
          >
            Onde a Fé nos Leva
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#1A2744]/60 text-lg max-w-2xl mx-auto"
          >
            Conheça alguns dos destinos mais venerados do Cristianismo que fazem parte dos nossos roteiros.
          </motion.p>
        </div>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[220px]">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 3
                  ? "col-span-2 lg:col-span-1 row-span-1"
                  : index === 4
                  ? "col-span-2 lg:col-span-1 row-span-1"
                  : "col-span-1 row-span-1"
              }`}
            >
              <img
                src={dest.image}
                alt={`${dest.name}, ${dest.country}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2744]/80 via-[#1A2744]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <p className="text-[#C9A84C] text-xs uppercase tracking-wider font-semibold mb-1">
                  {dest.country}
                </p>
                <h3 className={`font-serif text-white font-bold ${
                  index === 0 ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"
                }`}>
                  {dest.name}
                </h3>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
