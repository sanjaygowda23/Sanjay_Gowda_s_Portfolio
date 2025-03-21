
import React from "react";
import { Calendar } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-lg font-medium text-foreground/90">{company}</p>
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            <span>{period}</span>
          </div>
        </div>

        <div className="mt-2">
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {description.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {skills.map((skill, index) => (
              <Badge key={index} className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ExperienceCard;
