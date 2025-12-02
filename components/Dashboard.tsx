import React, { useState } from 'react';
import { UserProfile, Region, CollectionItem, OwnedNFT } from '../types';
import { COLLECTION_DATA } from '../constants';
import { Wallet, ShoppingBag, Users, Crown, ArrowRight, CreditCard, Coins, RefreshCw, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import NFTCard from './NFTCard';
import { motion } from 'framer-motion';

interface DashboardProps {
  user: UserProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<'assets' | 'market' | 'referral'>('assets');

  return (
    <div className="pt-24 min-h-screen bg-brand-black pb-12">
      <div className="container mx-auto px-6">
        {/* Compliance Banner */}
        {user.region === 'CN' ? (
          <div className="mb-8 p-3 bg-brand-gray/50 border border-white/10 rounded-lg flex items-center gap-3 text-xs text-brand-cream/60">
            <AlertTriangle size={14} className="text-brand-gold" />
            <span>中国大陆地区仅开放：数字权益收藏、积分兑换、免费转赠功能。暂不支持二级市场交易与虚拟货币支付。</span>
          </div>
        ) : (
          <div className="mb-8 p-3 bg-brand-gray/50 border border-white/10 rounded-lg flex items-center gap-3 text-xs text-brand-cream/60">
            <CheckCircle size={14} className="text-green-500" />
            <span>您已通过海外KYC认证。已开启：USDT支付、NFT二级市场交易、全球代币激励功能。</span>
          </div>
        )}

        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-serif text-brand-cream mb-2">Bonjour, {user.name}</h1>
            <div className="flex items-center gap-4 text-sm text-brand-cream/50">
              <span className="flex items-center gap-1"><Crown size={14} className="text-brand-gold"/> Member ID: {user.id}</span>
              <span className="px-2 py-0.5 border border-brand-gold/30 rounded text-[10px] text-brand-gold uppercase">{user.kycStatus === 'verified' ? 'KYC Verified' : 'Unverified'}</span>
            </div>
          </div>

          <div className="flex bg-white/5 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('assets')}
              className={`px-6 py-2 rounded-md text-sm transition-all ${activeTab === 'assets' ? 'bg-brand-gold text-brand-black font-bold shadow-lg' : 'text-brand-cream/60 hover:text-brand-cream'}`}
            >
              我的资产
            </button>
            <button 
              onClick={() => setActiveTab('market')}
              className={`px-6 py-2 rounded-md text-sm transition-all ${activeTab === 'market' ? 'bg-brand-gold text-brand-black font-bold shadow-lg' : 'text-brand-cream/60 hover:text-brand-cream'}`}
            >
              权益市场
            </button>
            <button 
              onClick={() => setActiveTab('referral')}
              className={`px-6 py-2 rounded-md text-sm transition-all ${activeTab === 'referral' ? 'bg-brand-gold text-brand-black font-bold shadow-lg' : 'text-brand-cream/60 hover:text-brand-cream'}`}
            >
              邀请返佣
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'assets' && <AssetsView user={user} />}
          {activeTab === 'market' && <MarketplaceView user={user} />}
          {activeTab === 'referral' && <ReferralView user={user} />}
        </div>
      </div>
    </div>
  );
};

// --- Sub-components (Internal to keep file count low as requested) ---

