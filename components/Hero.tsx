import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Coat_of_arms_of_Paris.svg/1200px-Coat_of_arms_of_Paris.svg.png" 
            alt="Logo" 
            className="w-24 h-24 mx-auto mb-8 opacity-80 grayscale invert"
          />
          <h2 className="text-lg md:text-xl font-sans text-brand-gold tracking-[0.5em] mb-4 uppercase">
            Le Renaissance Club
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream mb-6 leading-tight">
            上帝遗落在人间的<br />
            <span className="italic text-brand-gold">一颗珍珠</span>
          </h1>
          <p className="text-brand-cream/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            全球限量 1791 席位 · 法国博物馆级佳酿数字艺术圣殿<br/>
            连接数百年的家族传承与 Web3 资产配置
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 bg-brand-gold text-brand-black text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
            >
              申请加入 R 俱乐部
            </button>
            <button className="px-8 py-4 border border-brand-cream text-brand-cream text-sm font-bold tracking-widest uppercase hover:bg-brand-cream hover:text-brand-black transition-colors duration-300">
              探索藏品
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
