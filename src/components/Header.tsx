import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    // Ensure smooth scrolling with fallback
    try {
      el.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      el.scrollIntoView();
    }
  } else {
    console.warn(`Element with id "${id}" not found`);
  }
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setFade(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        fade ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="glass brand-frame flex items-center justify-between rounded-lg px-4 py-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                const homeElement = document.getElementById("home");
                const heroElement = document.getElementById("hero-section");
                
                if (homeElement) {
                  scrollToId("home");
                } else if (heroElement) {
                  scrollToId("hero-section");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }, 100);
            }}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <BrandLogo size="md" />
            <span className="font-brand font-extrabold tracking-tight text-lg text-foreground/90">
              Innovative BIM Services
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="nav"
                size="sm"
                onClick={() => scrollToId(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-primary/40 text-foreground hover:bg-primary/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden glass brand-frame rounded-lg p-3 animate-fade-in">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="nav"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item.id);
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
