import { Code2, Database, Layout, Server, Terminal, Wrench } from "lucide-react";
import SkillCard from "./SkillCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

// dados das skills
const skills = [
    { name: "React", icon: Code2, level: 95, category: "Frontend" },
    { name: "TypeScript", icon: Code2, level: 50, category: "Frontend" },
    { name: "Tailwind CSS", icon: Layout, level: 92, category: "Frontend" },
    { name: "Next.js", icon: Code2, level: 88, category: "Frontend" },
    { name: "Node.js", icon: Server, level: 85, category: "Backend" },
    { name: "PostgreSQL", icon: Database, level: 82, category: "Backend" },
    { name: "MongoDB", icon: Database, level: 80, category: "Backend" },
    { name: "REST APIs", icon: Server, level: 90, category: "Backend" },
    { name: "Git", icon: Terminal, level: 93, category: "Tools" },
    { name: "Docker", icon: Wrench, level: 78, category: "Tools" },
    { name: "VS Code", icon: Terminal, level: 95, category: "Tools" },
    { name: "Figma", icon: Layout, level: 85, category: "Tools" },
]

const allSkills = Object.values(skills).flat();

const SkillsSection = () => {

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Minhas Habilidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 backdrop-blur">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white ">
              Backend
            </TabsTrigger>
            <TabsTrigger value="tools" className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white">
              Ferramentas
            </TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white">
              Todas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.filter(skill => skill.category === "Frontend").map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.filter(skill => skill.category === "Backend").map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.filter(skill => skill.category === "Tools").map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;