import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { UserProfile } from '../types';
import { User, LogOut } from 'lucide-react';

interface NavigationProps {
  onLoginClick: () => void;
  currentUser: UserProfile | null;
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLoginClick, currentUser, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || currentUser ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg border-b border-brand-gold/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col items-center md:items-start cursor-pointer" onClick={() => window.location.href = '/'}>
          <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-gold tracking-widest">CHAI CENTRAL DE PARIS</h1>
          <span className="text-[0.5rem] md:text-[0.6rem] tracking-[0.4em] text-brand-cream/70 uppercase">Depuis 1791</span>
        </div>

        {!currentUser ? (
          <>
            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-sm uppercase tracking-widest text-brand-cream hover:text-brand-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <button 
              onClick={onLoginClick}
              className="px-6 py-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all duration-300 text-sm tracking-widest uppercase"
            >
              会员登录
            </button>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <p className="text-xs text-brand-gold uppercase tracking-wider">{currentUser.region === 'CN' ? '中国区' : 'Global'}</p>
              <p className="text-sm font-serif">{currentUser.name}</p>
            </div>
            <div className="h-8 w-px bg-white/20 hidden md:block"></div>
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 text-brand-cream/60 hover:text-brand-red transition-colors"
            >
              <LogOut size={18} />
              <span className="text-xs uppercase tracking-widest">退出</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
