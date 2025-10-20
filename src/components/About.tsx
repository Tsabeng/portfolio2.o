import { Code2, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Je suis un développeur frontend avec une large connaissance des technologies du domaine.
            Je maîtrise les bases du développement backend pour créer des APIs robustes.
          </p>
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
