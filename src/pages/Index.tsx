import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center border-t border-border/50 bg-card/50">
        <p className="text-muted-foreground">
          © 2024 Delphan Tsabeng. Fait avec ❤️ et React.
        </p>
      </footer>
    </div>
  );
};

export default Index;
