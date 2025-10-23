import { useState } from "react";
import { Code, Rocket, Award, Heart } from "lucide-react";

const timelineData = [
  {
    year: "2014",
    title: "Primeiros Passos",
    description: "Descobri a programação e me apaixonei pelo mundo do desenvolvimento web.",
    icon: Heart,
  },
  {
    year: "2015",
    title: "Projetos Iniciais",
    description: "Comecei a criar meus primeiros projetos pessoais e aprender novas tecnologias.",
    icon: Code,
  },
  {
    year: "2016",
    title: "Crescimento Acelerado",
    description: "Mergulhei em frameworks modernos e desenvolvi projetos mais complexos.",
    icon: Rocket,
  },
  {
    year: "2024-2025",
    title: "Nível Profissional",
    description: "Alcancei proficiência em desenvolvimento full stack e trabalho com projetos avançados.",
    icon: Award,
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Minha Jornada
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma linha do tempo interativa mostrando minha evolução como desenvolvedor
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div
                    className={`flex items-center gap-8 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} text-center`}>
                      <div
                        className={`glass p-6 rounded-xl transition-all duration-300 ${
                          isActive ? "glow-purple scale-105" : ""
                        }`}
                      >
                        <div className="text-2xl font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full glass flex items-center justify-center transition-all duration-300 ${
                          isActive ? "glow-cyan scale-110" : ""
                        }`}
                      >
                        <Icon className={`w-8 h-8 ${isActive ? "text-secondary" : "text-primary"}`} />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;