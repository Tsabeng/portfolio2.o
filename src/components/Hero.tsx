import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <img 
              src={profileImg} 
              alt="Delphan Tsabeng" 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
            />
          </div>
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Bonjour, je suis{" "}
              <span className="text-gradient">Delphan Tsabeng</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Je suis un développeur fullstack utilisant React et Django. Contactez-moi si vous avez besoin de mes services.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 shadow-glow"
              >
                Voir mes projets
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8 text-primary animate-glow" />
      </button>
    </section>
  );
};

export default Hero;
