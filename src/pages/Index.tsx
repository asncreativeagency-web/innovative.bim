import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import BrandLogo from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, ChevronLeft, ChevronRight, Mail, Phone, Linkedin, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import worldMap from "@/assets/world-map-bg.jpg";

interface SectionProps { id: string; title?: string; className?: string; subtitle?: string; children?: React.ReactNode }
const Section: React.FC<SectionProps> = ({ id, title, subtitle, className, children }) => (
  <section id={id} className={`container mx-auto px-4 py-20 ${className || ""}`}>
    {title && (
      <header className="mb-10 text-center">
        <h2 className="font-brand text-3xl md:text-4xl font-extrabold tracking-tight animate-fade-in">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </header>
    )}
    {children}
  </section>
);

const Index: React.FC = () => {
  const slides = useMemo(() => [slide1, slide2, slide3, slide4], []);
  const projects = useMemo(
    () => [
      { img: p1, title: "Interior Coordination" },
      { img: p2, title: "Structural Framing" },
      { img: p3, title: "Clash Detection" },
      { img: p4, title: "Night Exterior" },
      { img: p5, title: "LOD 500 Equipment" },
      { img: p6, title: "Infrastructure Bridge" },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "BIM Modeling",
        desc: "Architectural, Structural, and MEP models at LOD 200–500 with impeccable standards.",
      },
      {
        title: "Clash Coordination",
        desc: "Proactive clash detection and resolution workflows to keep construction seamless.",
      },
      {
        title: "Documentation",
        desc: "Construction drawings, schedules, and deliverables tailored to your needs.",
      },
      {
        title: "Automation & AI",
        desc: "Custom scripts and AI-assisted QA to supercharge speed and accuracy.",
      },
    ],
    []
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  const openLightbox = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };
  const nextLight = () => setLightboxIndex((i) => (i + 1) % projects.length);
  const prevLight = () => setLightboxIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <main>
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center"
        style={{ backgroundImage: `var(--gradient-hero), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl brand-frame glass rounded-xl p-8 md:p-12 animate-enter">
            <BrandLogo size="lg" className="mb-4" />
            <h1 className="font-brand text-4xl md:text-6xl font-extrabold leading-tight">
              Blueprinting the future of BIM for visionary creators.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Innovative, efficient, AI-powered BIM for freelancers and businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="xl" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Our Work <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="glow" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 brand-glow" />
      </section>

      {/* Services */}
      <Section id="services" title="Services" subtitle="Rectangular precision. Blue-framed excellence.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="brand-frame glass rounded-lg p-5 hover-scale animate-fade-in">
              <h3 className="font-brand text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects: Slideshow + Gallery */}
      <Section id="projects" title="Projects" subtitle="A selection of BIM work framed by our blue signature.">
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="brand-frame rounded-xl p-2">
            <CarouselContent>
              {slides.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
                    <img src={src} alt={`Project slide ${i+1}`} className="h-full w-full object-cover" loading={i>0?"lazy":"eager"} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass" />
            <CarouselNext className="glass" />
          </Carousel>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i+1}`}
                onClick={() => api?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-sm border ${selected===i?"bg-primary border-primary":"border-primary/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <figure key={p.title} className="group cursor-pointer brand-frame rounded-lg overflow-hidden" onClick={()=>openLightbox(i)}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              </div>
              <figcaption className="p-3 text-center font-brand font-semibold group-hover:text-primary transition-colors">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl brand-frame glass">
            <DialogHeader>
              <DialogTitle className="font-brand">{projects[lightboxIndex]?.title}</DialogTitle>
            </DialogHeader>
            <div className="relative">
              <img src={projects[lightboxIndex]?.img} alt={projects[lightboxIndex]?.title} className="w-full rounded-md" />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button variant="glow" size="icon" onClick={prevLight} aria-label="Previous image"><ChevronLeft/></Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button variant="glow" size="icon" onClick={nextLight} aria-label="Next image"><ChevronRight/></Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Section>

      {/* About */}
      <Section id="about" title="About Us" subtitle="Process-driven. Globally capable. Relentlessly innovative.">
        <div className="relative brand-frame glass rounded-xl p-6 overflow-hidden" style={{backgroundImage:`url(${worldMap})`, backgroundSize:'cover', backgroundPosition:'center', backgroundBlendMode:'overlay'}}>
          <div className="relative z-10">
            <ol className="grid md:grid-cols-7 gap-3 text-center">
              {["Client Inputs","Review","Planning","Production","QC","Output","Feedback"].map((step) => (
                <li key={step} className="px-3 py-3 rounded-md bg-background/60 border border-primary/40 font-brand text-sm">
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
              We partner with architects, engineers, contractors, and freelancers worldwide, delivering precise, AI-enhanced BIM across time zones with uncompromising quality.
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none brand-glow"/>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s frame your next project in blue.">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
          <a href="mailto:hello@innovativebim.example" className="brand-frame glass rounded-lg p-5 flex items-center gap-3 hover-scale">
            <Mail className="text-primary" /> <span>hello@innovativebim.example</span>
          </a>
          <a href="tel:+10000000000" className="brand-frame glass rounded-lg p-5 flex items-center gap-3 hover-scale">
            <Phone className="text-primary" /> <span>+1 (000) 000-0000</span>
          </a>
          <a href="https://www.linkedin.com/company/innovativebimservices/" target="_blank" rel="noopener noreferrer" className="brand-frame glass rounded-lg p-5 flex items-center gap-3 hover-scale">
            <Linkedin className="text-primary" /> <span>LinkedIn</span>
          </a>
        </div>
      </Section>

      <footer className="py-10 border-t border-primary/20 bg-background">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/lovable-uploads/32e39393-6068-41d7-9bc8-96d7fbdb5a9c.png" alt="Innovative BIM Services" className="h-6 w-auto" />
            <span>© {new Date().getFullYear()} Innovative BIM Services</span>
          </div>
          <p>Built with love and precision. All rights reserved.</p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a 
              href="https://www.linkedin.com/company/innovativebimservices/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
