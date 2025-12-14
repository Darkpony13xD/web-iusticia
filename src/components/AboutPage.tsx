import React from 'react';
import { Reveal } from './ui/Reveal';
import { Scale, Shield, Award, Gavel, BookOpen, Users } from 'lucide-react';
import iusticia from "../assets/iusticia.png";
import local from "../assets/local.jpeg";


const AboutPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section of About Page */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50 z-0"></div>
             <div
  className="absolute inset-0 opacity-25 z-0 pointer-events-none"
  style={{
    backgroundImage: `url(${iusticia})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 60%",     // súbelo/bájalo: 60% / 70% / 80%
    backgroundSize: "clamp(260px, 55vw, 720px)", // más chico/grande: 45vw o 800px
  }}
/>
<div className="absolute inset-0 bg-black/55 z-0 pointer-events-none" />



                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Nuestra <span className="text-amber-500">Historia</span></h1>
                        <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Más de dos años definiendo el estándar de la excelencia jurídica.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* The Story Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-amber-500/20 rounded-2xl blur-lg"></div>
                                <img 
                                    src={local}
                                    alt="Oficina IUSTICIA" 
                                    className="relative rounded-2xl shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </Reveal>
                        
                        <div className="space-y-6">
                            <Reveal delay={0.2}>
                                <h3 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2">Fundación y Trayectoria de IUSTICIA</h3>
                                <h2 className="text-4xl font-bold text-white mb-6">Visión Estratégica y Vanguardista</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    <span className="text-white font-semibold">IUSTICIA</span> se estableció en el año 2023, una iniciativa conjunta liderada por el Maestrante Luis Ernesto Ramírez y el Licenciado Luis Antonio Ramírez.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    La firma nació con una visión fundamental: redefinir la práctica legal, fusionando la rigurosidad académica que exige el ejercicio del derecho con la implementación de estrategias de defensa modernas y proactivas.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

         {/* Values Grid */}
<section className="py-20 bg-[#050505] relative">
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px]" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <Reveal width="100%">
        <h2 className="text-4xl font-bold text-white mb-4">Filosofía Jurídica</h2>
        <p className="text-gray-400">Los pilares que sostienen cada caso que aceptamos.</p>
      </Reveal>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { icon: Scale, title: "Justicia Imparcial", desc: "Buscamos la verdad y la equidad en cada procedimiento, garantizando el debido proceso." },
        { icon: Shield, title: "Protección Total", desc: "Blindamos a nuestros clientes ante cualquier riesgo legal con estrategias preventivas." },
        { icon: Award, title: "Excelencia", desc: "No aceptamos la mediocridad. Cada documento y argumento es revisado meticulosamente." },
        { icon: Gavel, title: "Tenacidad", desc: "Luchamos incansablemente. Cuando otros se rinden, nosotros encontramos un camino." },
        { icon: BookOpen, title: "Conocimiento", desc: "Actualización constante en un marco legal que cambia día a día." },
        { icon: Users, title: "Empatía", desc: "Entendemos que detrás de cada caso hay personas, familias y futuros en juego." }
      ].map((item, idx) => (
        <div key={idx} className="w-full">
          <Reveal delay={idx * 0.1}>
            {/* ✅ ALTURA FIJA = todas iguales sí o sí */}
            <div className="w-full h-[250px] md:h-[260px] bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-amber-500/50 hover:bg-gray-900 transition-all duration-300 group flex flex-col">
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                <item.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>

              <p className="text-gray-400 flex-grow">{item.desc}</p>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  </div>
</section>




             {/* CTA Section */}
             <section className="py-24 bg-gradient-to-r from-amber-900/20 to-black border-t border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Listo para ser representado por los mejores?</h2>
                        <a 
                            href="/#contacto" 
                            className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                        >
                            Contáctanos Hoy
                        </a>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;