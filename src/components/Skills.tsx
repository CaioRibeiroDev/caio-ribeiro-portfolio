import { useEffect, useState } from "react";
import SkillsSection from "./SkillsSection";

const skillsData = [
  { name: "React / Next.js", level: 95, color: "from-primary to-purple-400" },
  { name: "TypeScript", level: 90, color: "from-secondary to-blue-400" },
  { name: "Node.js / Express", level: 85, color: "from-primary to-secondary" },
  { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-secondary" },
  { name: "PostgreSQL / MongoDB", level: 80, color: "from-purple-500 to-primary" },
  { name: "Git / GitHub", level: 88, color: "from-primary to-cyan-400" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <SkillsSection />
    // <section id="skills" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-card/20">
    //   <div className="max-w-4xl mx-auto">
    //     <div className="text-center mb-16 space-y-4 animate-fade-in">
    //       <h2 className="text-4xl md:text-5xl font-bold gradient-text">
    //         Habilidades
    //       </h2>
    //       <p className="text-muted-foreground text-lg">
    //         Tecnologias que domino e uso no dia a dia
    //       </p>
    //     </div>

    //     <div className="space-y-8">
    //       {skillsData.map((skill, index) => (
    //         <div
    //           key={skill.name}
    //           className="animate-fade-in"
    //           style={{ animationDelay: `${index * 0.1}s` }}
    //         >
    //           <div className="flex justify-between mb-2">
    //             <span className="text-lg font-medium">{skill.name}</span>
    //             <span className="text-muted-foreground">{skill.level}%</span>
    //           </div>
    //           <div className="h-4 bg-muted rounded-full overflow-hidden glass">
    //             <div
    //               className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full glow-purple`}
    //               style={{
    //                 width: isVisible ? `${skill.level}%` : "0%",
    //               }}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
    //       {["React", "TypeScript", "Node.js", "Tailwind"].map((tech, index) => (
    //         <div
    //           key={tech}
    //           className="glass p-6 rounded-xl text-center hover:glow-cyan transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
    //           style={{ animationDelay: `${0.6 + index * 0.1}s` }}
    //         >
    //           <div className="text-4xl mb-2">⚡</div>
    //           <div className="font-medium">{tech}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Skills;