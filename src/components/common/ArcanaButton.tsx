import React from 'react'
import { motion } from 'framer-motion'

interface ArcanaButtonProps {
  children: React.ReactNode
  onClick?: () => void
  primary?: boolean
  className?: string
  icon?: boolean
}

const ArcanaButton: React.FC<ArcanaButtonProps> = ({ 
  children, 
  onClick, 
  primary = false,
  className = "",
  icon = true
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group px-10 py-4 rounded-full overflow-hidden transition-all duration-300 transform active:scale-95 ${
        primary 
        ? 'bg-blue-600/10 border border-blue-500/40 hover:bg-blue-600/20' 
        : 'bg-white/5 border border-white/10 hover:bg-white/10'
      } ${className}`}
    >
      {/* Moving Border Beam (The Electric Orbit) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 h-[300%] w-[300%] left-[-100%] top-[-100%] animate-spin-slow" style={{ 
          background: 'conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 40%, #60a5fa 50%, transparent 60%, transparent 100%)',
          animation: 'spin 4s linear infinite'
        }} />
      </div>

      {/* Solid Inner Body Mask */}
      <div className="absolute inset-[1.5px] rounded-full bg-[#0A0F1C] transition-colors duration-300 group-hover:bg-[#0D1528] pointer-events-none" />

      {/* Text/Content Content */}
      <div className="relative z-10 flex items-center justify-center gap-3 text-white font-bold tracking-[0.15em] uppercase text-xs md:text-sm">
        {children}
        {icon && (
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </div>

      {/* Atmospheric Glow Under the Button */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl bg-blue-500 transition-opacity duration-700 pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </motion.button>
  );
};

export default ArcanaButton
