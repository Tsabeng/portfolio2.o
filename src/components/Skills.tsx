import { Badge } from "@/components/ui/badge";
import { Code2, Server, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
      gradient: "from-primary via-accent to-primary",
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Python", "Django", "Flask", "REST API"],
      gradient: "from-accent via-secondary to-accent",
    },
    {
      title: "Expériences professionnelles",
      icon: <Briefcase className="w-8 h-8" />,
      skills: ["Infolab Technologie - Frontend (2023)", "Infolab Technologie - FullStack (2025-Present)"],
      gradient: "from-secondary via-primary to-secondary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Compétences & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des projets exceptionnels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500`}></div>
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-background shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="px-4 py-2.5 text-sm font-medium bg-background/80 border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/10 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg group/badge"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/badge:opacity-20 rounded transition-opacity duration-300`}></div>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/60 backdrop-blur-sm border border-primary/30 rounded-full shadow-glow">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-muted-foreground">Toujours en apprentissage de nouvelles technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
