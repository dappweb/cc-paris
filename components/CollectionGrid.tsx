import React from 'react';
import { COLLECTION_DATA } from '../constants';

const CollectionGrid: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand-gold tracking-widest uppercase text-sm mb-2 block">The Collection</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-cream">
              贝克·文艺复兴系列 <br />
              <span className="text-2xl italic text-brand-cream/50">"干邑中的木桐"</span>
            </h2>
          </div>
          <p className="text-brand-cream/60 max-w-md mt-4 md:mt-0 text-sm md:text-base text-justify">
            每一瓶都是独一无二的艺术品，由法国KACLOS工艺大师团队手工吹瓶，每年限量2000坛，稀缺无限。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTION_DATA.map((item) => (
            <div key={item.year} className="group relative bg-[#151515] overflow-hidden border border-white/5 hover:border-brand-gold/50 transition-all duration-500">
              <div className="aspect-[4/5] bg-gradient-to-b from-[#2a1a1a] to-black relative p-6 flex items-center justify-center">
                {/* Placeholder for Bottle Image */}
                <div className="relative z-10 w-32 h-64 bg-black/40 border border-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                   <div className="text-center">
                     <div className="text-brand-gold font-serif text-2xl">{item.year}</div>
                     <div className="text-[10px] text-brand-cream/50 uppercase mt-2">Cognac<br/>Brillac</div>
                   </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-red/20 blur-[60px] rounded-full group-hover:bg-brand-red/30 transition-all duration-500"></div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs tracking-widest uppercase border ${item.status === 'available' ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'}`}>
                    {item.status === 'sold_out' ? '已售罄' : item.status === 'limited' ? '少量' : '接受预定'}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-baseline mb-2">
                   <h3 className="text-2xl font-serif text-brand-cream">{item.chineseName}</h3>
                   <span className="text-sm font-serif text-brand-gold italic">{item.frenchName}</span>
                </div>
                <div className="w-full h-px bg-white/10 my-4"></div>
                <p className="text-brand-cream/60 text-sm mb-6 h-10">{item.description}</p>
                <div className="flex justify-between items-center">
                   <div className="text-xs text-brand-cream/40 uppercase">
                     Volume: {item.volume}
                   </div>
                   <div className="text-xl text-brand-gold font-serif">
                     ¥ {item.price.toLocaleString()}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;