import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  // ✅ Cambia estos links por los tuyos
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/iusticiaedomex',
      Icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '',
      Icon: Instagram,
    },
    {
      name: 'WhatsApp',
      // Ejemplo México: 52 + número. Si no abre bien, prueba con 521 + número.
      href: 'https://wa.me/525658487608',
      Icon: MessageCircle,
    },
  ];

  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-white mb-6">IUSTICIA</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              Defendiendo tus derechos con excelencia y dedicación desde 2023. Tu tranquilidad es nuestra prioridad.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Servicios', 'Equipo', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Política de Privacidad', 'Términos y Condiciones', 'Aviso Legal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-amber-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center">
          <p className="text-gray-600 text-sm">© 2024 IUSTICIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
