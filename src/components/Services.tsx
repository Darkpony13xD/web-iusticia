import { ArrowRight, Briefcase, Building2, Home, Scale, Shield, Users } from 'lucide-react';
import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';
import type { Service } from '../types';
import { motion } from 'framer-motion';

const services: Service[] = [
    { id: 1, title: 'Derecho Civil', description: 'Asesoría integral en contratos, propiedad, herencias y resolución de conflictos civiles.', icon: Scale },
    { id: 2, title: 'Derecho Familiar', description: 'Gestión sensible de divorcios, custodia y pensiones con un enfoque humano.', icon: Users },
    { id: 3, title: 'Derecho Penal', description: 'Defensa penal rigurosa en todas las instancias procesales con absoluta discreción.', icon: Shield },
    { id: 6, title: 'Derecho Laboral', description: 'Protección de intereses en contratos, despidos y negociaciones colectivas.', icon: Briefcase },
    { id: 5, title: 'Inmobiliario', description: 'Seguridad jurídica en compraventa, arrendamientos y desarrollo inmobiliario.', icon: Home },
    { id: 4, title: 'Derecho Mercantil', description: 'Asesoramiento integral para la vida de la empresa, contratos y obligaciones comerciales.', icon: Building2 },
    
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        setRotateX(yPct * -20); // Tilt intensity
        setRotateY(xPct * 20);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
       <motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ transformStyle: "preserve-3d" }}
  animate={{ rotateX, rotateY }}
  className="relative h-full min-h-[340px] bg-gradient-to-br from-gray-900 via-[#0f0f0f] to-black border border-gray-800 p-8 rounded-3xl group cursor-pointer overflow-hidden hover:border-amber-500/30 transition-all duration-300 shadow-xl"
>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mb-8 border border-gray-700/50 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300 shadow-inner">
                    <service.icon className="w-8 h-8 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">{service.title}</h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.description}</p>
                
                <Link to="/servicios" className="flex items-center text-sm font-bold text-amber-600 group-hover:text-amber-400 transition-colors mt-auto">
                    <span className="mr-2">MÁS DETALLES</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-32 bg-[#050505] relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: 'linear-gradient(30deg, #d97706 12%, transparent 12.5%, transparent 87%, #d97706 87.5%, #d97706), linear-gradient(150deg, #d97706 12%, transparent 12.5%, transparent 87%, #d97706 87.5%, #d97706)',
                        backgroundSize: '60px 100px',
                        backgroundPosition: '0 0, 0 0'
                    }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
             </div>

            <div className="container mx-auto px-4 relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Nuestras Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">Práctica</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(217,119,6,0.5)]"></div>
                        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                            Ofrecemos soluciones legales integrales respaldadas por años de experiencia y un profundo conocimiento jurídico.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <Reveal key={service.id} delay={index * 0.1}>
                            <ServiceCard service={service} />
                        </Reveal>
                    ))}
                </div>

                <Reveal width="100%">
                    <div className="text-center">
                        <Link 
                            to="/servicios" 
                            className="inline-flex items-center gap-2 px-8 py-4 border border-amber-600 text-amber-500 font-bold rounded-full hover:bg-amber-600 hover:text-black transition-all duration-300"
                        >
                            Ver Todos los Servicios <ArrowRight size={20} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;