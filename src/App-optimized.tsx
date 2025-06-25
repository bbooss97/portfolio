import './App.css';
import { useScrollAnimation, ScrollToTop } from './hooks';
import { TypingAnimation, MagneticButton, useScrollReveal } from './components/AdvancedEffects';

function App() {
  const isScrolled = useScrollAnimation();
  const { isVisible: heroVisible, setElementRef: setHeroRef } = useScrollReveal();
  const { isVisible: skillsVisible, setElementRef: setSkillsRef } = useScrollReveal();
  const { isVisible: experienceVisible, setElementRef: setExperienceRef } = useScrollReveal();

  return (
    <div className="portfolio">
      
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">AM</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Simple background gradient */}
      <div className="simple-bg"></div>

      {/* Hero Section */}
      <section className="hero" id="about" ref={setHeroRef}>
        <div className={`hero-content ${heroVisible ? 'revealed' : ''}`}>
          <h1 className="hero-title">Andrea Morelli</h1>
          <h2 className="hero-subtitle">
            <TypingAnimation text="AI & Cloud Engineer" speed={80} />
          </h2>
          <p className="hero-location">🌐 Abruzzo, Italy | Remote Available</p>
          <div className="hero-description">
            <p>
              AI & Cloud Engineer specializing in intelligent systems, 
              neural architectures, and cloud-native solutions. 
              Expert in Python, LangChain, Azure, and modern ML frameworks.
            </p>
          </div>
          <div className="hero-buttons">
            <MagneticButton href="#contact" className="cta-button primary">
              Get In Touch
            </MagneticButton>
            <MagneticButton href="#projects" className="cta-button secondary">
              View Projects
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills" ref={setSkillsRef}>
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className={`skills-grid ${skillsVisible ? 'revealed' : ''}`}>
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
                <span className="skill-tag">RAG Systems</span>
                <span className="skill-tag">Multi-Agent AI</span>
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
      <section className="experience" id="experience" ref={setExperienceRef}>
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className={`timeline-item ${experienceVisible ? 'revealed' : ''}`}>
              <div className="timeline-date">Jul 2023 – Present</div>
              <div className="timeline-content">
                <h3>AI & Cloud Consultant</h3>
                <h4>Reply S.p.A. (Cluster Reply)</h4>
                <p>
                  Architected next-generation intelligent agents and chatbots using LangChain, 
                  OpenAI GPT-4, and Azure services. Engineered RAG pipelines 
                  integrating enterprise data sources for intelligent search systems.
                </p>
                <div className="achievements">
                  <div className="achievement">
                    <strong>🏎️ Ferrari – InsightBot & OpenGPT:</strong> Revolutionized LLM architectures with advanced RAG
                  </div>
                  <div className="achievement">
                    <strong>⚡ Snam – GenAI Hub:</strong> Pioneered multi-agent orchestration platform
                  </div>
                  <div className="achievement">
                    <strong>🛡️ Sky – Firewall Assistant:</strong> Developed AI-powered security assistant
                  </div>
                  <div className="achievement">
                    <strong>✈️ Turisanda – Travel Assistant:</strong> Created intelligent travel companion
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`timeline-item ${experienceVisible ? 'revealed' : ''}`}>
              <div className="timeline-date">Mar 2023 – Jul 2023</div>
              <div className="timeline-content">
                <h3>AI Research Intern</h3>
                <h4>Sapienza University of Rome</h4>
                <p>
                  Developed reinforcement learning algorithms and attention mechanisms 
                  for autonomous agents in complex environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>AttentionRL</h3>
              <p>
                Implementation of Google's "Neuroevolution of Self-Interpretable Agents" 
                using advanced attention mechanisms and reinforcement learning on 
                vectorized Procgen environments.
              </p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">PyTorch</span>
                <span className="project-tag">Reinforcement Learning</span>
              </div>
              <div className="project-links">
                <MagneticButton href="https://github.com/bbooss97/AttentionRL" target="_blank" rel="noopener noreferrer" className="project-link">
                  🚀 GitHub
                </MagneticButton>
                <MagneticButton href="https://www.youtube.com/watch?v=RvH9VFQngG4" target="_blank" rel="noopener noreferrer" className="project-link">
                  🎬 Demo
                </MagneticButton>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Vision System</h3>
              <p>
                Advanced object detection pipeline with neural perception capabilities. 
                Custom CNN architectures integrated with YOLO for 
                enhanced visual processing and analysis.
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
      <section className="education" id="education">
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
              <MagneticButton href="mailto:morelliandrea9999@gmail.com" className="contact-link">
                📧 Email
              </MagneticButton>
              <MagneticButton href="https://linkedin.com/in/andrea-morelli97" className="contact-link">
                💼 LinkedIn
              </MagneticButton>
              <MagneticButton href="https://github.com/bbooss97" className="contact-link">
                🚀 GitHub
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
