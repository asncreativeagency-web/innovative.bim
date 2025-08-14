import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn' | 'bounceIn';
  delay?: number;
  duration?: number;
  bidirectional?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false, // Changed default to false for bidirectional support
    animationType = 'fadeIn',
    delay = 0,
    duration = 1000,
    bidirectional = true // New option for bidirectional animations
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce && bidirectional) {
          // Handle scrolling up - reverse the animation
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, bidirectional]);

  const getAnimationStyle = () => {
    if (!isVisible) {
      // Initial state based on animation type
      switch (animationType) {
        case 'fadeIn':
          return { opacity: 0, transition: `all ${duration}ms ease-out` };
        case 'slideUp':
          return { opacity: 0, transform: 'translateY(50px)', transition: `all ${duration}ms ease-out` };
        case 'slideLeft':
          return { opacity: 0, transform: 'translateX(50px)', transition: `all ${duration}ms ease-out` };
        case 'slideRight':
          return { opacity: 0, transform: 'translateX(-50px)', transition: `all ${duration}ms ease-out` };
        case 'scaleIn':
          return { opacity: 0, transform: 'scale(0.8)', transition: `all ${duration}ms ease-out` };
        case 'rotateIn':
          return { opacity: 0, transform: 'rotate(-10deg) scale(0.8)', transition: `all ${duration}ms ease-out` };
        case 'bounceIn':
          return { opacity: 0, transform: 'scale(0.3)', transition: `all ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)` };
        default:
          return { opacity: 0, transition: `all ${duration}ms ease-out` };
      }
    } else {
      // Animated state
      switch (animationType) {
        case 'fadeIn':
          return { opacity: 1, transition: `all ${duration}ms ease-out` };
        case 'slideUp':
          return { opacity: 1, transform: 'translateY(0)', transition: `all ${duration}ms ease-out` };
        case 'slideLeft':
          return { opacity: 1, transform: 'translateX(0)', transition: `all ${duration}ms ease-out` };
        case 'slideRight':
          return { opacity: 1, transform: 'translateX(0)', transition: `all ${duration}ms ease-out` };
        case 'scaleIn':
          return { opacity: 1, transform: 'scale(1)', transition: `all ${duration}ms ease-out` };
        case 'rotateIn':
          return { opacity: 1, transform: 'rotate(0deg) scale(1)', transition: `all ${duration}ms ease-out` };
        case 'bounceIn':
          return { opacity: 1, transform: 'scale(1)', transition: `all ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)` };
        default:
          return { opacity: 1, transform: 'scale(1)', transition: `all ${duration}ms ease-out` };
      }
    }
  };

  return { elementRef, isVisible, getAnimationStyle };
};

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};

// Staggered animation hook for multiple elements
export const useStaggeredAnimation = (count: number, staggerDelay: number = 100, bidirectional: boolean = true) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger the animations when scrolling down
            setTimeout(() => {
              setVisibleItems(prev => {
                const newItems = [...prev];
                newItems[index] = true;
                return newItems;
              });
            }, index * staggerDelay);
          } else if (bidirectional) {
            // Handle scrolling up - reverse the animation
            setVisibleItems(prev => {
              const newItems = [...prev];
              newItems[index] = false;
              return newItems;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [count, staggerDelay, bidirectional]);

  const getStaggeredStyle = (index: number) => {
    if (!visibleItems[index]) {
      return { opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease-out' };
    }
    return { opacity: 1, transform: 'translateY(0)', transition: 'all 0.6s ease-out' };
  };

  return { elementRefs, visibleItems, getStaggeredStyle };
}; 