import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
  category: string;
}


const SkillCard = ({ name, icon: Icon, level, category }: SkillCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-hover cursor-pointer">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors duration-300" />
          <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
            {category}
          </span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          
          {/* <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Proficiência</span>
              <span className="text-primary font-medium">{level}%</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-hero transition-all duration-1000 ease-out bg-secondary"
                style={{ width: `${level}%` }}
              />
            </div>
          </div> */}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </Card>
  );
};

export default SkillCard;