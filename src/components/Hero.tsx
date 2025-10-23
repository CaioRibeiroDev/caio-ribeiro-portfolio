import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-glow-pulse" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Olá, eu sou{" "}
            <span className="gradient-text">Caio Ribeiro</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all glow-purple"
            onClick={() => scrollToSection("projects")}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass hover:bg-card/60"
            onClick={() => scrollToSection("contact")}
          >
            Entre em Contato
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a
            href="https://github.com/caioribeirodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors glow-purple p-3 rounded-full glass"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="http://linkedin.com/in/caioribeirodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-secondary transition-colors glow-cyan p-3 rounded-full glass"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:caioribeirodev@gmail.com"
            className="text-foreground/60 hover:text-accent transition-colors p-3 rounded-full glass"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll para próxima seção"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;