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
          <div className="nav-logo">Andrea Morelli</div>
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
          <p className="hero-location">📍 Abruzzo, Italy (Available for Remote Work)</p>
          <div className="hero-description">
            <p>
              AI & Cloud Engineer with practical experience designing and deploying intelligent systems, 
              including RAG-based chatbots, multi-agent architectures, neural networks, and data ingestion pipelines. 
              Specialized in Python, LangChain, and Azure ecosystem, with hands-on experience across large enterprise clients.
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
                <span className="skill-tag">pandas</span>
                <span className="skill-tag">numpy</span>
                <span className="skill-tag">RAG Systems</span>
                <span className="skill-tag">Multi-Agent Frameworks</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Azure Functions</span>
                <span className="skill-tag">Azure WebApps</span>
                <span className="skill-tag">Azure ContainerApps</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Terraform</span>
                <span className="skill-tag">Kubernetes</span>
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
                <span className="skill-tag">PowerAutomate</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases & Other</h3>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">SQL Server</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">NoSQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">VS Code</span>
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
                  Designed and deployed intelligent agents and chatbots using LangChain, OpenAI, and Azure.
                  Built RAG pipelines integrating SharePoint, SQL, and other data sources for enterprise search/chat systems.
                  Managed infrastructure setup using Docker, Azure Functions, and container apps.
                  Led architecture and deployment of multi-agent systems with real-time conversational memory.
                </p>
                <div className="achievements">
                  <div className="achievement">
                    <strong>🏎️ Ferrari – InsightBot & OpenGPT:</strong> Refactored LLM-based bots; integrated RAG and real-time features using Python, Azure, React
                  </div>
                  <div className="achievement">
                    <strong>⚡ Snam – GenAIHub:</strong> Led development of architecture for orchestrating agents and assisting document creation via chatbots
                  </div>
                  <div className="achievement">
                    <strong>🏢 Ansaldo / Rina:</strong> Developed SharePoint-connected RAG chatbots with ingestion/indexing pipelines
                  </div>
                  <div className="achievement">
                    <strong>🛡️ Sky – Firewall/NACL Assistant:</strong> Developed chatbot for firewall and network ACL requests. Designed entire infrastructure using Terraform, Jenkins, and Azure
                  </div>
                  <div className="achievement">
                    <strong>✈️ Turisanda – Amelia Travel Assistant:</strong> Created public-facing AI assistant for turisanda.it with real-time data ingestion and LangChain-based chatbot
                  </div>
                  <div className="achievement">
                    <strong>🚀 Arcese Copilot:</strong> Built PowerAutomate-connected assistant for dynamic data ingestion and SharePoint processing
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`timeline-item ${experienceVisible ? 'revealed' : ''}`}>
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
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>AttentionRL</h3>
              <p>
                Reimplementation of Google's "Neuroevolution of Self-Interpretable Agents". 
                Trained on vectorized Procgen environments (Starpilot) using CMA-ES, with customizable attention modules 
                and interpretable patch selection. Features parallel environment batching, various controllers 
                (MLP, LSTM, custom attention), and dynamic feature extraction (position, color, learned embeddings). 
                Supports training with parallelEvolution.py and testing/visualization with testAgent.py.
              </p>
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">PyTorch</span>
                <span className="project-tag">Reinforcement Learning</span>
                <span className="project-tag">CMA-ES</span>
                <span className="project-tag">Attention Mechanisms</span>
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
              <h3>Vision & Perception System</h3>
              <p>
                Object detection pipeline on chessboard pieces using OpenCV and PyTorch. 
                Integrated both custom CNN and YOLO for comparative performance analysis.
              </p>
              <div className="project-tags">
                <span className="project-tag">OpenCV</span>
                <span className="project-tag">YOLO</span>
                <span className="project-tag">CNN</span>
                <span className="project-tag">PyTorch</span>
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

      {/* Languages Section */}
      <section className="languages">
        <div className="container">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-item">
              <h3>Italian</h3>
              <p>Native</p>
            </div>
            <div className="language-item">
              <h3>English</h3>
              <p>Professional (B2+/C1)</p>
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
                📧 morelliandrea9999@gmail.com
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/andrea-morelli-6628831b8/" target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </MagneticButton>
              <MagneticButton href="https://github.com/bbooss97" target="_blank" rel="noopener noreferrer" className="contact-link">
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