const AssetsView: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="space-y-8">
      {/* Wallet Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-brand-gold/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Coins size={64} />
          </div>
          <p className="text-brand-cream/40 text-xs uppercase tracking-widest mb-2">积分余额 (Points)</p>
          <h3 className="text-4xl font-serif text-brand-cream mb-4">{user.points.toLocaleString()}</h3>
          <button className="text-xs text-brand-gold border-b border-brand-gold/30 pb-0.5 hover:text-white transition-colors flex items-center gap-1">
            兑换权益 <ArrowRight size={10} />
          </button>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-brand-gold/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Wallet size={64} />
          </div>
          <p className="text-brand-cream/40 text-xs uppercase tracking-widest mb-2">返佣收益 ({user.region === 'CN' ? 'CNY' : 'USDT'})</p>
          <h3 className="text-4xl font-serif text-brand-gold mb-4">{user.region === 'CN' ? '¥' : '$'}{user.rebateBalance.toLocaleString()}</h3>
          <button className="text-xs text-brand-gold border-b border-brand-gold/30 pb-0.5 hover:text-white transition-colors flex items-center gap-1">
            立即提现 <ArrowRight size={10} />
          </button>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-brand-gold/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
            <Crown size={64} />
          </div>
          <p className="text-brand-cream/40 text-xs uppercase tracking-widest mb-2">持有权益卡</p>
          <h3 className="text-4xl font-serif text-brand-cream mb-4">1 <span className="text-lg text-brand-cream/30">张</span></h3>
           <button className="text-xs text-brand-gold border-b border-brand-gold/30 pb-0.5 hover:text-white transition-colors flex items-center gap-1">
            查看特权 <ArrowRight size={10} />
          </button>
        </div>
      </div>

      {/* Owned NFTs */}
      <div>
        <h3 className="text-xl font-serif text-brand-cream mb-6">我的藏品权益</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Mock Owned Item */}
           <div className="bg-[#151515] rounded-xl overflow-hidden border border-white/5">
              <div className="p-6 flex justify-center bg-gradient-to-b from-[#2a1a1a] to-black">
                <div className="scale-75 origin-center">
                  <NFTCard />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-serif text-lg text-brand-gold">Renaissance VIP</h4>
                    <p className="text-xs text-brand-cream/40">Token ID: #1791001</p>
                  </div>
                  <div className="bg-brand-gold/20 text-brand-gold text-[10px] px-2 py-1 rounded uppercase tracking-wider">
                    Tier A
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2 border border-white/20 rounded text-sm hover:bg-white hover:text-black transition-all">
                    <Send size={14} /> 转赠
                  </button>
                  {user.region !== 'CN' && (
                    <button className="flex items-center justify-center gap-2 py-2 bg-brand-gold text-black rounded text-sm hover:bg-white transition-all font-bold">
                      <RefreshCw size={14} /> 出售
                    </button>
                  )}
                </div>
                {user.region === 'CN' && (
                  <p className="mt-3 text-[10px] text-center text-brand-cream/20">
                    *依据法规，当前地区暂不支持二级交易
                  </p>
                )}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const MarketplaceView: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-xl font-serif text-brand-cream">发行市场</h3>
        <div className="flex gap-2">
          {['全部', 'Tier A', 'Tier B', 'Tier C'].map((filter) => (
            <button key={filter} className="px-4 py-1.5 rounded-full border border-white/10 text-xs text-brand-cream/60 hover:border-brand-gold hover:text-brand-gold transition-all">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COLLECTION_DATA.map((item) => (
          <div key={item.year} className="bg-[#151515] border border-white/5 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-all group">
            <div className="aspect-square bg-gradient-to-b from-[#1a1a1a] to-black relative p-4">
               {/* Tier Badge */}
               <div className="absolute top-4 left-4 z-10">
                 <span className="bg-white/10 backdrop-blur text-xs px-2 py-1 rounded text-white">
                   Tier {item.year > 2018 ? 'B' : 'A'}
                 </span>
               </div>
               
               <div className="w-full h-full flex items-center justify-center">
                 <div className="w-32 h-64 bg-black/40 border border-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <span className="text-brand-gold font-serif text-xl">{item.year}</span>
                 </div>
               </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-serif text-xl text-brand-cream mb-1">{item.chineseName}</h4>
              <p className="text-xs text-brand-cream/40 mb-4">{item.frenchName}</p>
              
              <div className="flex justify-between items-end mb-6">
                 <div>
                   <p className="text-xs text-brand-cream/40 mb-1">发行价</p>
                   <p className="text-xl text-brand-gold font-serif">
                     {user.region === 'CN' ? `¥ ${item.price.toLocaleString()}` : `$ ${(item.price / 7).toFixed(0)}`}
                   </p>
                 </div>
                 <div className="text-right">
                   <p className="text-xs text-brand-cream/40 mb-1">剩余</p>
                   <p className="text-sm text-brand-cream">
                     {item.status === 'sold_out' ? '0' : item.status === 'limited' ? '12' : '145'} / 2000
                   </p>
                 </div>
              </div>

              <button 
                disabled={item.status === 'sold_out'}
                className={`w-full py-3 flex items-center justify-center gap-2 rounded uppercase tracking-widest text-sm font-bold transition-all ${item.status === 'sold_out' ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-brand-gold text-black hover:bg-white'}`}
              >
                {item.status === 'sold_out' ? '已售罄' : (
                  <>
                    <CreditCard size={16} /> 立即购买
                  </>
                )}
              </button>
              
              {user.region !== 'CN' && item.status !== 'sold_out' && (
                <div className="mt-3 text-center">
                   <span className="text-[10px] text-green-500 flex items-center justify-center gap-1">
                     <CheckCircle size={10} /> 支持 USDT 支付
                   </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReferralView: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-brand-red/20 to-brand-gold/10 border border-brand-gold/30 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-serif text-brand-gold mb-2">邀请好友，共享收益</h2>
          <p className="text-brand-cream/70 text-sm max-w-md">
            邀请好友加入 R 俱乐部，您将获得一级好友消费金额 5% 的返佣奖励，以及额外积分加成。
          </p>
        </div>
        <div className="bg-black/40 p-6 rounded-xl border border-brand-gold/20 text-center min-w-[200px]">
          <p className="text-xs text-brand-cream/40 uppercase tracking-widest mb-2">您的专属邀请码</p>
          <p className="text-2xl font-mono text-brand-gold font-bold tracking-wider mb-3">{user.inviteCode}</p>
          <button className="text-xs text-brand-cream underline hover:text-brand-gold">复制邀请链接</button>
        </div>
      </div>

      <h3 className="text-xl font-serif text-brand-cream mb-6">收益明细</h3>
      <div className="bg-[#151515] rounded-xl overflow-hidden border border-white/5">
        <div className="grid grid-cols-4 p-4 border-b border-white/5 text-xs text-brand-cream/40 uppercase tracking-wider">
          <div>时间</div>
          <div>好友</div>
          <div>类型</div>
          <div className="text-right">收益</div>
        </div>
        {[1,2,3].map((i) => (
          <div key={i} className="grid grid-cols-4 p-4 border-b border-white/5 text-sm text-brand-cream hover:bg-white/5 transition-colors">
             <div className="text-brand-cream/60">2023-10-1{i}</div>
             <div>User_88{i}***</div>
             <div><span className="bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded text-xs">购买权益卡</span></div>
             <div className="text-right font-mono text-green-400">+{user.region === 'CN' ? '¥' : '$'} 2,500.00</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
