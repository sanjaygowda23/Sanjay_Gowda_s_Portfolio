
import React from "react";
import { motion } from "framer-motion";
import { Camera, Briefcase, GraduationCap, Clock, Languages } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import SkillBadge from "@/components/SkillBadge";

const About = () => {
  const interests = ["Volunteering", "Photography", "Learning Languages"];
  
  const timeline = [
    {
      year: "2024",
      title: "Advanced Data Analytics Intern",
      organization: "Edunet Foundation",
      description: "Cleaned large retail datasets for customer segmentation using K-means clustering."
    },
    {
      year: "2023",
      title: "Full Stack Development Intern",
      organization: "Varcons Technologies Pvt Ltd",
      description: "Built mobile-responsive applications and deployed a portfolio website."
    },
    {
      year: "2023",
      title: "Machine Learning Intern",
      organization: "Take It Smart (OPC) Pvt Ltd",
      description: "Developed predictive models for dietary needs and vehicle detection using OpenCV."
    },
    {
      year: "2020",
      title: "Started Bachelor of Engineering",
      organization: "Vivekananda Institute of Technology",
      description: "Began journey in Computer Science and Engineering."
    },
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
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground">
              I'm Sanjay Gowda, a Computer Science Engineer passionate about creating technical solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="p-8 h-full" hoverEffect={false}>
                <SectionHeading title="My Journey" className="mb-6" />
                <div className="space-y-4 text-foreground/90">
                  <p>
                    Hello! I'm a recent Computer Science Engineering graduate from Vivekananda Institute of Technology, Bangalore. Throughout my academic journey, I've developed a strong foundation in various programming languages, frameworks, and technologies.
                  </p>
                  <p>
                    My passion lies at the intersection of software development and artificial intelligence. I've had the opportunity to explore these interests through multiple internships, where I've worked on everything from predictive modeling and data analytics to full-stack development.
                  </p>
                  <p>
                    One of my key strengths is my ability to adapt to new technologies and solve complex problems. I believe in building solutions that are not only technically sound but also user-friendly and accessible.
                  </p>
                  <p>
                    In addition to my technical skills, I value teamwork, clear communication, and meticulous attention to detail. I'm excited to continue learning and growing as a professional in the ever-evolving tech landscape.
                  </p>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8 h-full" hoverEffect={false}>
                <SectionHeading title="Education" className="mb-6" />
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      <h3 className="font-bold">Bachelor of Engineering</h3>
                    </div>
                    <p className="text-foreground/90">Computer Science and Engineering</p>
                    <p className="text-muted-foreground">Vivekananda Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">
                      Dec 2020 - May 2024
                    </p>
                    <p className="text-sm font-medium mt-1">GPA: 7.66</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      <h3 className="font-bold">Pre-University Course</h3>
                    </div>
                    <p className="text-foreground/90">PCMB</p>
                    <p className="text-muted-foreground">BGS Pu College, Ramanagara</p>
                    <p className="text-sm text-muted-foreground">
                      April 2019 - March 2020
                    </p>
                    <p className="text-sm font-medium mt-1">Percentage: 76.66</p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      <h3 className="font-bold">SSLC</h3>
                    </div>
                    <p className="text-muted-foreground">St. Michel's English High School, Ramanagara</p>
                    <p className="text-sm text-muted-foreground">
                      May 2017 - April 2018
                    </p>
                    <p className="text-sm font-medium mt-1">Percentage: 83.04</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <SectionHeading title="Professional Timeline" align="center" className="mb-12" />
          <div className="relative max-w-3xl mx-auto mb-16">
            {/* Timeline line */}
            <div className="absolute h-full w-0.5 bg-border left-16 ml-px"></div>

            {/* Timeline events */}
            {timeline.map((event, index) => (
              <div key={index} className="relative pl-24 mb-12">
                {/* Timeline dot */}
                <div className="absolute left-16 -translate-x-1/2 w-7 h-7 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>

                {/* Timeline year */}
                <div className="absolute left-0 top-0 font-bold text-primary text-xl">
                  {event.year}
                </div>

                {/* Timeline content */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-muted-foreground mb-3">{event.organization}</p>
                  <p className="text-foreground/90">{event.description}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-bold">Professional Course</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium">Java Full Stack Development</h4>
                  <p className="text-sm text-muted-foreground">Jspiders</p>
                  <p className="text-sm text-muted-foreground">Feb 2024 - Sep 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Languages className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-primary">Advanced</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full w-11/12"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Kannada</span>
                    <span className="text-sm text-primary">Native</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full w-full"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Hindi</span>
                    <span className="text-sm text-primary">Advanced</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full w-10/12"></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Camera className="w-5 h-5 mr-2 text-primary" />
                <h3 className="text-xl font-bold">Interests</h3>
              </div>
              <div className="flex flex-wrap">
                {interests.map((interest, index) => (
                  <SkillBadge key={interest} skill={interest} index={index} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
