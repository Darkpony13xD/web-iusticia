import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Servicios", to: "/servicios" },
  { label: "Equipo", to: "/equipo" },
  { label: "Contacto", to: "/contacto" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Marca */}
          <div>
            <h2 className="text-3xl font-black text-white mb-4">IUSTICIA</h2>
            <p className="text-gray-500 max-w-sm">
              Defendiendo tus derechos con excelencia y dedicación desde 2023.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">Tel: +52 (55) ...</p>
            <p className="text-gray-400">Correo: contacto@...</p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} IUSTICIA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
