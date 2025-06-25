import './App.css'
import './components/animations.css'
import { useScrollAnimation, ScrollToTop } from './hooks'
import { AnimatedParticles, GeometricShape } from './components/AnimatedElements'

function App() {
  const isScrolled = useScrollAnimation();

  return (
    <div className="portfolio">
      {/* Animated Background Elements */}
      <AnimatedParticles />
      
      {/* Floating Geometric Shapes */}
      <GeometricShape type="circle" size={80} position={{ top: '10%', left: '5%' }} animationDelay={0} />
      <GeometricShape type="triangle" size={60} position={{ top: '20%', right: '10%' }} animationDelay={2} />
      <GeometricShape type="square" size={40} position={{ top: '60%', left: '8%' }} animationDelay={4} />
      <GeometricShape type="circle" size={100} position={{ top: '70%', right: '15%' }} animationDelay={6} />
      <GeometricShape type="triangle" size={50} position={{ top: '40%', left: '85%' }} animationDelay={8} />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">Andrea Morelli</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-content">
          <h1 className="hero-title">Andrea Morelli</h1>
          <h2 className="hero-subtitle">AI & Cloud Engineer</h2>
          <p className="hero-location">📍 Abruzzo, Italy (Available for Remote Work)</p>
          <p className="hero-description">
            AI & Cloud Engineer with practical experience designing and deploying intelligent systems, 
            including RAG-based chatbots, multi-agent architectures, and data ingestion pipelines. 
            Proficient in Python, LangChain, and Azure ecosystem.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="https://github.com/bbooss97" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">Kotlin</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-tags">
                <span className="skill-tag">LangChain</span>
                <span className="skill-tag">OpenAI</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">RAG systems</span>
                <span className="skill-tag">Multi-agent frameworks</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">OpenShift</span>
                <span className="skill-tag">CI/CD</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">Teams Apps</span>
                <span className="skill-tag">SharePoint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Jul 2023 – Present</div>
              <div className="timeline-content">
                <h3>AI & Cloud Consultant</h3>
                <h4>Reply S.p.A. (Cluster Reply)</h4>
                <p>
                  Designed and deployed intelligent agents and chatbots using LangChain, OpenAI, and Azure.
                  Built RAG pipelines integrating SharePoint, SQL, and other data sources for enterprise search/chat systems.
                </p>
                <div className="achievements">
                  <div className="achievement">
                    <strong>Ferrari – InsightBot & OpenGPT:</strong> Refactored LLM-based bots with RAG and real-time features
                  </div>
                  <div className="achievement">
                    <strong>Snam – GenAIHub:</strong> Led architecture development for orchestrating agents
                  </div>
                  <div className="achievement">
                    <strong>Sky – Firewall Assistant:</strong> Developed chatbot with Terraform and Azure infrastructure
                  </div>
                  <div className="achievement">
                    <strong>Turisanda – Travel Assistant:</strong> Created public-facing AI assistant for travel planning
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Apr 2023 – Jul 2023</div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>RGI S.P.A</h4>
                <p>
                  Maintained Java EE applications and supported full-stack software lifecycle.
                  Collaborated with dev team using Git, SQL, and agile methodology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>AttentionRL</h3>
              <p>
                Reimplementation of Google's "Neuroevolution of Self-Interpretable Agents". 
                Trained on vectorized Procgen environments using CMA-ES with customizable attention modules.
              </p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">PyTorch</span>
                <span className="project-tag">RL</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/bbooss97/AttentionRL" target="_blank" rel="noopener noreferrer" className="project-link">
                  🔗 GitHub
                </a>
                <a href="https://www.youtube.com/watch?v=RvH9VFQngG4" target="_blank" rel="noopener noreferrer" className="project-link">
                  ▶️ Demo Video
                </a>
              </div>
            </div>
            <div className="project-card">
              <h3>Vision & Perception System</h3>
              <p>
                Object detection pipeline on chessboard pieces using OpenCV and PyTorch. 
                Integrated both custom CNN and YOLO for comparative performance analysis.
              </p>
              <div className="project-tags">
                <span className="project-tag">OpenCV</span>
                <span className="project-tag">YOLO</span>
                <span className="project-tag">CNN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-item">
              <h3>MSc in Computer Science Engineering</h3>
              <h4>Sapienza University of Rome</h4>
              <p>Sep 2021 – Jul 2023 | Final Grade: 110/110</p>
            </div>
            <div className="education-item">
              <h3>BSc in Computer & Automation Engineering</h3>
              <h4>Sapienza University of Rome</h4>
              <p>Sep 2018 – Jul 2021 | Final Grade: 104/110</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>Looking for flexible, remote-first roles with impactful projects.</p>
            <div className="contact-links">
              <a href="mailto:morelliandrea9999@gmail.com" className="contact-link">
                📧 morelliandrea9999@gmail.com
              </a>
              <a href="https://github.com/bbooss97" target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 GitHub
              </a>
              <a href="https://www.linkedin.com/in/andrea-morelli-6628831b8/" target="_blank" rel="noopener noreferrer" className="contact-link">
                🔗 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
