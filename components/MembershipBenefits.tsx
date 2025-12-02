import React from 'react';
import { BENEFITS_DATA } from '../constants';
import * as Icons from 'lucide-react';
import NFTCard from './NFTCard';

const MembershipBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-gradient-to-b from-[#0F0F0F] to-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Text and NFT Card */}
          <div className="lg:w-1/3">
             <div className="sticky top-40">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-cream mb-6">
                  Le Renaissance Club <br/>
                  <span className="text-brand-gold italic">Membership</span>
                </h2>
                <p className="text-brand-cream/60 mb-10">
                  全球仅限 1791 位会员。持有这张 NFT 黑金卡，不仅是身份的象征，更是通往法国顶级贵族生活方式的钥匙。
                </p>
                <NFTCard />
                <div className="mt-8 text-center">
                   <button className="w-full py-4 bg-brand-red text-white font-bold tracking-widest uppercase hover:bg-red-800 transition-colors duration-300">
                     购买 NFT 会员资格
                   </button>
                   <p className="mt-4 text-xs text-brand-cream/40">支持 ETH / USDT 支付</p>
                </div>
             </div>
          </div>

          {/* Right Side: Grid of Benefits */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BENEFITS_DATA.map((benefit, index) => {
                // Dynamic Icon Component
                const IconComponent = (Icons as any)[benefit.iconName] || Icons.HelpCircle;

                return (
                  <div key={index} className="p-8 border border-white/5 hover:border-brand-gold/30 hover:bg-white/5 transition-all duration-300 group">
                    <div className="w-12 h-12 mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={48} strokeWidth={1} />
                    </div>
                    <h3 className="text-xl font-serif text-brand-cream mb-3">{benefit.title}</h3>
                    <p className="text-sm text-brand-cream/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;