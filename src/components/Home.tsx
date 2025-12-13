import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Testimonials from './Testimonials';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <Testimonials />
            <Team />
            <Contact />
        </>
    );
};

export default Home;