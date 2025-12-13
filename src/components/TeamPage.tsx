import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';
import { Linkedin, Mail, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
    {
        id: 1,
        name: "Dr. Alejandro Vega",
        role: "Socio Fundador",
        specialty: "Derecho Corporativo & Fusiones",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Con más de 25 años de experiencia, el Dr. Vega ha liderado las fusiones corporativas más importantes de la última década. Su visión estratégica y conocimiento profundo del marco legal empresarial lo convierten en un referente nacional en derecho mercantil y gobierno corporativo.",
        credentials: [
            "Doctorado en Derecho, Universidad Nacional",
            "Maestría en Finanzas, Harvard Law School",
            "Presidente de la Barra de Abogados (2018-2020)"
        ]
    },
    {
        id: 2,
        name: "Dra. Isabela Cruz",
        role: "Socia Senior",
        specialty: "Derecho Penal & Litigio Complejo",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        bio: "Reconocida por su tenacidad implacable en los tribunales, la Dra. Cruz maneja los casos penales más delicados con una precisión quirúrgica. Su tasa de éxito en litigios de alto perfil y defensa de cuello blanco es insuperable en la región.",
        credentials: [
            "Doctorado en Ciencias Penales, Universidad de Salamanca",
            "Especialización en Derechos Humanos",
            "Autora del libro 'La Defensa Moderna'"
        ]
    }
];

const associates = [
    {
        id: 3,
        name: "Lic. Martín Solares",
        role: "Asociado Senior",
        specialty: "Derecho Civil",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Lic. Carmen Ortega",
        role: "Asociada Senior",
        specialty: "Derecho Familiar",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Lic. Roberto Méndez",
        role: "Asociado",
        specialty: "Litigio Mercantil",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Lic. Sofia Yamamoto",
        role: "Asociada",
        specialty: "Propiedad Intelectual",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const TeamPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Nuestros <span className="text-amber-500">Expertos</span></h1>
                        <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Un equipo multidisciplinario de élite, unido por la excelencia académica y la pasión por la justicia.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Partners Section - Detailed */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-white mb-16 border-l-4 border-amber-500 pl-4">Socios Directores</h2>
                    </Reveal>

                    <div className="space-y-24">
                        {partners.map((partner, index) => (
                            <div key={partner.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                                <div className="w-full md:w-1/2">
                                    <Reveal>
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-amber-500 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-20"></div>
                                            <img 
                                                src={partner.image} 
                                                alt={partner.name} 
                                                className="relative w-full rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
                                            />
                                        </div>
                                    </Reveal>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Reveal delay={0.2}>
                                        <h3 className="text-4xl font-black text-white mb-2">{partner.name}</h3>
                                        <p className="text-amber-500 text-lg font-bold tracking-widest uppercase mb-6">{partner.role}</p>
                                        <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l border-gray-800 pl-6">
                                            {partner.bio}
                                        </p>
                                        
                                        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                                            <h4 className="flex items-center text-white font-bold mb-4">
                                                <Award className="text-amber-500 mr-2" size={20} /> Credenciales Destacadas
                                            </h4>
                                            <ul className="space-y-2">
                                                {partner.credentials.map((cred, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-400 text-sm">
                                                        <GraduationCap className="mr-2 mt-1 flex-shrink-0 text-gray-600" size={16} />
                                                        {cred}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-amber-500 transition-colors">
                                                <Mail size={18} /> Contactar
                                            </button>
                                            <button className="p-3 border border-gray-700 rounded-full text-white hover:border-amber-500 hover:text-amber-500 transition-colors">
                                                <Linkedin size={20} />
                                            </button>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Associates Grid */}
            <section className="py-24 bg-[#050505] border-t border-gray-900">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="flex justify-between items-end mb-12">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-amber-500 pl-4">Abogados Asociados</h2>
                            <p className="text-gray-500 hidden md:block">Excelencia en cada área de práctica</p>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {associates.map((member, index) => (
                            <Reveal key={member.id} delay={index * 0.1}>
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300"
                                >
                                    <div className="aspect-[3/4] relative overflow-hidden">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                                    </div>

                                    <div className="p-6 text-center relative z-10 bg-gray-900 -mt-20 pt-20">
                                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-amber-600 font-medium text-xs uppercase tracking-wider mb-2">{member.role}</p>
                                        <p className="text-gray-500 text-sm mb-4">{member.specialty}</p>
                                        <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <a href="#" className="text-gray-400 hover:text-amber-500"><Linkedin size={18} /></a>
                                            <a href="#" className="text-gray-400 hover:text-amber-500"><Mail size={18} /></a>
                                        </div>
                                    </div>
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruitment CTA */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-3xl font-bold text-white mb-4">¿Buscas Unirte a Nuestro Equipo?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Siempre estamos en búsqueda de talento excepcional. Si compartes nuestra pasión por la excelencia legal, queremos conocerte.
                        </p>
                        <Link 
                            to="/#contacto" 
                            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white font-bold rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                            Ver Vacantes <ArrowRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;