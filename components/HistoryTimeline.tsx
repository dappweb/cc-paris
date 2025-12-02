import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { motion } from 'framer-motion';

const HistoryTimeline: React.FC = () => {
  return (
    <section id="history" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-cream mb-4">
            跨越四个世纪的历史与荣耀
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-brand-gold/30 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {TIMELINE_DATA.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Dot */}
                <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-brand-black border-2 border-brand-gold rounded-full -translate-x-1/2 -translate-y-1/2 z-10 group-hover:bg-brand-gold transition-colors duration-300"></div>
                
                <div className={`p-6 glass-panel md:absolute w-full md:w-64 transition-all duration-300 hover:border-brand-gold ${index % 2 === 0 ? 'md:bottom-full md:mb-10' : 'md:top-full md:mt-10'} left-1/2 md:-translate-x-1/2`}>
                  <span className="text-3xl font-serif text-brand-gold block mb-2">{item.year}</span>
                  <h3 className="text-lg font-bold text-brand-cream mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-cream/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;