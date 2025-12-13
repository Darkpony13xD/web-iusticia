import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' }, 
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Equipo', href: '/equipo' },
        { name: 'Contacto', href: '/contacto' }, 
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-amber-900/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent relative group">
                    IUSTICIA
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => {
                        const isAnchor = link.href.startsWith('#');
                        const isLocalAnchor = isAnchor && isHome;
                        const className = `text-sm tracking-wide font-medium transition-colors duration-200 cursor-pointer ${
                            location.pathname === link.href ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'
                        }`;
                        
                        if (isLocalAnchor) {
                            return (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    className={className}
                                >
                                    {link.name.toUpperCase()}
                                </a>
                            );
                        }

                        const to = isAnchor ? `/${link.href}` : link.href;
                        return (
                            <Link 
                                key={link.name} 
                                to={to}
                                className={className}
                            >
                                {link.name.toUpperCase()}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => {
                                const isAnchor = link.href.startsWith('#');
                                const isLocalAnchor = isAnchor && isHome;
                                const className = "text-lg font-semibold py-2 border-b border-gray-800 last:border-0 text-gray-300 hover:text-amber-500";

                                if (isLocalAnchor) {
                                    return (
                                        <a 
                                            key={link.name} 
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={className}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                }

                                const to = isAnchor ? `/${link.href}` : link.href;
                                return (
                                    <Link 
                                        key={link.name} 
                                        to={to}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={className}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;