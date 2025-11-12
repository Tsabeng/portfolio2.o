import { GraduationCap, Briefcase, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const timelineData = [
    {
      year: "2024",
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formation Développement Web",
      institution: "Auto-formation & Projets personnels",
      description: "Spécialisation en React, Django et développement fullstack moderne",
      skills: ["React", "Django", "TypeScript", "Tailwind CSS"],
    },
    {
      year: "2023-2024",
      type: "professional",
      icon: <Code className="w-6 h-6" />,
      title: "Projets Freelance",
      institution: "Développeur Fullstack",
      description: "Développement d'applications web pour diverses associations et clients",
      skills: ["Flask", "Bootstrap", "API REST", "PostgreSQL"],
    },
    {
      year: "2023",
      type: "project",
      icon: <Briefcase className="w-6 h-6" />,
      title: "Application de Gestion d'Association",
      institution: "Projet JDDN",
      description: "Développement d'une application de vitrine de gestion complète pour association",
      skills: ["Django", "React", "Gestion utilisateurs"],
    },
    {
      year: "2022-2023",
      type: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Apprentissage du Développement",
      institution: "Formation autodidacte",
      description: "Maîtrise des fondamentaux du développement web et des bonnes pratiques",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-primary to-primary/60";
      case "professional":
        return "from-secondary to-secondary/60";
      case "project":
        return "from-accent to-accent/60";
      default:
        return "from-primary to-secondary";
    }
  };

  const getTypeBackground = (type: string) => {
    switch (type) {
      case "education":
        return "bg-primary/10 border-primary/30";
      case "professional":
        return "bg-secondary/10 border-secondary/30";
      case "project":
        return "bg-accent/10 border-accent/30";
      default:
        return "bg-primary/10 border-primary/30";
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une chronologie de mon évolution professionnelle et éducative
          </p>
        </div>

        <div className="relative">
          {/* Ligne centrale verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Alternance gauche/droite sur desktop */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <Card className={`group hover:shadow-glow transition-all duration-500 hover:scale-105 border-2 ${getTypeBackground(item.type)} backdrop-blur-sm overflow-hidden`}>
                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3 justify-between">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          {item.year}
                        </Badge>
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${getTypeColor(item.type)} text-primary-foreground`}>
                          {item.icon}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-primary font-semibold mb-3">{item.institution}</p>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="hover:scale-110 transition-transform duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Point central avec animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} border-4 border-background shadow-lg animate-pulse`}></div>
                  <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} opacity-50 animate-ping`}></div>
                </div>

                {/* Espace vide pour l'alternance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>

          {/* Indicateur de fin */}
          <div className="flex justify-center mt-12">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-glow animate-pulse">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-xl animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
