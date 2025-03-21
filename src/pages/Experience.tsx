
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import Card from "@/components/Card";
import SkillBadge from "@/components/SkillBadge";

const Experience = () => {
  const skills = [
    "Java", "Python", "JavaScript", "HTML", "CSS", "SQL", "XML", "JSON",
    "JDBC", "Servlets", "Hibernate", "Spring Boot", "RESTful API",
    "Flask", "FastAPI", "LangChain", "Machine Learning", "AI Agents",
    "Retrieval-Augmented Generation", "OpenAI API", "LLMs"
  ];
  
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
            <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
            <p className="text-xl text-muted-foreground">
              My journey through internships and projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <SectionHeading title="Work Experience" className="mb-8" />
              
              <ExperienceCard
                title="Advanced Data Analytics Intern"
                company="Edunet Foundation, Bangalore, KA"
                period="Feb 2024 – Apr 2024"
                description={[
                  "Cleaned large retail datasets for customer segmentation, utilizing K-means clustering for targeted marketing strategies.",
                  "Improved customer engagement rates by 20% through data-driven insights.",
                  "Collaborated with a cross-functional team to implement clustering algorithms that identified distinct customer segments."
                ]}
                skills={["Data Analytics", "K-means Clustering", "Python", "Data Cleaning"]}
              />
              
              <ExperienceCard
                title="Full Stack Development Intern"
                company="Varcons Technologies Pvt Ltd, Remote"
                period="Aug 2023 – Sep 2023"
                description={[
                  "Built mobile-responsive applications and deployed a portfolio website.",
                  "Contributed to end-to-end development of web applications.",
                  "Collaborated with stakeholders to gather requirements and ensure smooth functionality of developed applications."
                ]}
                skills={["HTML", "CSS", "JavaScript", "Responsive Design", "Deployment"]}
              />
              
              <ExperienceCard
                title="Machine Learning Intern"
                company="Take It Smart (OPC) Pvt Ltd, Bangalore, KA"
                period="Aug 2023 – Sep 2023"
                description={[
                  "Developed predictive models for dietary needs, vehicle detection using OpenCV, and automated email systems with SMTP.",
                  "Collaborated with senior engineers to improve model accuracy by 15%.",
                  "Implemented image processing algorithms for real-time vehicle detection in video streams."
                ]}
                skills={["Machine Learning", "OpenCV", "Python", "SMTP", "Predictive Modeling"]}
              />
              
              <SectionHeading title="Projects" className="mb-8 mt-16" />
              
              <ExperienceCard
                title="Virtual Telemedicine System for Remote Health Monitoring"
                company="Academic Project"
                period="2023"
                description={[
                  "Developed a telemedicine system to monitor patient vitals remotely, integrating IoT sensors to track heartbeat, temperature, and oxygen levels.",
                  "Implemented machine learning algorithms to predict potential health risks based on real-time data.",
                  "Enabled real-time health monitoring with predictive alerts, facilitating timely intervention and remote healthcare for rural areas."
                ]}
                skills={["ESP32", "IoT", "Arduino IDE", "ThingSpeak", "VS-Code"]}
              />
              
              <ExperienceCard
                title="Car Management System"
                company="Academic Project"
                period="2022"
                description={[
                  "Designed and implemented a web-based application to manage car servicing details, providing role-based access for service agents and customers.",
                  "Integrated secure authentication and authorization features.",
                  "Enhanced operational efficiency by automating service booking and tracking processes, improving customer satisfaction by 30%."
                ]}
                skills={["HTML", "CSS", "JavaScript", "Java", "MySQL", "Apache Tomcat"]}
              />
              
              <ExperienceCard
                title="AI Financial Agent"
                company="Personal Project"
                period="2023"
                description={[
                  "Developed an AI-powered financial assistant to analyze user queries, generate financial insights, and assist in decision-making using LLMs and AI agents.",
                  "Integrated real-time financial data retrieval and natural language understanding for user-friendly interaction.",
                  "Automated financial analysis, reducing manual effort and improving decision accuracy."
                ]}
                skills={["Python", "LangChain", "OpenAI API", "FastAPI", "PhiData", "Groq LLM"]}
              />
            </div>
            
            <div className="space-y-8">
              <Card className="p-6">
                <SectionHeading title="Education" className="mb-6" />
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Bachelor of Engineering</h3>
                    <p className="text-sm">Computer Science and Engineering</p>
                    <p className="text-sm text-muted-foreground">Vivekananda Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Dec 2020 – May 2024</p>
                    <p className="text-sm font-medium mt-1">GPA: 7.66</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Pre-University Course</h3>
                    <p className="text-sm">PCMB</p>
                    <p className="text-sm text-muted-foreground">BGS Pu College, Ramanagara</p>
                    <p className="text-sm text-muted-foreground">April 2019 – March 2020</p>
                    <p className="text-sm font-medium mt-1">Percentage: 76.66</p>
                  </div>
                  <div>
                    <h3 className="font-bold">SSLC</h3>
                    <p className="text-sm text-muted-foreground">St. Michel's English High School, Ramanagara</p>
                    <p className="text-sm text-muted-foreground">May 2017 – April 2018</p>
                    <p className="text-sm font-medium mt-1">Percentage: 83.04</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <SectionHeading title="Courses" className="mb-6" />
                <div>
                  <h3 className="font-bold">Java Full Stack Development</h3>
                  <p className="text-sm text-muted-foreground">Jspiders</p>
                  <p className="text-sm text-muted-foreground">Feb 2024 - Sep 2024</p>
                  <p className="text-sm mt-2">
                    Comprehensive training in Java-based full stack development covering core Java, JDBC, Servlets, Hibernate, Spring Boot, REST APIs, and frontend technologies.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <SectionHeading title="Skills" className="mb-6" />
                <div className="flex flex-wrap">
                  {skills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
