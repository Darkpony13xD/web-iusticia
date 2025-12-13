import { Quote, Star } from 'lucide-react';

import React from 'react';
import { Reveal } from './ui/Reveal';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        id: 1,
        content: "Excelente servicio y profesionalismo. El equipo de IUSTICIA resolvió mi caso de manera eficiente y siempre mantuvieron comunicación constante.",
        author: "Ana Martínez",
        role: "Cliente Corporativo",
        initial: "A"
    },
    {
        id: 2,
        content: "Confié en IUSTICIA para un asunto corporativo complejo y superaron todas mis expectativas. Altamente recomendados por su ética y resultados.",
        author: "Roberto Fernández",
        role: "Empresario",
        initial: "R"
    },
    {
        id: 3,
        content: "Profesionales comprometidos que luchan por los derechos de sus clientes. Me sentí respaldada y protegida en todo momento del proceso.",
        author: "Laura Sánchez",
        role: "Cliente Familiar",
        initial: "L"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-amber-900/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-800/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Lo Que Dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">Nuestros Clientes</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(217,119,6,0.5)]"></div>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            La confianza es nuestro activo más valioso. Descubre las experiencias de quienes han puesto su defensa legal en nuestras manos.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Reveal key={t.id} delay={i * 0.2}>
                            <div className="h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-3xl relative hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/10">
                                <div className="absolute -top-4 -right-4 bg-gray-900 border border-gray-800 p-3 rounded-full group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300 text-gray-500">
                                    <Quote className="w-6 h-6" />
                                </div>
                                
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>

                                <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">"{t.content}"</p>
                                
                                <div className="flex items-center mt-auto border-t border-gray-800 pt-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg ring-2 ring-black">
                                        {t.initial}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white group-hover:text-amber-500 transition-colors">{t.author}</p>
                                        <p className="text-sm text-gray-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;