import React from 'react';
import { motion } from 'framer-motion';

const ResumeDisplay: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
          MD AAYAN HAQUE
        </h1>
        <p className="text-xl text-gray-300">Resume</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl w-full"
      >
        <img
          src={process.env.PUBLIC_URL + '/assets/Resume1.jpg'}
          alt="MD AAYAN HAQUE Resume"
          className="w-full h-auto rounded-lg shadow-2xl border-4 border-blue-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'text-center p-8 bg-red-900/20 border-2 border-red-500 rounded-lg';
            errorDiv.innerHTML = `
              <h3 class="text-2xl font-bold text-red-400 mb-4">⚠️ Resume Image Not Found</h3>
              <p class="text-red-300 mb-2">Unable to load your resume image.</p>
              <p class="text-red-300 mb-2"><strong>Expected file:</strong> Resume1.jpg</p>
              <p class="text-red-300 mb-4"><strong>Location:</strong> public/assets/ folder</p>
              <button onclick="window.history.back()" class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Go Back
              </button>
            `;
            target.parentNode?.appendChild(errorDiv);
          }}
        />
      </motion.div>
    </div>
  );
};

export default ResumeDisplay; 