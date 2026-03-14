/*
 * Design: "Sacralidade Contemporânea" — Neo-Classicismo Digital
 * Seção de contato com formulário elegante à esquerda e informações à direita.
 * Inputs com bordas douradas no focus, botão com estilo premium.
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: "", cidade: "", email: "", telefone: "", mensagem: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#F5F0E8]" ref={ref}>
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
            Fale Conosco
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-[#1A2744] text-3xl lg:text-5xl font-bold mb-4"
          >
            Entre em Contato
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#1A2744]/60 text-lg max-w-2xl mx-auto"
          >
            Tire suas dúvidas, solicite informações sobre nossos roteiros
            ou faça sua reserva. Estamos prontos para ajudá-lo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10 shadow-lg border border-[#C9A84C]/10">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F0E8]/50 border border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 outline-none transition-all text-[#1A2744] placeholder:text-[#1A2744]/30"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-2">
                    Cidade
                  </label>
                  <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F0E8]/50 border border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 outline-none transition-all text-[#1A2744] placeholder:text-[#1A2744]/30"
                    placeholder="Sua cidade"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F0E8]/50 border border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 outline-none transition-all text-[#1A2744] placeholder:text-[#1A2744]/30"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F5F0E8]/50 border border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 outline-none transition-all text-[#1A2744] placeholder:text-[#1A2744]/30"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F5F0E8]/50 border border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 outline-none transition-all text-[#1A2744] placeholder:text-[#1A2744]/30 resize-none"
                  placeholder="Conte-nos sobre o roteiro de seu interesse ou tire suas dúvidas..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1A2744] hover:bg-[#243556] text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Enviado com Sucesso
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-[#1A2744] text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>
                <p className="text-[#1A2744]/60 leading-relaxed mb-8">
                  Estamos à disposição para ajudá-lo a planejar sua próxima
                  peregrinação. Entre em contato por qualquer um dos canais abaixo.
                </p>
              </div>

              <ContactItem
                icon={Mail}
                label="Email"
                value="contato@allianceviagens.com"
                href="mailto:contato@allianceviagens.com"
              />
              <ContactItem
                icon={Phone}
                label="WhatsApp"
                value="Clique para conversar"
                href="https://wa.me/5511999999999"
              />
              <ContactItem
                icon={MapPin}
                label="Localização"
                value="São Paulo, SP - Brasil"
              />

              {/* Social */}
              <div className="pt-6 border-t border-[#C9A84C]/20">
                <p className="text-[#1A2744] text-sm font-semibold uppercase tracking-wider mb-4">
                  Redes Sociais
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/allianceviagens/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#C9A84C]/30 hover:border-[#C9A84C] flex items-center justify-center text-[#1A2744]/60 hover:text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/5"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/allianceviagens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#C9A84C]/30 hover:border-[#C9A84C] flex items-center justify-center text-[#1A2744]/60 hover:text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C]/5"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-12 h-12 border border-[#C9A84C]/30 group-hover:border-[#C9A84C] flex items-center justify-center shrink-0 transition-colors">
        <Icon size={20} className="text-[#C9A84C]" />
      </div>
      <div>
        <p className="text-[#1A2744]/50 text-xs uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-[#1A2744] font-semibold group-hover:text-[#8B7332] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
