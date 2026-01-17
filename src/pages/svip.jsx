import React, { useState } from 'react';
import { ChevronLeft, Gift, MessageCircle, Zap } from 'lucide-react';

// --- IMAGE IMPORTS ---
import bannerImg from '../assets/banner.png';
import medalImg from '../assets/medal.png';
import bubbleImg from '../assets/bubble.png';
import headwearImg from '../assets/headwear.png';
import entryImg from '../assets/entry.png';
import title from '../assets/title.png';

const SVIPPage = () => {
  const [activeTab, setActiveTab] = useState('SVIP1');
  const tabs = ['SVIP1', 'SVIP2', 'SVIP3', 'SVIP4', 'SVIP5'];

  // Helper: Metallic Text Effect
  const GoldText = ({ children, className = "" }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-b from-[#fff0d4] via-[#d4af78] to-[#8a6a3a] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${className}`}>
      {children}
    </span>
  );

  // --- Premium Card Component ---
  const PremiumCard = ({ children, label, className = "" }) => (
    <div className={`relative group rounded-xl p-[1.5px] bg-gradient-to-b from-[#fcd385] via-[#b68853] to-[#59391e] shadow-[0_5px_15px_rgba(0,0,0,0.8)] ${className}`}>
        
        {/* Diamond Ornament (Floating Top Center) */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30">
            <div className="w-4 h-4 bg-gradient-to-br from-[#ffedcc] to-[#ffa600] rotate-45 border-[1px] border-white/60 shadow-[0_0_10px_#ffaa00] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#59391e] border border-[#ffedcc]"></div>
            </div>
        </div>

        {/* Main Card Background */}
        <div className="relative h-full w-full rounded-[10px] bg-[#1a0b06] overflow-hidden flex flex-col">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#6e4120_0%,_#1a0b06_60%,_#050201_100%)] opacity-100 z-0"></div>
            <div className="absolute top-0 inset-x-0 h-[1px] bg-white/20 z-20"></div>

            {/* Content Area */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-2 pb-0">
                {children}
            </div>

            {/* Bottom Label/Podium */}
            <div className="relative z-20 w-full h-8 mt-auto">
                <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-[#d4af78]/80 box-shadow-[0_0_4px_#d4af78]"></div>
                <div className="h-full w-full bg-gradient-to-b from-[#4a2815] via-[#361a0d] to-[#1f0e06] flex items-center justify-center shadow-[0_-4px_10px_rgba(0,0,0,0.6)]">
                    <span className="text-[#e6ccb0] text-[11px] tracking-[0.05em] uppercase font-normal drop-shadow-sm font-sans">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050302] text-[#e5d1b3] font-sans flex justify-center overflow-hidden">
      <div className="w-full max-w-md bg-[#050302] relative shadow-2xl flex flex-col min-h-screen">
        
        {/* Ambient Background Lights */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[30%] bg-[#d4af78] blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-20%] w-[60%] h-[40%] bg-[#a67c3e] blur-[150px] opacity-15 pointer-events-none"></div>

        {/* Header */}
        <div className="flex justify-between items-center p-4 pt-6 z-30 relative">
          <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
            <ChevronLeft size={24} className="text-[#d4af78]" />
          </button>
          <h1 className="text-lg font-bold tracking-[0.2em] text-[#d4af78] drop-shadow-sm">SVIP</h1>
          <button className="text-sm text-[#a68a64] font-medium hover:text-[#d4af78] transition-colors">Details</button>
        </div>

    {/* --- Simplified Navigation Tabs --- */}
<div className="px-4 mb-4 z-30 relative">
    <div className="flex justify-between items-center px-4">
        {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative py-2 text-xs font-bold italic tracking-widest transition-all duration-300 ${
                        isActive ? 'text-[#d4af78]' : 'text-gray-500 hover:text-gray-400'
                    }`}
                >
                    <span className="relative z-10">{tab}</span>
                    {/* Minimalist Underline Indicator */}
                    {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af78] to-transparent"></div>
                    )}
                </button>
            );
        })}
    </div>
</div>

{/* --- Hero Banner (Now Dynamic) --- */}
<div className="relative h-60 w-full flex flex-col px-8 justify-center z-20">
    <div className="relative z-10 max-w-[50%]">
        <h2 className="text-5xl font-black italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {/* This updates based on the selected tab */}
            <GoldText>{activeTab}</GoldText>
        </h2>
        <p className="text-xs text-[#8c8175] mt-2 leading-relaxed font-medium">
            To unlock it, you still need <br />
            <span className="text-white text-xl font-black tracking-wider drop-shadow-md">50,000</span>
        </p>
    </div>
    
    <div className="absolute right-0 top-6 w-48 h-48 flex items-center justify-center z-0">
        <div className="absolute bottom-8 w-32 h-6 bg-black/60 blur-[8px] rounded-[100%] transform perspective-500 rotateX(60deg)"></div>
        <img 
            src={bannerImg} 
            alt="SVIP Banner" 
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(212,175,120,0.4)] animate-pulse" 
            style={{ animationDuration: '3s' }}
        />
    </div>
</div>
        {/* --- REWARDS GRID --- */}
        {/* Increased px-5 for side spacing */}
        <div className="flex-1 px-5 z-20 -mt-2 pb-24 relative">
            
            {/* TOP SECTION: Increased height to h-[18rem] for more room */}
            <div className="grid grid-cols-2 gap-4 h-[18rem]">
                
                {/* 1. Medal */}
                <PremiumCard label="Medal">
                      <div className="w-full h-full flex items-center justify-center">
                        <img src={medalImg} alt="Medal" className="w-28 h-28 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                      </div>
                </PremiumCard>

                {/* Right Column (Title & Bubble) */}
                {/* Increased gap-5 so Bubble diamond doesn't touch Title */}
                <div className="flex flex-col gap-5 h-full">
                    <PremiumCard label="Title" className="flex-1">
                        <div className="relative w-full h-full flex items-center justify-center px-1">
                             <img src={title} alt="SVIP Title" className="w-full max-h-[80%] object-contain"/>
                        </div>
                    </PremiumCard>

                    <PremiumCard label="Bubble" className="flex-1">
                        <div className="w-full h-full flex items-center justify-center">
                            <img src={bubbleImg} alt="Bubble" className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(212,175,120,0.3)]" />
                        </div>
                    </PremiumCard>
                </div>
            </div>
   {/* BOTTOM SECTION */}
            {/* Changed mt-3 to mt-8 to prevent overlap with top row diamonds */}
            <div className="grid grid-cols-2 gap-4 mt-8 h-36">
                <PremiumCard label="Headwear">
                    <div className="w-full h-full flex items-center justify-center">
                         <img src={headwearImg} alt="Headwear" className="w-24 h-24 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]" />
                    </div>
                </PremiumCard>

                 <PremiumCard label="Entry">
                    <div className="w-full h-full flex items-center justify-center">
                        <img src={entryImg} alt="Entry Effect" className="w-full h-full object-contain scale-110 drop-shadow-[0_0_15px_rgba(212,175,120,0.2)]" />
                     </div>
                </PremiumCard>
            </div>

            {/* Privileges Footer */}
            <div className="mt-36 mb-6">
                <div className="flex items-center justify-center gap-4 mb-6 opacity-90">
                    <div className="w-1 h-1 rotate-45 bg-[#d4af78] shadow-[0_0_8px_#d4af78]"></div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a68a64]">Exclusive privileges</h3>
                    <div className="w-1 h-1 rotate-45 bg-[#d4af78] shadow-[0_0_8px_#d4af78]"></div>
                </div>

                <div className="flex justify-around px-6">
                    {[
                        { name: 'Priority Chat', icon: <MessageCircle size={22} /> },
                        { name: 'Daily Gift', icon: <Gift size={22} /> },
                        { name: 'Level Up', icon: <Zap size={22} /> }
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 group">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2a1f16] to-[#0a0705] border border-[#3d2f20] flex items-center justify-center text-[#d4af78] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] relative transition-transform group-hover:-translate-y-1">
                                <div className="absolute -inset-1 rounded-full border border-[#d4af78]/20 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                <div className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]">
                                  {item.icon}
                                </div>
                            </div>
                            <span className="text-[9px] font-medium text-[#8c8175] text-center leading-tight">{item.name}</span>
                        </div>
                    ))}
                </div>
                    </div>
         </div>
      </div>
    </div>
  );
};

export default SVIPPage;