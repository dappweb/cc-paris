import React from 'react';
import { motion } from 'framer-motion';

const NFTCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[1.586/1] perspective-1000">
      <motion.div 
        className="w-full h-full relative preserve-3d cursor-pointer"
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Card Background */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-gray to-black border border-brand-gold/40 shadow-2xl overflow-hidden">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="relative p-8 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-brand-gold font-serif text-2xl tracking-widest">RENAISSANCE</h3>
                <p className="text-xs text-brand-cream/50 uppercase tracking-[0.3em]">Club Member</p>
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Coat_of_arms_of_Paris.svg/1200px-Coat_of_arms_of_Paris.svg.png" className="w-12 h-12 grayscale invert opacity-80" alt="Logo" />
            </div>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-brand-cream/60 text-xs mb-1 font-mono">TOKEN ID</p>
                <p className="text-brand-cream font-mono text-lg tracking-widest">0001 • 1791</p>
              </div>
              <div className="text-right">
                 <p className="text-brand-gold text-sm tracking-widest font-bold">VIP</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NFTCard;