import { useState } from 'react'
import './App.css'
import PCPartStore from './pages/PCPartStore'
import NotFound from './pages/NotFound'

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  const skills = [
    { name: 'Python', level: 100 },
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript', level: 90 },
    { name: 'JSX', level: 75 },
    { name: 'GDScript', level: 50 }
  ]

  const projects = [
    {
      title: 'PC Part Store',
      description: 'E-commerce platform for PC components',
      fullDescription: 'Built a full-featured PC part store website where users can browse, filter, and purchase computer components. Implemented product filtering, and shopping cart.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: '#'
    }
  ]

  if (currentPage === 'pcpartstore') {
    return <PCPartStore onBack={() => setCurrentPage('home')} />
  }

  if (currentPage === '404') {
    return <NotFound onHome={() => setCurrentPage('home')} />
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span>Lucas</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1>Software Developer</h1>
            <p className="tagline">Building fast, clean code | Passionate about cars & tech</p>
            <button className="hero-btn" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
          </div>
        </section>

        

        <section id="about" className="about">
          <h2>About</h2>
          <p>
            I'm Lucas, a software development student focused on building clean, efficient web applications.
            I enjoy turning ideas into functional products and exploring new technologies.
            When I'm not coding, you can find me interested in cars and tech.
          </p>
        </section>

        <section id="skills" className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className={`skill-card ${selectedSkill === idx ? 'active' : ''}`}
                onClick={() => setSelectedSkill(selectedSkill === idx ? null : idx)}
              >
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="skill-level">{skill.level}%</p>
              </div>
            ))}
          </div>
          <section id="certifications" className="certifications">
            <br />
            <h2>Certifications</h2>
            <div className="skills-container">
              {[
                { title: 'Network Defense And Internet Protocols', issuer: 'Cisco', year: '2025', status: 'In Progress'},
                { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2025', status: 'In Progress'},
                { title: 'Offensive And Defensive Security', issuer: 'TryHackMe', year: '2025', status: 'In Progress'}
              ].map((cert, idx) => (
                <div key={idx} className="skill-card cert-card">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-row">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                  <div className="cert-row">
                    <span className="cert-badge">{cert.status}</span>
                    <a className="cert-link" href={cert.href} target="_blank" rel="noopener noreferrer">{cert.linkText}</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className={`project-card ${expandedProject === idx ? 'expanded' : ''}`}
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
              >
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {expandedProject === idx && (
                  <div className="project-details">
                    <p className="full-desc">{project.fullDescription}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <button className="view-project-btn" onClick={() => setCurrentPage('pcpartstore')}>View Project</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <p>Open to collaborations and opportunities</p>
          <div className="contact-links">
            <a href="mailto:lucasparsons@outlook.com" target="_blank" rel="noopener noreferrer" className="contact-btn">Email</a>
            <a href="https://github.com/PureBoost" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/lucas-parsons-3b2a91395/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Lucas. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
