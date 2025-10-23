import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "caioribeirodev@gmail.com",
      href: "mailto:caioribeirodev@gmail.com",
      icon: Mail,
      gradient: "from-primary to-purple-500",
    },
    {
      name: "LinkedIn",
      value: "/caioribeirodev",
      href: "http://linkedin.com/in/caioribeirodev",
      icon: Linkedin,
      gradient: "from-secondary to-blue-500",
    },
    {
      name: "GitHub",
      value: "/caioribeirodev",
      href: "https://github.com/caioribeirodev",
      icon: Github,
      gradient: "from-purple-500 to-primary",
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-t from-card/20 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Estou sempre aberto a novos projetos e oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-xl p-6 text-center hover:glow-purple transition-all duration-300 hover:scale-105 group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:glow-cyan`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.name}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="glass rounded-xl p-8 text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Pronto para começar?</h3>
            <p className="text-muted-foreground">
              Entre em contato e vamos transformar suas ideias em realidade
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-purple"
            asChild
          >
            <a href="mailto:caioribeirodev@gmail.com">
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </a>
          </Button>
        </div>

        {/* Easter egg hint - sutil */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
            💜 Feito com paixão e código
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;