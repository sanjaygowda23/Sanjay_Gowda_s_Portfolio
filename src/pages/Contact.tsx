
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";

const Contact = () => {
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
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question or want to work together? Feel free to contact me!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <Card className="p-8 h-full" hoverEffect={false}>
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8 h-full" hoverEffect={false}>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:sanjay23802@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sanjay23802@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a
                        href="tel:+919113627807"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 9113627807
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        Bangalore, Karnataka, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/sanjaygowdabr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/sanjaygowdabr
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a
                        href="https://github.com/sanjaygowda23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/sanjaygowda23
                      </a>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
