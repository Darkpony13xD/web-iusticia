import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import React, { useState } from 'react';

import { Reveal } from './ui/Reveal';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // WhatsApp Configuration
        const phoneNumber = "5215658491918"; 
        
        const text = `
*CONSULTA RÁPIDA - HOME*
---------------------------
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Área de Interés:* ${formData.area}
---------------------------
*Mensaje:*
${formData.message}
        `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contacto" className="py-24 bg-black relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contáctanos</h2>
                        <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Estamos listos para defender tus derechos. Agenda tu consulta gratuita hoy.
                        </p>
                    </Reveal>
                </div>

                <Reveal width="100%">
                    <div className="max-w-6xl mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col md:flex-row">
                        
                        {/* Left Side: Contact Info */}
                        <div className="md:w-5/12 bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-12 relative overflow-hidden">
                             {/* Decorative patterns */}
                             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                             <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -ml-16 -mb-16"></div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Hablemos</h3>
                                    <p className="text-gray-400 mb-10">Estamos aquí para ayudarte.</p>
                                    
                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-amber-500 border border-gray-700/50">
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-white text-lg">Visítanos</p>
                                                <p className="text-gray-400">Av. Reforma 222, Piso 10<br />CDMX, México</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-amber-500 border border-gray-700/50">
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-white text-lg">Llámanos</p>
                                                <p className="text-gray-400">+52 (55) 1234 5678</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-amber-500 border border-gray-700/50">
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-white text-lg">Escríbenos</p>
                                                <p className="text-gray-400">contacto@iusticia.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 md:mt-0">
                                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                                        <Clock className="w-4 h-4" />
                                        <span>Lunes a Viernes: 9:00 - 19:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="md:w-7/12 bg-black/50 p-10 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Nombre</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange} 
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" 
                                            placeholder="Juan Pérez" 
                                            required 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                                        <input 
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange} 
                                            className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" 
                                            placeholder="juan@ejemplo.com" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Área de Interés</label>
                                    <select 
                                        name="area"
                                        value={formData.area}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all" 
                                        required
                                    >
                                        <option value="" className="bg-gray-900">Seleccione el tipo de consulta</option>
                                        <option value="Civil" className="bg-gray-900">Derecho Civil</option>
                                        <option value="Corporativo" className="bg-gray-900">Derecho Corporativo</option>
                                        <option value="Penal" className="bg-gray-900">Derecho Penal</option>
                                        <option value="Familiar" className="bg-gray-900">Derecho Familiar</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Mensaje</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4} 
                                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none" 
                                        placeholder="Describa brevemente su situación legal..." 
                                        required
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" /> Enviar Consulta por WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;