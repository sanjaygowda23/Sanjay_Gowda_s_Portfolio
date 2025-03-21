
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  outcomes,
  githubLink,
  liveLink,
  image,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Key Outcomes:</h4>
          <ul className="list-disc list-inside space-y-1">
            {outcomes.map((outcome, index) => (
              <li key={index} className="text-foreground/80 text-sm">
                {outcome}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4 mt-auto">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-2">
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </motion.a>
          )}
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
