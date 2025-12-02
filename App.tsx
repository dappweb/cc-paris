import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HistoryTimeline from './components/HistoryTimeline';
import MembershipBenefits from './components/MembershipBenefits';
import CollectionGrid from './components/CollectionGrid';
import InvestmentChart from './components/InvestmentChart';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import { UserProfile, Region } from './types';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  const handleLogin = (region: Region) => {
    // Simulating a login response
    setCurrentUser({
      id: 'user_1791',
      name: 'Alexander R.',
      region: region,
      kycStatus: 'verified',
      points: 1250,
      rebateBalance: 5800.00,
      walletAddress: region !== 'CN' ? '0x71C...9A21' : undefined,
      inviteCode: 'CHAI-888'
    });
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream selection:bg-brand-gold selection:text-brand-black font-sans">
      <Navigation 
        onLoginClick={() => setIsAuthModalOpen(true)} 
        currentUser={currentUser}
        onLogout={handleLogout}
      />
      
      {currentUser ? (
        <Dashboard user={currentUser} />
      ) : (
        <main>
          <Hero onCtaClick={() => setIsAuthModalOpen(true)} />
          <HistoryTimeline />
          <MembershipBenefits />
          <CollectionGrid />
          <InvestmentChart />
        </main>
      )}
      
      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
