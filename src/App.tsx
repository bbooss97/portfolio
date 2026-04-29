import { useEffect, useRef } from 'react';
import './App.css';
import { useScrollAnimation, useScrollReveal } from './hooks';
import { TypingAnimation, MagneticButton } from './components/AdvancedEffects';
import { ScrollToTop } from './components/ScrollToTop';

const stack = [
  'Python',
  'LangChain',
  'Azure',
  'OpenAI',
  'RAG',
  'React',
  'Docker',
  'Terraform',
  'Jenkins',
  'SharePoint',
  'FastAPI',
  'PyTorch',
];

const metrics = [
  { value: '2+', label: 'years building enterprise AI systems' },
  { value: '8+', label: 'production assistants and copilots shipped' },
  { value: '6', label: 'large clients across energy, travel, media and automotive' },
];

const caseStudies = [
  {
    client: 'Ferrari',
    title: 'InsightBot & OpenGPT',
    text: 'Refactored LLM-based bots, integrated RAG and real-time features across Python, Azure and React.',
    tags: ['RAG', 'Azure', 'React'],
  },
  {
    client: 'Snam',
    title: 'GenAIHub',
    text: 'Led the architecture for orchestrating intelligent agents and supporting document workflows through chat.',
    tags: ['Multi-agent', 'LangChain', 'Architecture'],
  },
  {
    client: 'Sky',
    title: 'Firewall Assistant',
    text: 'Designed an assistant for firewall and network ACL requests with Terraform, Jenkins and Azure infrastructure.',
    tags: ['DevOps', 'Terraform', 'Azure'],
  },
  {
    client: 'Turisanda',
    title: 'Amelia Travel Assistant',
    text: 'Built a public-facing travel assistant with real-time data ingestion and conversational search.',
    tags: ['Ingestion', 'Chatbot', 'LangChain'],
  },
];

