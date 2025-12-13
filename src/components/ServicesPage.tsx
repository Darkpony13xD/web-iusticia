import React from 'react';
import { Reveal } from './ui/Reveal';
import { Scale, Building2, Shield, Users, Home, Briefcase, FileText, Globe, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
    {
        id: 1,
        title: 'Derecho Civil',
        description: 'Asesoría integral en contratos, obligaciones, responsabilidad civil, herencias y sucesiones. Resolvemos conflictos entre particulares con eficacia.',
        icon: Scale,
        features: ['Contratos y Obligaciones', 'Sucesiones y Testamentos', 'Responsabilidad Civil']
    },
    {
        id: 2,
        title: 'Derecho Corporativo',
        description: 'Acompañamiento a empresas desde su constitución. Fusiones, adquisiciones, compliance y gobierno corporativo para garantizar el éxito empresarial.',
        icon: Building2,
        features: ['Constitución de Sociedades', 'Fusiones y Adquisiciones', 'Compliance Legal']
    },
    {
        id: 3,
        title: 'Derecho Penal',
        description: 'Defensa técnica especializada en procesos penales. Estrategias de defensa y acusación con absoluta confidencialidad y rigor jurídico.',
        icon: Shield,
        features: ['Defensa Penal', 'Delitos Económicos', 'Compliance Penal']
    },
    {
        id: 4,
        title: 'Derecho Familiar',
        description: 'Gestión sensible y profesional de divorcios, custodias, pensiones alimenticias y adopciones, priorizando siempre el bienestar familiar.',
        icon: Users,
        features: ['Divorcios y Separaciones', 'Custodia de Menores', 'Planificación Patrimonial']
    },
    {
        id: 5,
        title: 'Derecho Inmobiliario',
        description: 'Seguridad jurídica en operaciones de compraventa, arrendamientos, desarrollo inmobiliario y regularización de propiedades.',
        icon: Home,
        features: ['Compraventa de Inmuebles', 'Arrendamientos', 'Desarrollo Urbano']
    },
    {
        id: 6,
        title: 'Derecho Laboral',
        description: 'Defensa de derechos laborales tanto para empleadores como empleados. Despidos, negociaciones colectivas y seguridad social.',
        icon: Briefcase,
        features: ['Litigio Laboral', 'Contratación', 'Sindicatos']
    },
    {
        id: 7,
        title: 'Propiedad Intelectual',
        description: 'Protección de marcas, patentes y derechos de autor. Resguardamos los activos intangibles de su empresa o creación personal.',
        icon: FileText,
        features: ['Registro de Marcas', 'Patentes', 'Derechos de Autor']
    },
    {
        id: 8,
        title: 'Derecho Internacional',
        description: 'Asesoría en transacciones transfronterizas, comercio exterior y resolución de conflictos bajo normativas internacionales.',
        icon: Globe,
        features: ['Comercio Exterior', 'Contratos Internacionales', 'Arbitraje Internacional']
    },
    {
        id: 9,
        title: 'Mediación y Arbitraje',
        description: 'Métodos alternativos de resolución de conflictos para evitar litigios largos y costosos, buscando acuerdos beneficiosos.',
        icon: HeartHandshake,
        features: ['Negociación', 'Mediación Privada', 'Arbitraje Comercial']
    }
];

const processSteps = [
    { number: "01", title: "Consulta Inicial", desc: "Evaluación detallada de su situación legal para identificar riesgos y oportunidades." },
    { number: "02", title: "Estrategia", desc: "Diseño de una hoja de ruta jurídica personalizada y agresiva enfocada en resultados." },
    { number: "03", title: "Ejecución", desc: "Implementación rigurosa de las acciones legales con actualizaciones constantes." },
    { number: "04", title: "Resolución", desc: "Cierre del caso buscando siempre el máximo beneficio para nuestros clientes." }
];

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Nuestras Áreas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200">Práctica</span></h1>
                        <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Soluciones jurídicas integrales respaldadas por la experiencia de especialistas en cada rama del derecho.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <Reveal key={service.id} delay={index * 0.05}>
                                <div className="group h-full bg-gray-900 border border-gray-800 p-8 rounded-3xl hover:border-amber-500/50 hover:bg-gray-800/50 transition-all duration-300 flex flex-col">
                                    <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-lg">
                                        <service.icon size={28} />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{service.description}</p>
                                    
                                    <ul className="space-y-3 pt-6 border-t border-gray-800">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-300">
                                                <CheckCircle2 size={16} className="text-amber-500 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <Reveal width="100%">
                            <h2 className="text-4xl font-bold text-white mb-4">Nuestro Metodología</h2>
                            <p className="text-gray-400">Un enfoque estructurado para garantizar el éxito de su caso.</p>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <div className="relative p-6">
                                    <div className="text-6xl font-black text-gray-800 mb-4 opacity-50 select-none absolute top-0 left-0 -translate-x-2 -translate-y-2">{step.number}</div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-3 mt-8">{step.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 right-0 w-8 h-[1px] bg-gray-800 translate-x-4"></div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">¿Necesita asesoría legal inmediata?</h2>
                        <p className="text-amber-100">Nuestros expertos están listos para analizar su caso.</p>
                    </div>
                    <Link 
                        to="/#contacto"
                        className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-xl flex items-center group"
                    >
                        Agendar Consulta
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;