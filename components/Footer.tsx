import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-16 border-t border-brand-gold/20 text-brand-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h2 className="text-2xl font-serif text-brand-gold mb-6 tracking-widest">CHAI CENTRAL DE PARIS</h2>
            <p className="text-sm text-brand-cream/60 leading-loose">
              巴黎中央酒库 (Chai Central de Paris) 始于 1791 年，全球“文艺复兴滴金会员俱乐部”总部。致力于为全球高净值家族提供顶级佳酿资产配置与文化传承服务。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif text-white mb-6">联系方式</h3>
            <div className="space-y-4 text-sm text-brand-cream/70">
              <p>
                <strong className="text-brand-gold block mb-1">法国总部 France Headquarter</strong>
                50 ROUTE DE JARNAC 16100 FOUSSIGNAC FRANCE
              </p>
              <p>
                <strong className="text-brand-gold block mb-1">中国办事处 China Office</strong>
                中国深圳经济特区福田中心区深南中路3031号汉国中心大厦B1层
              </p>
              <p>
                <strong className="text-brand-gold block mb-1">VIP Service</strong>
                HUGO: 0086-1 39 25 24 84 90
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif text-white mb-6">订阅通讯</h3>
            <p className="text-xs text-brand-cream/50 mb-4">订阅我们的邮件列表，获取最新的收藏资讯与拍卖信息。</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="bg-white/5 border border-white/10 px-4 py-2 w-full text-sm focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold text-brand-black px-6 py-2 text-sm font-bold uppercase hover:bg-white transition-colors">
                发送
              </button>
            </div>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-brand-cream/30">
          <p>© 1791-2025 Chai Central de Paris. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;