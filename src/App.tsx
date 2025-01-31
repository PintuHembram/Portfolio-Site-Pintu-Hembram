import React from 'react';
import { Github, Linkedin, Mail, Globe, Shield, Code, Server, BookOpen, Award, Briefcase, School, Target } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pintu Hembram</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Software Engineer & Cybersecurity Specialist</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Github size={24} /></a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
            <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Globe size={24} /></a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" 
            alt="Cybersecurity Illustration" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </header>

      {/* Expertise Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard 
              icon={<Code />}
              title="Software Development"
              description="Full-stack development with expertise in HTML, CSS, JavaScript, PHP, Python, and Java"
            />
            <ExpertiseCard 
              icon={<Shield />}
              title="Cybersecurity"
              description="Network security, penetration testing, and ethical hacking specialist"
            />
            <ExpertiseCard 
              icon={<Server />}
              title="IT Solutions"
              description="Cloud solutions, API development, and secure system architecture"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="space-y-8">
            <ExperienceCard 
              icon={<Briefcase />}
              title="Software Engineer"
              company="Hembram IT Solutions Pvt. Ltd."
              description="Leading development of secure web and mobile applications, implementing cybersecurity measures"
            />
            <ExperienceCard 
              icon={<School />}
              title="Computer Science Engineering"
              company="Education"
              description="Specialized in software development, cybersecurity, and emerging technologies"
            />
            <ExperienceCard 
              icon={<BookOpen />}
              title="Computer Science Teacher"
              company="Education Sector"
              description="Mentoring students in programming, ethical hacking, and web development"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="School Management System"
              description="AI-powered facial recognition system for automated attendance tracking"
              tags={["Python", "AI", "OpenCV"]}
            />
            <ProjectCard 
              title="E-commerce Platform"
              description="Secure online shopping platform with integrated payment gateway"
              tags={["React", "Node.js", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Pintu Hembram. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ExperienceCard({ icon, title, company, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
      <div className="flex items-center mb-4">
        <div className="text-blue-400 mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-500 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;