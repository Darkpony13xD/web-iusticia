import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        id: 1,
        name: "Dr. Alejandro Vega",
        role: "Socio Fundador",
        specialty: "Derecho Corporativo",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Dra. Isabela Cruz",
        role: "Socia Senior",
        specialty: "Derecho Penal",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Lic. Martín Solares",
        role: "Asociado",
        specialty: "Derecho Civil",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Lic. Carmen Ortega",
        role: "Asociada",
        specialty: "Derecho Familiar",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
];

const Team: React.FC = () => {
    return (
        <section id="equipo" className="py-24 bg-black relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-800/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">Equipo</span></h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Contamos con un equipo multidisciplinario de abogados de élite, seleccionados por su excelencia académica y trayectoria profesional.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {teamMembers.map((member, index) => (
                        <Reveal key={member.id} delay={index * 0.1}>
                            <motion.div 
                                whileHover={{ y: -10 }}
                                className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                                    
                                    {/* Social Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4 z-20">
                                        <button className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                                            <Linkedin size={20} />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                                            <Mail size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 text-center relative z-10 bg-gray-900 border-t border-gray-800">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-amber-500 font-medium text-sm uppercase tracking-wider mb-2">{member.role}</p>
                                    <p className="text-gray-500 text-sm">{member.specialty}</p>
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>

                <Reveal width="100%">
                    <div className="text-center">
                        <Link 
                            to="/equipo" 
                            className="inline-flex items-center gap-2 px-8 py-4 border border-amber-600 text-amber-500 font-bold rounded-full hover:bg-amber-600 hover:text-black transition-all duration-300"
                        >
                            Conoce a Todos los Socios <ArrowRight size={20} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Team;