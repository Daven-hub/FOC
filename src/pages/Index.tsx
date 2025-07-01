
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <Hero />
        <About />
        <div style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <Services />
        </div>
        <div style={{ paddingLeft: '6%', paddingRight: '6%' }}>
          <Statistics />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
