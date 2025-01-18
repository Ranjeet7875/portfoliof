import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, MenuIcon, XIcon, MapPinIcon, PhoneIcon, DownloadIcon } from 'lucide-react';
import Portphoto from './Imge&Resume/photos-Photoroom.png'
import Nyka from './Imge&Resume/nykaa.png'
import Task from './Imge&Resume/Task.png'
import Reebok from './Imge&Resume/reebok.png'
import Resume from './Imge&Resume/RanjeetShivprasadVishwakarma-FullStackWebDeveloper-jz3q.pdf'
import AboutImg from './Imge&Resume/rb_2147792093.png'
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about','resume', 'projects', 'skills', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      }
      return false;
    });
    if (current) {
      setActiveSection(current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Nykaa Clone WebSite",
      description: "Front End e-commerce solution with Javascript and Html & Css",
      tech: ["Html", "Css", "Firebase", "RestFull Api","Javascript"],
      image: Nyka
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform",
      tech: ["Javascript", "Css", "Html"],
      image: Task
    },
    {
      title: "Reebok Clone",
      description: "Content generation tool using OpenAI API",
      tech: ["Javascript", "Firebase", "RestFull Api","Html & Css"],
      image: Reebok
    }
  ];

  const skills = [
    { name: "Frontend", items: ["Html & Css","React", "Redux", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "MYSQL"] },
    { name: "Tools", items: ["Git", "RestFull Api", "Firebase"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Resume','Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-600 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ranjeet Vishwakarma</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">Full Stack Developer specializing in building exceptional digital experiences</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get in touch
                </a>
                <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  View Work
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={Portphoto} 
                alt="Profile" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={AboutImg} alt="About" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
              I am a passionate Full Stack Developer eager to build impactful web applications. I specialize in JavaScript and have hands-on experience with modern frameworks like React and Node.js through academic projects and personal development.
              </p>
              <p className="text-gray-600 mb-6">
              My approach emphasizes writing clean, efficient code and crafting intuitive, engaging user experiences. As a fresher, I am committed to continuous learning and contributing to innovative projects that solve real-world challenges.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Ranjeet7875" target="_blank" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  <GithubIcon size={20} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/ranjeet-vishwakarma-17v/" target="_blank" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  <LinkedinIcon size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="https://cyberspacecrusders011.netlify.app/" target="_blank" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                    View Project <ExternalLinkIcon size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Resume Section */}
<section id="resume" className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>
    
    <div className="flex justify-center mb-8">
      <a 
        href={Resume} 
        download
        target="_blank"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <DownloadIcon size={20} />
        Download Resume
      </a>
    </div>

    
  </div>
</section>
      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          My technical toolkit for building amazing applications
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-lg text-center text-gray-700 font-medium">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
<section id="contact" className="py-24 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-16 text-center">Contact Me</h2>
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-lg p-10">
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Contact Information</h3>
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <MapPinIcon className="text-blue-500" size={28} />
            <p className="text-xl text-gray-600">Mumbai, Maharashtra, India</p>
          </div>
          <div className="flex items-center gap-6">
            <MailIcon className="text-blue-500" size={28} />
            <p className="text-xl text-gray-600">ranvishwakarma122@gmail.com</p>
          </div>
          <div className="flex items-center gap-6">
            <PhoneIcon className="text-blue-500" size={28} />
            <p className="text-xl text-gray-600">+91 9923384993</p>
          </div>
        </div>
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/" target="_blank" className="text-gray-600 hover:text-blue-500 transition">
            <GithubIcon size={28} />
          </a>
          <a href="https://www.linkedin.com/in/ranjeet-vishwakarma-17v/" target="_blank" className="text-gray-600 hover:text-blue-500 transition">
            <LinkedinIcon size={28} />
          </a>
          <a href="mailto:ranvishwakarma122@gmail.com" target="_blank" className="text-gray-600 hover:text-blue-500 transition">
            <MailIcon size={28} />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-lg p-10">
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Send a Message</h3>
        <form className="space-y-8">
          <div>
            <label className="block text-gray-600 text-xl font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-xl font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-xl font-medium mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/Ranjeet7875" target="_blank" className="hover:text-blue-400 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ranjeet-vishwakarma-17v/" target="_blank" className="hover:text-blue-400 transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <MailIcon size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;