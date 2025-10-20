import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Développement",
      description: "Code propre et maintenable avec les dernières technologies web",
    },
    {
      icon: <Palette className="w-8 h-8 text-secondary" />,
      title: "Design",
      description: "Interfaces élégantes et intuitives pour une expérience utilisateur optimale",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Performance",
      description: "Applications rapides et optimisées pour tous les appareils",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="text-gradient">propos</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-12 animate-fade-up">
          <div className="md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img 
                src={profileImg} 
                alt="Delphan Tsabeng" 
                className="relative w-full rounded-2xl shadow-2xl border-2 border-primary/20 object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4 text-muted-foreground">
            <p className="text-lg">
              Je suis un développeur frontend avec une large connaissance des technologies du domaine.
              Je maîtrise les bases du développement backend pour créer des APIs robustes.
            </p>
            <p className="text-lg">
              Passionné par le code propre et les architectures modernes, je transforme vos idées en applications performantes et élégantes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-block p-3 bg-background rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
