import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Flask", "REST API"],
    },
    {
      title: "Expériences professionnelles",
      skills: ["Infolab Technologie - Frontend (2023)", "Infolab Technologie - FullStack (2025-Present)"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des projets exceptionnels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="px-4 py-2 text-sm bg-background border-primary/30 hover:bg-primary/10 transition-colors cursor-default shadow-card"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
