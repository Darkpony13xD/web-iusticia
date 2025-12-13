import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Clock, HelpCircle, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import React, { useState } from 'react';

import { Reveal } from './ui/Reveal';

const faqs = [
    {
        question: "¿La primera consulta tiene costo?",
        answer: "No, en IUSTICIA ofrecemos una primera evaluación de caso totalmente gratuita para determinar la viabilidad y estrategia a seguir."
    },
    {
        question: "¿Qué documentos necesito para la primera cita?",
        answer: "Depende del caso, pero generalmente recomendamos traer identificaciones oficiales y cualquier documentación legal previa relacionada con su asunto."
    },
    {
        question: "¿Atienden casos fuera de la ciudad?",
        answer: "Sí, contamos con red de colaboradores a nivel nacional y capacidad para litigar en tribunales federales en todo el país."
    },
    {
        question: "¿Cuáles son sus formas de pago?",
        answer: "Manejamos esquemas flexibles: cuota fija, pago por hora o cuota litis (porcentaje del resultado), dependiendo de la naturaleza del caso."
    }
];

const ContactPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // WhatsApp Configuration
        const phoneNumber = "5215555555555"; // Reemplazar con el número real del despacho (código país + número)
        
        const text = `
*NUEVA CONSULTA - SITIO WEB*
---------------------------
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Área de Interés:* ${formData.interest}
---------------------------
*Mensaje:*
${formData.message}
        `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Reveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Contáctanos</h1>
                        <div className="h-1 w-32 bg-amber-500 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Estamos listos para escuchar su caso. La confidencialidad y la respuesta inmediata son nuestra prioridad.
                        </p>
                    </Reveal>
                </div>
            </section>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                    
                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-12">
                        <Reveal>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-amber-500 mb-4">
                                        <Phone size={24} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">Teléfono</h3>
                                    <p className="text-gray-400">+52 (55) 1234-5678</p>
                                    <p className="text-gray-500 text-sm mt-2">Atención 24/7 para emergencias penales.</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-amber-500 mb-4">
                                        <Mail size={24} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-400">contacto@iusticia.com</p>
                                    <p className="text-gray-500 text-sm mt-2">Respuesta en menos de 24 horas.</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-amber-500 mb-4">
                                        <MapPin size={24} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">Oficina Principal</h3>
                                    <p className="text-gray-400">Av. Reforma 222, Piso 10</p>
                                    <p className="text-gray-400">Ciudad de México, CDMX</p>
                                </div>
                                <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-colors">
                                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-amber-500 mb-4">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1">Horario</h3>
                                    <p className="text-gray-400">Lun - Vie: 9:00 - 19:00</p>
                                    <p className="text-gray-400">Sáb: Cita previa</p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Map Section */}
                        <Reveal delay={0.2}>
                            <div className="w-full h-80 bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 relative group">
                                {/* Google Maps Embed Placeholder - Using dark mode filter */}
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5363065876304!2d-99.16520362409745!3d19.43260174068595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cb1594955b%3A0x6d2319206775f0a0!2sPaseo%20de%20la%20Reforma%20222%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1698765432100!5m2!1sen!2smx" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                                    allowFullScreen 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border-4 border-gray-800/50 rounded-3xl"></div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Form */}
                    <Reveal delay={0.1}>
                        <div className="bg-[#0f0f0f] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                            
                            <h2 className="text-3xl font-bold text-white mb-2">Envíenos un Mensaje</h2>
                            <p className="text-gray-400 mb-8">Complete el formulario y le responderemos vía WhatsApp inmediatamente.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Nombre Completo</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none" 
                                            placeholder="Su nombre" 
                                            required 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Teléfono</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none" 
                                            placeholder="Su teléfono" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Correo Electrónico</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none" 
                                        placeholder="correo@ejemplo.com" 
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Área de Interés</label>
                                    <select 
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none appearance-none" 
                                        required
                                    >
                                        <option value="" className="text-gray-500">Seleccione una opción</option>
                                        <option value="Derecho Civil">Derecho Civil</option>
                                        <option value="Derecho Corporativo">Derecho Corporativo</option>
                                        <option value="Derecho Penal">Derecho Penal</option>
                                        <option value="Derecho Familiar">Derecho Familiar</option>
                                        <option value="Otro">Otro Asunto</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Mensaje</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={5} 
                                        className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none outline-none" 
                                        placeholder="Describa brevemente cómo podemos ayudarle..." 
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Enviar vía WhatsApp
                                </button>
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Al enviar este formulario acepta nuestra política de privacidad.
                                </p>
                            </form>
                        </div>
                    </Reveal>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <Reveal width="100%">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                                <HelpCircle className="text-amber-500" /> Preguntas Frecuentes
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                                    <button 
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-800/50 transition-colors"
                                    >
                                        <span className="font-semibold text-white">{faq.question}</span>
                                        {openFaq === index ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-gray-500" />
                                    }
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-gray-400 border-t border-gray-800 pt-4 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;