const skills = [
  {
    group: 'AI Engineering',
    items: ['LangChain', 'OpenAI', 'RAG Systems', 'Multi-Agent Frameworks', 'PyTorch', 'scikit-learn'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Azure Functions', 'Azure WebApps', 'Azure Container Apps', 'Docker', 'Terraform', 'Kubernetes', 'Jenkins'],
  },
  {
    group: 'Backend & Data',
    items: ['Python', 'FastAPI', 'Flask', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Data Pipelines'],
  },
  {
    group: 'Frontend & Platforms',
    items: ['React', 'Vite', 'TypeScript', 'Teams Apps', 'SharePoint', 'PowerAutomate'],
  },
];

const projects = [
  {
    title: 'AttentionRL',
    text: 'Reimplementation of Google\'s "Neuroevolution of Self-Interpretable Agents" using CMA-ES, attention modules and vectorized Procgen environments.',
    tags: ['Python', 'PyTorch', 'RL', 'CMA-ES'],
    links: [
      { label: 'GitHub', href: 'https://github.com/bbooss97/AttentionRL' },
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=RvH9VFQngG4' },
    ],
  },
  {
    title: 'Vision & Perception System',
    text: 'Object detection pipeline for chessboard pieces with OpenCV, custom CNN models and YOLO-based comparison.',
    tags: ['OpenCV', 'YOLO', 'CNN', 'PyTorch'],
    links: [],
  },
];

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0.5;
    let pointerY = 0.5;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodes = Array.from({ length: 72 }, (_, index) => ({
      x: (Math.sin(index * 91.7) * 0.5 + 0.5) * window.innerWidth,
      y: (Math.cos(index * 53.1) * 0.5 + 0.5) * window.innerHeight,
      vx: (Math.sin(index * 13.4) * 0.35),
      vy: (Math.cos(index * 17.8) * 0.35),
      radius: 1.2 + (index % 4) * 0.45,
    }));

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = Math.max(window.innerHeight, 720);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const updatePointer = (event: PointerEvent) => {
      pointerX = event.clientX / width;
      pointerY = event.clientY / height;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        width * pointerX,
        height * pointerY,
        0,
        width * pointerX,
        height * pointerY,
        Math.max(width, height) * 0.85
      );
      gradient.addColorStop(0, 'rgba(58, 181, 255, 0.20)');
      gradient.addColorStop(0.35, 'rgba(47, 215, 159, 0.11)');
      gradient.addColorStop(1, 'rgba(4, 7, 13, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx + (pointerX - 0.5) * 0.08;
          node.y += node.vy + (pointerY - 0.5) * 0.08;
        }

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
          const other = nodes[otherIndex];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 155) {
            const alpha = (1 - distance / 155) * 0.28;
            context.strokeStyle = `rgba(137, 221, 255, ${alpha})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.fillStyle = index % 3 === 0 ? '#66e3c4' : '#8ad7ff';
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', updatePointer);
    draw();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return <canvas className="neural-canvas" ref={canvasRef} aria-hidden="true" />;
}

function App() {
  const isScrolled = useScrollAnimation();
  const { isVisible: heroVisible, setElementRef: setHeroRef } = useScrollReveal();
  const { isVisible: skillsVisible, setElementRef: setSkillsRef } = useScrollReveal();
  const { isVisible: experienceVisible, setElementRef: setExperienceRef } = useScrollReveal();

  return (
    <div className="portfolio">
      <NeuralCanvas />
      <div className="page-glow" aria-hidden="true" />

      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <a className="nav-logo" href="#about" aria-label="Andrea Morelli home">
            <strong>Andrea Morelli</strong>
          </a>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" id="about" ref={setHeroRef}>
          <div className={`hero-content ${heroVisible ? 'revealed' : ''}`}>
            <div className="eyebrow">AI systems that move from prototype to production</div>
            <h1 className="hero-title">Andrea Morelli</h1>
            <h2 className="hero-subtitle">
              <TypingAnimation text="AI & Cloud Engineer" speed={52} />
            </h2>
            <p className="hero-description">
              I design, build and deploy intelligent systems for enterprise teams: RAG assistants,
              multi-agent architectures, cloud-native backends, ingestion pipelines and operational AI tools.
            </p>
            <div className="hero-buttons">
              <MagneticButton href="#projects" className="cta-button primary">
                View selected work
              </MagneticButton>
              <MagneticButton href="#contact" className="cta-button secondary">
                Get in touch
              </MagneticButton>
            </div>
          </div>
        </section>

        <section className="metrics-section" aria-label="Portfolio highlights">
          <div className="container metrics-grid">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="stack-strip" aria-label="Technology stack">
          <div className="stack-track">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="skills" id="skills" ref={setSkillsRef}>
          <div className="container">
            <div className="section-heading">
              <span>Capabilities</span>
              <h2>From LLM idea to running system.</h2>
            </div>
            <div className={`skills-grid ${skillsVisible ? 'revealed' : ''}`}>
              {skills.map((category) => (
                <div className="skill-category" key={category.group}>
                  <h3>{category.group}</h3>
                  <div className="skill-tags">
                    {category.items.map((item) => (
                      <span className="skill-tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience" id="experience" ref={setExperienceRef}>
          <div className="container">
            <div className="section-heading">
              <span>Experience</span>
              <h2>Enterprise projects with real constraints.</h2>
            </div>
            <div className="case-grid">
              {caseStudies.map((caseStudy, index) => (
                <article className={`case-card ${experienceVisible ? 'revealed' : ''}`} key={caseStudy.title} style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="case-client">{caseStudy.client}</span>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.text}</p>
                  <div className="project-tags">
                    {caseStudy.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="timeline">
              <div className={`timeline-item ${experienceVisible ? 'revealed' : ''}`}>
                <div className="timeline-date">Jul 2023 - Present</div>
                <div className="timeline-content">
                  <h3>AI & Cloud Consultant</h3>
                  <h4>Reply S.p.A. - Cluster Reply</h4>
                  <p>
                    Designed and deployed intelligent agents and RAG chatbots using LangChain,
                    OpenAI and Azure. Built ingestion pipelines, cloud infrastructure and production
                    backends for enterprise search and conversational workflows.
                  </p>
                </div>
              </div>

              <div className={`timeline-item ${experienceVisible ? 'revealed' : ''}`}>
                <div className="timeline-date">Apr 2023 - Jul 2023</div>
                <div className="timeline-content">
                  <h3>Full Stack Developer</h3>
                  <h4>RGI S.P.A</h4>
                  <p>
                    Maintained Java EE applications and supported the full-stack software lifecycle
                    with Git, SQL and agile delivery practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <div className="section-heading">
              <span>Selected work</span>
              <h2>Research-minded engineering, shipped cleanly.</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <MagneticButton href={link.href} target="_blank" rel="noopener noreferrer" className="project-link" key={link.href}>
                          {link.label}
                        </MagneticButton>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education" id="education">
          <div className="container education-layout">
            <div className="section-heading compact">
              <span>Education</span>
              <h2>Computer Science Engineering.</h2>
            </div>
            <div className="education-grid">
              <div className="education-item">
                <h3>MSc in Computer Science Engineering</h3>
                <h4>Sapienza University of Rome</h4>
                <p>Sep 2021 - Jul 2023 | Final Grade: 110/110</p>
              </div>
              <div className="education-item">
                <h3>BSc in Computer & Automation Engineering</h3>
                <h4>Sapienza University of Rome</h4>
                <p>Sep 2018 - Jul 2021 | Final Grade: 104/110</p>
              </div>
            </div>
          </div>
        </section>

        <section className="languages">
          <div className="container languages-grid">
            <div className="language-item">
              <h3>Italian</h3>
              <p>Native</p>
            </div>
            <div className="language-item">
              <h3>English</h3>
              <p>Professional B2+/C1</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-content">
            <div className="section-heading compact">
              <span>Contact</span>
              <h2>Build the next AI system.</h2>
            </div>
            <div className="contact-links">
              <MagneticButton href="mailto:morelliandrea9999@gmail.com" className="contact-link">
                Email
              </MagneticButton>
              <MagneticButton href="https://www.linkedin.com/in/andrea-morelli-6628831b8/" target="_blank" rel="noopener noreferrer" className="contact-link">
                LinkedIn
              </MagneticButton>
              <MagneticButton href="https://github.com/bbooss97" target="_blank" rel="noopener noreferrer" className="contact-link">
                GitHub
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
