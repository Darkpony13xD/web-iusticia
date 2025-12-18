import React from 'react';
import type { Stat } from '../types';
import { useInView } from 'framer-motion';

const stats: Stat[] = [
    { id: 1, value: 2, label: "Años de Experiencia", suffix: "+" },
    { id: 2, value: 100, label: "Casos Ganados", suffix: "+" },
    { id: 3, value: 99, label: "Satisfacción", suffix: "%" },
    { id: 4, value: 5, label: "Abogados Expertos" },
];

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 border-b border-gray-800 relative">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="p-4">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600 mb-2">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;