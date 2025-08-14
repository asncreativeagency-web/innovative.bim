"use client";

import { useEffect, useState } from "react";

interface PointerProps {
  children?: React.ReactNode;
}

export function Pointer({ children }: PointerProps): JSX.Element {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    // Hide system cursor globally and on all elements
    document.body.style.cursor = 'none';
    
    // Also hide cursor on all interactive elements
    const hideCursorOnElements = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.cursor = 'none';
        }
      });
    };

    // Hide cursor immediately and on any new elements
    hideCursorOnElements();
    
    // Use MutationObserver to hide cursor on dynamically added elements
    const observer = new MutationObserver(hideCursorOnElements);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleMouseMove = (e: MouseEvent) => {
      // Make pointer more reactive with immediate updates
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over a button or interactive element
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]');
      
      // Special case: don't treat logo elements as buttons
      // Check if the target or any of its parents contain logo-related content
      const isLogo = target.closest('[src*="logo"], .logo, [alt*="logo"], [alt*="Logo"]') || 
                     target.closest('img[src*="logo"]') ||
                     target.closest('div[onclick*="Logo"]') ||
                     target.closest('div[onclick*="logo"]') ||
                     target.closest('div[onclick*="home"]');
      
      setIsHoveringButton(!!isButton && !isLogo);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Only hide when leaving the entire document
      if (e.relatedTarget === null) {
        setIsVisible(false);
        setIsHoveringButton(false);
      }
    };

    // Add event listeners to the document
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      // Restore system cursor when component unmounts
      document.body.style.cursor = '';
      document.querySelectorAll('*').forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.cursor = '';
        }
      });
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Custom arrow pointer */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            width: '24px',
            height: '24px',
            pointerEvents: 'none',
            zIndex: 9998,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg
            viewBox="0 0 16 16"
            width="24"
            height="24"
            style={{ 
              filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 4px white)',
              opacity: 1,
            }}
            className="rotate-[-70deg]"
          >
            <path 
              d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" 
              fill={isHoveringButton ? '#10B981' : '#3B82F6'}
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <div>
        {children}
      </div>
    </>
  );
} 