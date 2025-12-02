import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CHART_DATA } from '../constants';

const InvestmentChart: React.FC = () => {
  return (
    <section id="investment" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-5xl font-serif text-brand-cream mb-6">
               超越传统的<br/>
               <span className="text-brand-gold">投资价值</span>
             </h2>
             <p className="text-brand-cream/70 mb-6 leading-relaxed text-justify">
               2003至2021年7月，精品葡萄酒50和精品葡萄酒1000指数已分别上涨263%和276%。在历经三次全球金融危机，回报仍超过标普500指数。
             </p>
             <p className="text-brand-cream/70 mb-8 leading-relaxed text-justify">
               “文艺复兴”系列不仅是味蕾的享受，更是资产的避风港。稀缺的产量（每年仅2000坛）与历史沉淀，确保了其在二级市场的强劲表现。
             </p>
             
             <div className="grid grid-cols-2 gap-6">
               <div className="p-6 border border-brand-gold/20 bg-brand-gold/5">
                 <div className="text-3xl text-brand-gold font-bold mb-2">+270.7%</div>
                 <div className="text-xs text-brand-cream/50 uppercase tracking-widest">LIV-EX 100 20年增长</div>
               </div>
               <div className="p-6 border border-brand-gold/20 bg-brand-gold/5">
                 <div className="text-3xl text-brand-gold font-bold mb-2">Top 1</div>
                 <div className="text-xs text-brand-cream/50 uppercase tracking-widest">抗通胀实体资产</div>
               </div>
             </div>
          </div>

          <div className="h-[400px] w-full glass-panel p-6 rounded-xl">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={CHART_DATA}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorWine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B0000" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="year" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#D4AF37', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Area type="monotone" dataKey="wine" name="精品酒指数" stroke="#8B0000" fillOpacity={1} fill="url(#colorWine)" />
                <Area type="monotone" dataKey="sp500" name="S&P 500" stroke="#D4AF37" fillOpacity={1} fill="url(#colorSp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentChart;