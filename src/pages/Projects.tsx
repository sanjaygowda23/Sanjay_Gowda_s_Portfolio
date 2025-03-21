
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <Layout>
      <div className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              Exploring innovative solutions through technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ProjectCard
                title="Virtual Telemedicine System"
                description="Developed a telemedicine system to monitor patient vitals remotely, integrating IoT sensors to track heartbeat, temperature, and oxygen levels."
                technologies={["ESP32", "Heartbeat Sensor", "Temperature Sensor", "SpO2 Sensor", "Arduino IDE", "ThingSpeak", "VS-Code"]}
                outcomes={[
                  "Enabled real-time health monitoring with predictive alerts",
                  "Facilitated timely intervention through health risk predictions",
                  "Provided remote healthcare accessibility for rural areas",
                  "Integrated multiple IoT sensors for comprehensive vital tracking"
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ProjectCard
                title="Car Management System"
                description="Designed and implemented a web-based application to manage car servicing details, providing role-based access for service agents and customers."
                technologies={["HTML", "CSS", "JavaScript", "Java", "MySQL", "Apache Tomcat"]}
                outcomes={[
                  "Enhanced operational efficiency by automating service booking",
                  "Improved customer satisfaction by 30% through streamlined tracking",
                  "Implemented secure authentication and authorization features",
                  "Developed intuitive interfaces for both service agents and customers"
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ProjectCard
                title="AI Financial Agent"
                description="Developed an AI-powered financial assistant to analyze user queries, generate financial insights, and assist in decision-making using LLMs and AI agents."
                technologies={["Python", "LangChain", "OpenAI API", "FastAPI", "PhiData", "Groq LLM"]}
                outcomes={[
                  "Automated financial analysis, reducing manual effort",
                  "Improved decision accuracy through AI-driven insights",
                  "Integrated real-time financial data retrieval systems",
                  "Implemented natural language understanding for user-friendly interaction"
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ProjectCard
                title="Customer Segmentation Analysis"
                description="Implemented advanced clustering algorithms to segment retail customers based on purchasing behavior and demographics."
                technologies={["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "K-means"]}
                outcomes={[
                  "Identified 5 distinct customer segments for targeted marketing",
                  "Increased customer engagement rates by 20%",
                  "Developed visualization dashboards for business stakeholders",
                  "Created actionable insights for marketing strategy optimization"
                ]}
              />
            </motion.div>
          </div>

          <SectionHeading
            title="Other Notable Projects"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProjectCard
                title="Email Automation System"
                description="Developed an automated email system using SMTP for scheduled notifications and alerts."
                technologies={["Python", "SMTP", "Scheduling", "Email Templates"]}
                outcomes={[
                  "Reduced manual communication effort by 70%",
                  "Implemented customizable email templates",
                  "Created scheduling system for timed notifications"
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProjectCard
                title="Portfolio Website"
                description="Designed and built a responsive portfolio website to showcase professional work and skills."
                technologies={["HTML", "CSS", "JavaScript", "Responsive Design"]}
                outcomes={[
                  "Created mobile-first responsive layout",
                  "Implemented modern UI/UX principles",
                  "Optimized performance for various devices"
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ProjectCard
                title="Vehicle Detection System"
                description="Implemented computer vision algorithms to detect and classify vehicles in video streams."
                technologies={["Python", "OpenCV", "Machine Learning", "Object Detection"]}
                outcomes={[
                  "Achieved 85% accuracy in vehicle classification",
                  "Optimized for real-time processing on standard hardware",
                  "Integrated with existing surveillance systems"
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
