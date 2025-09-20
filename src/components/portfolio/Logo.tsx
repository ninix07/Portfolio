import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Modern geometric logo */}
      <div className="relative w-12 h-12 group cursor-pointer">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f7f9] to-[#f8f7f9]/70 rounded-xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Main logo container */}
        <div className="relative w-full h-full bg-gradient-to-br from-[#f8f7f9] to-[#f8f7f9]/80 rounded-xl flex items-center justify-center overflow-hidden">
          {/* Inner geometric pattern */}
          <div className="absolute inset-1 bg-[#1f1f1f] rounded-lg" />
          
          {/* Decorative elements */}
          <div className="absolute top-1 left-1 w-3 h-3 bg-gradient-to-br from-[#f8f7f9] to-[#f8f7f9]/60 rounded-sm transform rotate-12 opacity-80" />
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-gradient-to-br from-[#f8f7f9]/60 to-[#f8f7f9]/40 rounded-sm transform -rotate-12 opacity-60" />
          
          {/* Center initials */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="font-['Poppins:ExtraBold',_sans-serif] text-[16px] text-[#f8f7f9] tracking-tighter">
              N
            </span>
          </div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-xl border-2 border-[#f8f7f9]/0 group-hover:border-[#f8f7f9]/20 transition-all duration-300" />
      </div>
      
      {/* Text logo */}
      <div className="hidden sm:flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-['Poppins:ExtraBold',_sans-serif] text-[22px] text-[#f8f7f9] tracking-tight leading-tight">
            Nigam
          </span>
          <div className="w-1.5 h-1.5 bg-gradient-to-br from-[#f8f7f9] to-[#f8f7f9]/70 rounded-full" />
        </div>
        <span className="font-['Poppins:Medium',_sans-serif] text-[11px] text-[rgba(248,247,249,0.6)] tracking-wider uppercase leading-tight -mt-0.5">
          Niraula
        </span>
      </div>
    </div>
  );
};

export default Logo;