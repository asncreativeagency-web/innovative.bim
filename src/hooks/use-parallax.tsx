import { useEffect, useRef, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  easing?: number;
  disabled?: boolean;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    easing = 0.1,
    disabled = false
  } = options;

  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);
  const rafId = useRef<number>();
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (disabled) return;

    const updateParallax = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate when element enters viewport
      const elementStart = elementTop - windowHeight;
      const elementEnd = elementTop + elementHeight;
      
      // Only animate when element is in viewport
      if (scrollY >= elementStart && scrollY <= elementEnd) {
        const progress = (scrollY - elementStart) / (elementEnd - elementStart);
        const parallaxOffset = progress * speed * 100;
        
        // Smooth easing
        const currentOffset = offset;
        const targetOffset = parallaxOffset;
        const newOffset = currentOffset + (targetOffset - currentOffset) * easing;
        
        setOffset(newOffset);
      }
      
      rafId.current = requestAnimationFrame(updateParallax);
    };

    rafId.current = requestAnimationFrame(updateParallax);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [speed, direction, easing, disabled, offset]);

  const getTransformStyle = () => {
    if (disabled) return {};
    
    switch (direction) {
      case 'up':
        return { transform: `translateY(${offset}px)` };
      case 'down':
        return { transform: `translateY(-${offset}px)` };
      case 'left':
        return { transform: `translateX(${offset}px)` };
      case 'right':
        return { transform: `translateX(-${offset}px)` };
      default:
        return { transform: `translateY(${offset}px)` };
    }
  };

  return { elementRef, getTransformStyle, offset };
};

// Advanced parallax with multiple layers
export const useMultiLayerParallax = (layers: Array<{ speed: number; direction: 'up' | 'down' | 'left' | 'right' }>) => {
  const [offsets, setOffsets] = useState<number[]>(new Array(layers.length).fill(0));
  const elementRef = useRef<HTMLElement>(null);
  const rafId = useRef<number>();

  useEffect(() => {
    const updateParallax = () => {
      if (!elementRef.current) return;

      const scrollY = window.scrollY;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const elementStart = elementTop - windowHeight;
      const elementEnd = elementTop + elementHeight;
      
      if (scrollY >= elementStart && scrollY <= elementEnd) {
        const progress = (scrollY - elementStart) / (elementEnd - elementStart);
        
        const newOffsets = layers.map((layer, index) => {
          const parallaxOffset = progress * layer.speed * 100;
          return parallaxOffset;
        });
        
        setOffsets(newOffsets);
      }
      
      rafId.current = requestAnimationFrame(updateParallax);
    };

    rafId.current = requestAnimationFrame(updateParallax);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [layers]);

  const getLayerStyles = () => {
    return layers.map((layer, index) => {
      const offset = offsets[index];
      
      switch (layer.direction) {
        case 'up':
          return { transform: `translateY(${offset}px)` };
        case 'down':
          return { transform: `translateY(-${offset}px)` };
        case 'left':
          return { transform: `translateX(${offset}px)` };
        case 'right':
          return { transform: `translateX(-${offset}px)` };
        default:
          return { transform: `translateY(${offset}px)` };
      }
    });
  };

  return { elementRef, getLayerStyles, offsets };
}; 