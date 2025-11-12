import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "API de gestion d'un parking de véhicules",
      description: "Ce projet avait pour but de développer un outil permettant de gérer un parking de véhicules d'une entreprise",
      image: project1,
      tags: ["Flask", "Bootstrap"],
      link: "#",
      github: "#",
    },
    {
      title: "Plateforme de location de gaz en ligne",
      description: "Application web permettant aux utilisateurs de rechercher et commander facilement du gaz depuis leur domicile, et aux dépôts d'accroître leur clientèle",
      image: project2,
      tags: ["Django", "Django REST Framework", "Bootstrap"],
      link: "https://delphan.pythonanywhere.com/",
      github: "https://github.com/Tsabeng/Platform-de-gaz",
    },
    {
      title: "Portfolio interactif",
      description: "Ce portfolio a pour but de montrer un petit bout de moi",
      image: project3,
      tags: ["React", "Tailwind CSS"],
      link: "https://delphan.netlify.app/",
      github: "https://github.com/Tsabeng/Projet-Groupe5-Testing-",
    },
    {
      title: "Application de vitrine de gestion d'une association (2-0)",
      description: "Application web de gestion complète pour une association, permettant la gestion des membres, des événements et des activités",
      image: project4,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "https://github.com/Tsabeng/Projet-JDDN",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-4">
                  <a 
                    href={project.link}
                    className="p-2 bg-primary rounded-full hover:bg-primary/90 transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.github}
                    className="p-2 bg-secondary rounded-full hover:bg-secondary/90 transition-colors"
                    aria-label="View code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
