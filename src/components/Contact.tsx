import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-6 h-6" />, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en !
          </p>
        </div>

        <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <p className="text-xl text-muted-foreground">
                Je suis toujours intéressé par de nouveaux projets et opportunités.
                N'hésitez pas à me contacter !
              </p>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-glow"
                asChild
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer un message
                </a>
              </Button>

              <div className="flex justify-center gap-4 pt-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="p-3 bg-background rounded-full hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-card"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
