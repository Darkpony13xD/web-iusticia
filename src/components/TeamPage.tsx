import React from 'react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import LuisImg from "../assets/luis_1.jpeg";
import IUS from "../assets/iusticia.png";
import KAT from "../assets/katya.jpeg";

const partners = [
  {
    id: 1,
    name: "Maestrante Ernesto Ramírez",
    role: "Socio Fundador",
    specialty: "Derecho Penal",
    image: IUS,
    bio: "",
    credentials: [
      "Licenciatura en Derecho",
      "Maestrante en Procesal Penal",
      "Especialidad Juicios Orales",
      "Con estudios en Especialidad Justicia Penal para Adolescentes",
      "Pasante en Licenciatura en Administacion",
      "Diversos diplomados en el nuevo codigo civil y familiar",
      "Diplomado en Derechos Humanos, Amparo, Sistema Anticorrupción,entre otros",
    ],
    // ✅ CAMBIA ESTE CORREO
    email: "ernestoramirez@iusticia.com.mx",
  },
  {
    id: 2,
    name: "Lic. Luis Ramirez",
    role: "Socio Fundador",
    specialty: "Lic. Ingenería en Sistemas",
    image: LuisImg,
    bio: "",
    credentials: [
      "Maestria en Mercadotecnia",
      "Maestria en Gestion de Talento Humano",
      ""
    ],
    // ✅ CAMBIA ESTE CORREO
    email: "luisramirez@iusticia.com.mx",
  }
];

const associates = [
  {
    id: 3,
    name: "Lic. Katya Falcon",
    role: "Asociada",
    specialty: "Derecho Familiar",
    image: KAT,
    email: "contacto@iusticia.com.mx",
  },
  {
    id: 4,
    name: "Lic. Consuelo Aguilar",
    role: "Abogada",
    specialty: "Justicia Penal para Adoloscentes",
    image: IUS,
    email: "contacto@iusticia.com.mx",
  },
  {
    id: 5,
    name: "",
    role: "",
    specialty: "",
    image: IUS,
    email: "contacto@iusticia.com.mx",
  },
  {
    id: 6,
    name: "",
    role: "",
    specialty: "",
    image: IUS,
    email: "contacto@iusticia.com.mx",
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
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Nuestros <span className="text-amber-500">Expertos</span>
            </h1>
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
            <h2 className="text-3xl font-bold text-white mb-16 border-l-4 border-amber-500 pl-4">
              Socios Directores
            </h2>
          </Reveal>

          <div className="space-y-24">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
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

                    {/* ✅ SOLO CORREO (sin LinkedIn) */}
                    <div className="flex gap-4 mt-8 flex-wrap">
                      <a
                        href={`mailto:${partner.email}?subject=Consulta%20-%20IUSTICIA&body=Hola%20${encodeURIComponent(partner.name)}%2C%0D%0A%0D%0AMe%20gustar%C3%ADa%20agendar%20una%20consulta.%0D%0A%0D%0AGracias.`}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-amber-500 transition-colors"
                      >
                        <Mail size={18} /> Escribir correo
                      </a>

                      <Link
                        to="/contacto"
                        className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full text-white hover:border-amber-500 hover:text-amber-500 transition-colors font-bold"
                      >
                        Ir a Contacto <ArrowRight size={18} />
                      </Link>
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

                    {/* ✅ SOLO CORREO (sin LinkedIn) */}
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <a
                        href={`mailto:${member.email}?subject=Consulta%20-%20IUSTICIA&body=Hola%20${encodeURIComponent(member.name)}%2C%0D%0A%0D%0AMe%20gustar%C3%ADa%20agendar%20una%20consulta.%0D%0A%0D%0AGracias.`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 text-gray-200 hover:border-amber-500 hover:text-amber-500 transition-colors"
                        aria-label={`Enviar correo a ${member.name}`}
                        title={`Enviar correo a ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CONTACT CTA (reemplaza reclutamiento) */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-white mb-4">¿Necesitas asesoría legal?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Escríbenos y cuéntanos tu caso. Te orientamos y te ayudamos a dar el siguiente paso con seguridad.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-white font-bold rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Contáctanos <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
