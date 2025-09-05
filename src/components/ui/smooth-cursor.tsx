"use client";

import { motion, useSpring } from "motion/react";
import { FC, JSX, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export interface SmoothCursorProps {
  cursor?: JSX.Element;
  springConfig?: {
    damping: number;
    stiffness: number;
    mass: number;
    restDelta: number;
  };
}

const DefaultCursorSVG: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={26}
      viewBox="0 0 50 54"
      fill="none"
      style={{ scale: 0.25 }}
    >
      <g>
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill="#3B82F6"
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="#1E40AF"
          strokeWidth={2.25825}
        />
      </g>
    </svg>
  );
};

export function SmoothCursor({
  cursor = <DefaultCursorSVG />,
  springConfig = {
    damping: 25,
    stiffness: 400,
    mass: 0.8,
    restDelta: 0.001,
  },
}: SmoothCursorProps) {
  const [isMoving, setIsMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastMousePos = useRef<Position>({ x: 0, y: 0 });
  const velocity = useRef<Position>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const previousAngle = useRef(0);
  const accumulatedRotation = useRef(0);

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotation = useSpring(0, {
    damping: 30,
    stiffness: 300,
    mass: 0.6,
  });
  const scale = useSpring(1, {
    stiffness: 400,
    damping: 25,
    mass: 0.6,
  });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                    window.innerWidth <= 1024;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // If mobile, don't set up cursor functionality
    if (isMobile) {
      return;
    }

    const updateVelocity = (currentPos: Position) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime.current;

      if (deltaTime > 0) {
        velocity.current = {
          x: (currentPos.x - lastMousePos.current.x) / deltaTime,
          y: (currentPos.y - lastMousePos.current.y) / deltaTime,
        };
      }

      lastUpdateTime.current = currentTime;
      lastMousePos.current = currentPos;
    };

    const smoothMouseMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY };
      updateVelocity(currentPos);

      const speed = Math.sqrt(
        Math.pow(velocity.current.x, 2) + Math.pow(velocity.current.y, 2),
      );

      cursorX.set(currentPos.x);
      cursorY.set(currentPos.y);

      if (speed > 0.1) {
        const currentAngle =
          Math.atan2(velocity.current.y, velocity.current.x) * (180 / Math.PI) +
          90;

        let angleDiff = currentAngle - previousAngle.current;
        if (angleDiff > 180) angleDiff -= 360;
        if (angleDiff < -180) angleDiff += 360;
        accumulatedRotation.current += angleDiff;
        rotation.set(accumulatedRotation.current);
        previousAngle.current = currentAngle;

        scale.set(0.95);
        setIsMoving(true);

        const timeout = setTimeout(() => {
          scale.set(1);
          setIsMoving(false);
        }, 150);

        return () => clearTimeout(timeout);
      }
    };

    let rafId: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        smoothMouseMove(e);
        rafId = 0;
      });
    };

    document.body.style.cursor = "none";
    
    // Also hide cursor on all elements to prevent any white cursor from appearing
    const hideCursorOnElements = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.cursor = 'none';
          // Force remove cursor with !important
          el.style.setProperty('cursor', 'none', 'important');
          el.style.setProperty('-webkit-cursor', 'none', 'important');
          el.style.setProperty('-moz-cursor', 'none', 'important');
          el.style.setProperty('-ms-cursor', 'none', 'important');
        }
      });
    };

    // Hide cursor immediately and on any new elements
    hideCursorOnElements();
    
    // Use MutationObserver to hide cursor on dynamically added elements
    const observer = new MutationObserver(hideCursorOnElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Also add a global style to override any cursor styles
    let globalStyle = document.getElementById('smooth-cursor-override');
    if (!globalStyle) {
      globalStyle = document.createElement('style');
      globalStyle.id = 'smooth-cursor-override';
      globalStyle.textContent = `
        * {
          cursor: none !important;
          -webkit-cursor: none !important;
          -moz-cursor: none !important;
          -ms-cursor: none !important;
        }
      `;
      document.head.appendChild(globalStyle);
    }

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
      document.body.style.cursor = "auto";
      
      // Restore cursor on all elements when component unmounts
      const restoreCursorOnElements = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.cursor = '';
            el.style.removeProperty('cursor');
            el.style.removeProperty('-webkit-cursor');
            el.style.removeProperty('-moz-cursor');
            el.style.removeProperty('-ms-cursor');
          }
        });
      };
      restoreCursorOnElements();
      
      // Remove global style
      const globalStyle = document.getElementById('smooth-cursor-override');
      if (globalStyle) {
        globalStyle.remove();
      }
      
      if (rafId) cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, [cursorX, cursorY, rotation, scale, isMobile]);

  // Disable smooth cursor completely
  return null;
}
