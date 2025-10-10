
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Services', href: '#' },
    { name: 'Événements', href: '/evenements' },
    { name: 'Recruitement', href: '/jobs' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <motion.header 
      className={`fixed px-[6%] top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
             <img className='h-12' src='/uploads/logo.png' alt='logo_ccca' />
          </motion.div>
      
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-300 hover:text-foc-red ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } group`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foc-red transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
  
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button 
              className="bg-gradient-to-r from-foc-red to-foc-red-light hover:from-foc-red-dark hover:to-foc-red text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-foc-red/25 border-0 transform hover:scale-105 transition-all duration-300"
            >
              S'inscrire
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>

          <motion.button
            className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
              isScrolled 
                ? 'text-foc-blue hover:bg-foc-blue/10' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <motion.div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-foc-blue hover:text-foc-red font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div className="pt-4 border-t border-gray-200">
              <Button 
                className="w-full bg-gradient-to-r from-foc-red to-foc-red-light hover:from-foc-red-dark hover:to-foc-red text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
