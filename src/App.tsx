import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaDocker, FaGit, FaJava, FaMicrosoft, FaPython, FaLinux, FaApple, FaDatabase, FaMoon, FaSun, FaDownload, FaBook, FaCode } from 'react-icons/fa'
import { SiGo, SiJira, SiCircleci, SiHashnode, SiCisco, SiCplusplus, SiLeetcode } from 'react-icons/si'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Achievements', 'Interests'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-text relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gradient">PJ</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Background Pattern */}
      <div className="fixed inset-0 hero-pattern opacity-50 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center animate-fade-in mb-16">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-75"></div>
            <img
              src="/portfolio/profile-placeholder.jpg"
              alt="Priti Jha"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/200x200?text=PJ';
              }}
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-gradient">
            Priti Jha
          </h1>
          <p className="text-xl text-secondary mb-6 animate-slide-up">
            Software Engineer at Microsoft
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:Jhapriti764@gmail.com" className="nav-link">
              <FaEnvelope className="text-2xl" />
            </a>
            <a href="https://github.com/PRITI24" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/priti-jha-14b96317a" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://pritijha.hashnode.dev" target="_blank" rel="noopener noreferrer" className="nav-link">
              <SiHashnode className="text-2xl" />
            </a>
          </div>
          <div className="text-secondary animate-scale-in mb-8">
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              +91-9702776348
            </p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1gvfvKMhKaU7EqH090EcozVc_jmlHnM0p/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaDownload className="text-lg" />
            View Resume
          </a>
        </div>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">About</h2>
          <div className="card card-hover">
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Hi, I'm Priti
            </h3>
            <div className="space-y-4 text-lg text-secondary leading-relaxed">
              <p>
                A Software Engineer at Microsoft, currently working on the Edge browser with Chromium-based architecture, specializing in C++ and large-scale system development. With over 4 years of experience spanning data engineering, backend development (including Golang, AWS), and browser systems, I bring a unique blend of analytical depth and hands-on execution.
              </p>
              <p>
                I'm deeply interested in performance optimization, concurrency, and building impactful products. Passionate about learning, I enjoy exploring new domains, experimenting with scalable architectures, and pushing the boundaries of my technical growth. Based in Hyderabad, I'm currently diving into AI/ML, systems design, and product thinking alongside my day-to-day engineering work.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Experience</h2>
          <div className="space-y-8">
            <div className="card card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <FaMicrosoft className="text-2xl text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Microsoft</h3>
                    <p className="text-secondary">Software Engineer</p>
                  </div>
                </div>
                <p className="text-secondary">May 2024 - Present</p>
              </div>
              <p className="text-secondary">
                Working in Edge team for ENP Migration leveraging technologies like C++.
              </p>
            </div>

            <div className="card card-hover">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <SiCisco className="text-2xl text-[#049fd9]" />
                  <div>
                    <h3 className="text-xl font-bold">Cisco</h3>
                    <p className="text-secondary">Software Engineer</p>
                  </div>
                </div>
                <p className="text-secondary">August 2021 - May 2024</p>
              </div>
              <ul className="list-disc list-inside text-secondary space-y-2">
                <li>Enhanced Customer experience by leveraging AWS services, implementing Rest Framework like Gin, containerizing with Docker, and developing in Golang; reduced response time by 40% and increased overall system efficiency by 25%.</li>
                <li>Exposure to CI/CD using CircleCI and Github, Quality code with sonar.</li>
                <li>Developing Golang code, Pyspark code, Writing unit tests and Maintaining Git workflows.</li>
                <li>Developed an internal Git portal using Python, Angular and PostgreSQL.</li>
                <li>Mentor new joiners in hackathon and team projects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="skill-icon-wrapper">
              <h3 className="font-bold mb-4 text-gradient">Cloud</h3>
              <div className="space-y-2">
                <div className="skill-icon">
                  <FaAws className="text-xl" />
                  <span>AWS Services</span>
                </div>
                <ul className="text-sm text-secondary pl-6 space-y-1">
                  <li className="hover:text-primary transition-colors">Lambda</li>
                  <li className="hover:text-primary transition-colors">Fargate</li>
                  <li className="hover:text-primary transition-colors">S3</li>
                  <li className="hover:text-primary transition-colors">DynamoDB</li>
                  <li className="hover:text-primary transition-colors">EventBridge</li>
                  <li className="hover:text-primary transition-colors">SNS/SQS</li>
                </ul>
              </div>
            </div>
            
            <div className="skill-icon-wrapper">
              <h3 className="font-bold mb-4 text-gradient">Languages</h3>
              <div className="space-y-2">
                <div className="skill-icon">
                  <SiCplusplus className="text-xl" />
                  <span>C++</span>
                </div>
                <div className="skill-icon">
                  <SiGo className="text-xl" />
                  <span>Golang</span>
                </div>
                <div className="skill-icon">
                  <FaPython className="text-xl" />
                  <span>PySpark</span>
                </div>
                <div className="skill-icon">
                  <FaJava className="text-xl" />
                  <span>Java</span>
                </div>
              </div>
            </div>

            <div className="skill-icon-wrapper">
              <h3 className="font-bold mb-4 text-gradient">Tools</h3>
              <div className="space-y-2">
                <div className="skill-icon">
                  <FaGit className="text-xl" />
                  <span>Git</span>
                </div>
                <div className="skill-icon">
                  <SiJira className="text-xl" />
                  <span>Jira</span>
                </div>
                <div className="skill-icon">
                  <SiCircleci className="text-xl" />
                  <span>CircleCI</span>
                </div>
              </div>
            </div>

            <div className="skill-icon-wrapper">
              <h3 className="font-bold mb-4 text-gradient">Other</h3>
              <div className="space-y-2">
                <div className="skill-icon">
                  <FaDocker className="text-xl" />
                  <span>Docker</span>
                </div>
                <div className="skill-icon">
                  <FaDatabase className="text-xl" />
                  <span>DynamoDB</span>
                </div>
                <div className="skill-icon">
                  <div className="flex gap-1">
                    <FaLinux className="text-xl" />
                    <FaApple className="text-xl" />
                  </div>
                  <span>Linux/Mac</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Education</h2>
          <div className="card card-hover">
            <h3 className="text-xl font-bold">BTech in Computer Engineering</h3>
            <p className="text-secondary">Cummins College of Engineering for Women, Pune</p>
            <p className="text-secondary">Graduated May 2021 | CGPA: 8.42/10</p>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Achievements</h2>
          <div className="card card-hover">
            <ul className="list-none space-y-3">
              <li className="flex items-center gap-2 text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Microsoft Learn Ambassador
              </li>
              <li className="flex items-center gap-2 text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Participated in Robocon 2019 (Theme "Great URTU") as a coding team member
              </li>
              <li className="flex items-center gap-2 text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Winner in 'Debug Competition' arranged by Deutsche Bank group in Cummins College
              </li>
              <li className="flex items-center gap-2 text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                Published paper in IRJET (June 2021) - IoT based breakdown Analysis of Equipment
              </li>
            </ul>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Interests</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: 'Programming', link: 'https://leetcode.com/u/pritijha24/', icon: <SiLeetcode /> },
              'Folk Painting',
              'Spirituality',
              'Yoga',
              { name: 'Reading Books', link: 'https://www.goodreads.com/user/show/55497331-priti-jha', icon: <FaBook /> }
            ].map((interest) => (
              typeof interest === 'string' ? (
                <span 
                  key={interest} 
                  className="px-4 py-2 card card-hover inline-flex items-center gap-2"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  {interest}
                </span>
              ) : (
                <a
                  key={interest.name}
                  href={interest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 card card-hover inline-flex items-center gap-2 group"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  {interest.name}
                  {interest.icon && <span className="text-primary group-hover:scale-110 transition-transform">{interest.icon}</span>}
                </a>
              )
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pb-8 text-center">
          <div className="card card-hover">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gradient font-bold text-xl">Priti Jha</span>
                <span className="text-secondary">•</span>
                <span className="text-secondary">Software Engineer</span>
              </div>
              <div className="flex justify-center gap-6">
                <a href="mailto:Jhapriti764@gmail.com" className="nav-link">
                  <FaEnvelope className="text-xl" />
                </a>
                <a href="https://github.com/PRITI24" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/priti-jha-14b96317a" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://pritijha.hashnode.dev" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <SiHashnode className="text-xl" />
                </a>
              </div>
              <p className="text-secondary text-sm">
                © {new Date().getFullYear()} Priti Jha. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App 