import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Material Delivery",
    description: "Plataforma completa de e-commerce com painel administrativo (Dashboard Completo), carrinho de compras, integração de pagamento, integração de Mapa, Sistema de entrega, Sistema de chats.",
    tech: ["React", "Node.js", "MySQL", "Tailwind", "Docker", "AWS"],
    github: "",
    demo: "",
    gradient: "from-primary to-purple-600",
    image: "/projects/material-delivery.png",
  },
  {
    title: "🍔 Sistema de Pedidos e Gestão de Lanchonete",
    description: "Aplicação completa para gestão de lanchonetes, com pedidos online que são impressos automaticamente no local. Conta com um dashboard administrativo para controle de pedidos, cupons, entregas, cardápio e relatórios. Desenvolvido para agilizar o atendimento e otimizar a operação do negócio.",
    tech: ["VUE", "TypeScript", "Chart.js", "Tailwind"],
    demo: "https://www.pedidochefe.com.br/",
    gradient: "from-secondary to-blue-600",
    image: "/projects/pedido-chefe.png",
  },
  {
    title: "Sistema de Pagamentos com Mercado Pago",
    description: "Aplicação integrada ao Mercado Pago para processamento seguro e automatizado de pagamentos online. O sistema permite gerar cobranças, aprovar transações em tempo real e acompanhar o status de cada pagamento diretamente pelo painel administrativo. Desenvolvido com foco em segurança, praticidade e integração fluida com APIs modernas.",
    tech: ["Express", "Mercado Pago", "TypeScript"],
    github: "https://github.com/CaioRibeiroDev/api-payment-mercadopago",
    gradient: "from-purple-500 to-primary",
  },
  {
    title: "🥗 Coach Companion Form",
    description: "Aplicação desenvolvida para otimizar o acompanhamento entre nutricionistas e alunos. O usuário preenche todos os dados solicitados — como peso, medidas, hábitos e metas — e o sistema envia automaticamente essas informações para a conta do nutricionista, facilitando o acompanhamento e personalização do plano alimentar.",
    tech: ["Radix", "React", "Tailwind", "EmailJs", "TypeScript", "Vite"],
    github: "https://github.com",
    gradient: "from-cyan-500 to-secondary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos meus trabalhos mais recentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl overflow-hidden hover:glow-purple transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                {project.image ? 
                  <img src={project.image} alt=""/> 
                :
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20 group-hover:opacity-30 transition-all">
                        💻
                      </div>
                  </div>
                }
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass hover:bg-card/60"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;