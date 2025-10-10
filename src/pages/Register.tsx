
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import ResetPasswordForm from '@/components/ResetPasswordForm';

const Register = () => {
  const [activeTab, setActiveTab] = useState('register');

  const renderContent = () => {
    switch (activeTab) {
      case 'login':
        return <LoginForm />;
      case 'reset':
        return <ResetPasswordForm />;
      case 'register':
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page Title */}
            <div className="text-center mb-12">
              <motion.h1 
                className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Dites-nous qui vous êtes
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Créer votre compte gratuit maintenant
              </motion.p>
            </div>

            {/* Registration Cards */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
              {/* Jobseeker Card */}
              <motion.div 
                className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-8 text-center hover:border-foc-blue transition-all duration-300 shadow-xl hover:shadow-2xl group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <User size={40} className="text-white" />
                </motion.div>
                <p className="text-gray-600 mb-2 font-medium">Je suis un</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-foc-blue transition-colors">
                  demandeur d'emploi
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-yellow-400/25">
                    CRÉER UN COMPTE
                  </Button>
                </motion.div>
              </motion.div>

              {/* Employer Card */}
              <motion.div 
                className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 rounded-3xl p-8 text-center hover:border-foc-red transition-all duration-300 shadow-xl hover:shadow-2xl group"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div 
                  className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Briefcase size={40} className="text-white" />
                </motion.div>
                <p className="text-gray-600 mb-2 font-medium">Je suis un</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-foc-red transition-colors">
                  employeur
                </h3>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-foc-red to-red-600 hover:from-foc-red-light hover:to-red-500 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-red-500/25">
                    CRÉER UN COMPTE
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <Header />
      <main className="container mx-auto relative z-10" style={{ paddingLeft: '6%', paddingRight: '6%', paddingTop: '8rem', paddingBottom: '4rem' }}>
        {/* Navigation Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white/20">
            {[
              { key: 'login', label: 'SE CONNECTER' },
              { key: 'register', label: "S'ENREGISTRER" },
              { key: 'reset', label: 'RÉINITIALISER' }
            ].map((tab, index) => (
              <motion.button 
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-4 transition-all duration-300 font-semibold ${
                  activeTab === tab.key 
                    ? 'bg-gradient-to-r from-foc-blue to-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {renderContent()}
       
      </main>
      <Footer />
    </div>
  );
};

export default Register;
