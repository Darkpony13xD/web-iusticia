import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const [particles, setParticles] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black">
            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ y: '100vh', opacity: 0 }}
                        animate={{ y: '-10vh', opacity: [0, 1, 0] }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear"
                        }}
                        style={{ left: `${p.left}%` }}
                        className="absolute w-1 h-1 bg-amber-600 rounded-full"
                    />
                ))}
            </div>

            {/* Floating Geometric Elements */}
            <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-24 h-24 border border-amber-500/20 rounded-full hidden md:block"
            />
            <motion.div 
                animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-10 w-40 h-40 border border-amber-500/10 rounded-full hidden md:block"
            />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-amber-500 to-amber-200 bg-clip-text text-transparent drop-shadow-lg"
                >
                    IUSTICIA
                </motion.h1>
                
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 w-32 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
                />

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl md:text-3xl text-gray-300 font-light tracking-wide mb-6"
                >
                    SOLUCIONES LEGALES, RESULTADOS REALES.
                </motion.p>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
                >
                    Más de 5 años de experiencia brindando soluciones legales integrales con un equipo de profesionales altamente calificados.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <Link 
                        to="/contacto"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold rounded-full shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] transition-all hover:scale-105"
                    >
                        Consulta
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;