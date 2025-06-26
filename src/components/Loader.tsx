
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-foc-blue border-t-transparent rounded-full animate-spin"></div>
          <div className="w-12 h-12 border-4 border-foc-red border-t-transparent rounded-full animate-spin absolute top-2 left-2" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <div className="text-foc-blue font-semibold text-lg">Chargement...</div>
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-foc-blue to-foc-red rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
