
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  "Java", "Python", "JavaScript", "HTML", "CSS", "SQL", 
  "Machine Learning", "RESTful API", "Spring Boot", "JDBC", 
  "Hibernate", "Flask", "FastAPI", "LangChain", "AI Agents",
  "LLMs", "Servlets", "Problem Solving"
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                Computer Science Engineer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                I'm Sanjay Gowda B R
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                A passionate engineer focused on building innovative solutions and exploring new technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-foreground font-medium shadow-sm hover:bg-secondary/70 transition-colors"
                >
                  View Projects
                </motion.a>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/sanjaygowda23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground hover:text-primary rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjaygowdabr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-foreground hover:text-primary rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:sanjay23802@gmail.com"
                  className="p-2 text-foreground hover:text-primary rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+919113627807"
                  className="p-2 text-foreground hover:text-primary rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="perspective"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 shadow-xl rotate-y-12 transition-transform-slow hover-rotate-y-0">
                <div className="glass rounded-xl p-6 h-full">
                  <h2 className="text-xl font-bold mb-3">Core Skills</h2>
                  <div className="flex flex-wrap">
                    {skills.slice(0, 12).map((skill, index) => (
                      <SkillBadge key={skill} skill={skill} index={index} />
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mt-6 mb-3">Experience</h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <h3 className="font-medium">Machine Learning Intern</h3>
                      <p className="text-sm text-muted-foreground">Take It Smart (OPC) Pvt Ltd</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <h3 className="font-medium">Full Stack Development Intern</h3>
                      <p className="text-sm text-muted-foreground">Varcons Technologies Pvt Ltd</p>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <h3 className="font-medium">Advanced Data Analytics Intern</h3>
                      <p className="text-sm text-muted-foreground">Edunet Foundation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-16"
          >
            <a
              href="#about"
              className="animate-float flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="section-container">
          <SectionHeading title="About Me" subtitle="Get to know me" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 p-6">
              <h3 className="text-xl font-bold mb-4">Who am I?</h3>
              <div className="space-y-4 text-foreground/80">
                <p>
                  I'm a passionate Computer Science Engineer with a strong foundation in both frontend and backend technologies, as well as machine learning and AI.
                </p>
                <p>
                  During my academic journey at Vivekananda Institute of Technology, I've developed a keen interest in building innovative solutions that solve real-world problems. My experience spans across predictive modeling, full-stack development, and data analytics.
                </p>
                <p>
                  I enjoy diving into complex challenges and working collaboratively to create elegant, efficient solutions. My approach combines technical expertise with a strong focus on user experience and business requirements.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  Learn more about me
                </Link>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Bachelor of Engineering in Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Vivekananda Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">GPA: 7.66 (2020-2024)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Pre-University (PCMB)</h4>
                    <p className="text-sm text-muted-foreground">BGS Pu College, Ramanagara</p>
                    <p className="text-sm text-muted-foreground">76.66% (2019-2020)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">SSLC</h4>
                    <p className="text-sm text-muted-foreground">St. Michel's English High School</p>
                    <p className="text-sm text-muted-foreground">83.04% (2018)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-11/12"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kannada</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Hindi</span>
                    <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-10/12"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <SectionHeading
            title="My Skills"
            subtitle="What I can do"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary/20 text-primary flex items-center justify-center">1</span>
                Programming Languages
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Java" index={0} />
                <SkillBadge skill="Python" index={1} />
                <SkillBadge skill="JavaScript" index={2} />
                <SkillBadge skill="HTML" index={3} />
                <SkillBadge skill="CSS" index={4} />
                <SkillBadge skill="SQL" index={5} />
                <SkillBadge skill="XML" index={6} />
                <SkillBadge skill="JSON" index={7} />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary/20 text-primary flex items-center justify-center">2</span>
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="JDBC" index={0} />
                <SkillBadge skill="Servlets" index={1} />
                <SkillBadge skill="Hibernate" index={2} />
                <SkillBadge skill="Spring Boot" index={3} />
                <SkillBadge skill="RESTful API" index={4} />
                <SkillBadge skill="Flask" index={5} />
                <SkillBadge skill="FastAPI" index={6} />
                <SkillBadge skill="LangChain" index={7} />
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="inline-block w-8 h-8 mr-3 rounded-full bg-primary/20 text-primary flex items-center justify-center">3</span>
                AI/ML & Soft Skills
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Machine Learning" index={0} />
                <SkillBadge skill="AI Agents" index={1} />
                <SkillBadge skill="LLMs" index={2} />
                <SkillBadge skill="RAG" index={3} />
                <SkillBadge skill="OpenAI API" index={4} />
                <SkillBadge skill="Problem Solving" index={5} />
                <SkillBadge skill="Teamwork" index={6} />
                <SkillBadge skill="Communication" index={7} />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="section-container">
          <SectionHeading
            title="Featured Projects"
            subtitle="What I've built"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Virtual Telemedicine System"
              description="A remote health monitoring system integrating IoT sensors to track patient vitals."
              technologies={["ESP32", "Arduino IDE", "ThingSpeak", "IoT Sensors", "VS-Code"]}
              outcomes={[
                "Enabled real-time health monitoring with predictive alerts",
                "Facilitated remote healthcare for rural areas",
                "Integrated heartbeat, temperature, and SpO2 sensors"
              ]}
            />
            
            <ProjectCard
              title="Car Management System"
              description="A web-based application to manage car servicing details with role-based access."
              technologies={["HTML", "CSS", "JavaScript", "Java", "MySQL", "Apache Tomcat"]}
              outcomes={[
                "Enhanced operational efficiency by automating processes",
                "Improved customer satisfaction by 30%",
                "Implemented secure authentication and authorization"
              ]}
            />
            
            <ProjectCard
              title="AI Financial Agent"
              description="An AI-powered financial assistant for analysis, insights, and decision-making."
              technologies={["Python", "LangChain", "OpenAI API", "FastAPI", "PhiData", "Groq LLM"]}
              outcomes={[
                "Automated financial analysis reducing manual effort",
                "Improved decision accuracy with AI-driven insights",
                "Integrated real-time financial data retrieval"
              ]}
            />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-foreground font-medium shadow-sm hover:bg-secondary/70 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
