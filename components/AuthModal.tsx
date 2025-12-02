import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Globe, MapPin } from 'lucide-react';
import { Region } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (region: Region) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [step, setStep] = useState<'method' | 'kyc'>('method');
  const [selectedRegion, setSelectedRegion] = useState<Region>('CN');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#111] border border-brand-gold/30 rounded-xl overflow-hidden shadow-2xl"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-brand-cream/40 hover:text-brand-gold">
            <X size={20} />
          </button>

          <div className="p-8">
            <div className="text-center mb-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Coat_of_arms_of_Paris.svg/1200px-Coat_of_arms_of_Paris.svg.png" 
                alt="Logo" 
                className="w-12 h-12 mx-auto mb-4 grayscale invert opacity-80"
              />
              <h2 className="text-2xl font-serif text-brand-cream">
                {step === 'method' ? '会员登录 / 注册' : '合规区域选择'}
              </h2>
              <p className="text-xs text-brand-cream/50 mt-2 tracking-widest uppercase">
                Chai Central de Paris
              </p>
            </div>

            {step === 'method' ? (
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="手机号 / 邮箱" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-cream placeholder:text-brand-cream/20 focus:outline-none focus:border-brand-gold transition-colors"
                />
                <input 
                  type="password" 
                  placeholder="密码" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-cream placeholder:text-brand-cream/20 focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button 
                  onClick={() => setStep('kyc')}
                  className="w-full bg-brand-gold text-brand-black font-bold py-3 rounded-lg hover:bg-white transition-colors uppercase tracking-widest"
                >
                  下一步
                </button>
                <div className="text-center mt-4">
                  <span className="text-xs text-brand-cream/30">
                    注册即代表同意 <a href="#" className="underline hover:text-brand-gold">服务条款</a> 及 <a href="#" className="underline hover:text-brand-gold">隐私政策</a>
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-lg flex gap-3 items-start">
                  <ShieldCheck className="text-brand-gold shrink-0 mt-1" size={18} />
                  <p className="text-xs text-brand-cream/70 leading-relaxed">
                    根据当地法律法规，平台将根据您的所在地提供差异化服务。请如实选择您的KYC注册地。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSelectedRegion('CN')}
                    className={`p-4 rounded-lg border flex flex-col items-center gap-3 transition-all ${selectedRegion === 'CN' ? 'bg-brand-gold/20 border-brand-gold text-brand-gold' : 'bg-white/5 border-white/10 text-brand-cream/50 hover:bg-white/10'}`}
                  >
                    <MapPin size={24} />
                    <span className="text-sm font-bold">中国大陆</span>
                    <span className="text-[10px] opacity-60">CNY / 积分兑换</span>
                  </button>

                  <button 
                    onClick={() => setSelectedRegion('HK')}
                    className={`p-4 rounded-lg border flex flex-col items-center gap-3 transition-all ${selectedRegion !== 'CN' ? 'bg-brand-gold/20 border-brand-gold text-brand-gold' : 'bg-white/5 border-white/10 text-brand-cream/50 hover:bg-white/10'}`}
                  >
                    <Globe size={24} />
                    <span className="text-sm font-bold">香港及海外</span>
                    <span className="text-[10px] opacity-60">USD / USDT / NFT交易</span>
                  </button>
                </div>

                <button 
                  onClick={() => onLogin(selectedRegion)}
                  className="w-full bg-brand-gold text-brand-black font-bold py-3 rounded-lg hover:bg-white transition-colors uppercase tracking-widest"
                >
                  确认并进入
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AuthModal;
