import "./App.css";
import profileImage from "./assets/profile.jpg";
function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Akanksha Shinde</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="home">

  <div className="hero-glow glow-one"></div>
  <div className="hero-glow glow-two"></div>

  <div className="hero-left">

    <p className="hero-label">
      DEVOPS • CLOUD • AWS
    </p>

    <h1>
      Akanksha
      <span>Shinde</span>
    </h1>

    <h2>
      Aspiring DevOps & Cloud Engineer
    </h2>

    <p className="hero-description">
      Building reliable cloud infrastructure, automated CI/CD
      pipelines and containerized applications using modern
      DevOps technologies.
    </p>

    <div className="hero-buttons">

      <a href="#projects" className="hero-button primary-button">
        Explore My Work
      </a>

      <a href="#contact" className="hero-button glass-button">
        Let's Connect
      </a>

    </div>

    <div className="hero-tech">

      <span>AWS</span>
      <span>Docker</span>
      <span>Kubernetes</span>
      <span>Jenkins</span>
      <span>Terraform</span>

    </div>

  </div>


  <div className="hero-right">

    <div className="orbit orbit-one"></div>
    <div className="orbit orbit-two"></div>

    <div className="floating-card card-main">

      <div className="terminal-top">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="terminal-content">

        <p>
          <span className="terminal-green">$</span>
          kubectl get pods
        </p>

        <p className="terminal-output">
          bbhealthapp &nbsp; Running
        </p>

        <p>
          <span className="terminal-green">$</span>
          aws eks status
        </p>

        <p className="terminal-output">
          cluster &nbsp; ACTIVE
        </p>

        <p>
          <span className="terminal-green">$</span>
          docker ps
        </p>

        <p className="terminal-output">
          containers &nbsp; 4
        </p>

      </div>

    </div>

    <div className="floating-card small-card card-aws">
      ☁️ AWS
    </div>

    <div className="floating-card small-card card-k8s">
      ⚙️ Kubernetes
    </div>

  </div>

</section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">ABOUT ME</p>

        <h2>DevOps & Cloud Enthusiast</h2>

        <div className="about-text">
          <p>
            I am a B.Sc. Computer Science graduate interested in
            DevOps, Cloud Computing and automation.
          </p>

          
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-label">TECHNICAL SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>☁️ Cloud</h3>
            <p>AWS</p>
            <p>Amazon EKS</p>
            <p>Amazon ECR</p>
            <p>Amazon RDS</p>
          </div>

          <div className="skill-card">
            <h3>⚙️ DevOps</h3>
            <p>Jenkins</p>
            <p>Docker</p>
            <p>Kubernetes</p>
            <p>Helm</p>
          </div>

          <div className="skill-card">
            <h3>🏗️ Infrastructure</h3>
            <p>Terraform</p>
            <p>Ansible</p>
            <p>Linux</p>
            <p>Git</p>
          </div>

          <div className="skill-card">
            <h3>📊 Monitoring</h3>
            <p>Prometheus</p>
            <p>Grafana</p>
          </div>

          <div className="skill-card">
            <h3>💻 Programming</h3>
            <p>Java</p>
            <p>Python</p>
            <p>JavaScript</p>
            <p>Go</p>
          </div>

          <div className="skill-card">
            <h3>🌐 Web</h3>
            <p>React</p>
            <p>Next.js</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>

        </div>
      </section>

      {/* Projects */}
     
     <section id="projects">

  <div className="project-glass-card">

    <p className="title">MY PROJECT</p>
  <h2>BBHealthApp – CI/CD Deployment on AWS</h2>

  <p>
    A multi-service healthcare application deployed using a
    CI/CD pipeline and containerized infrastructure on AWS.
  </p>

  <h3>Project Overview</h3>

  <p>
    The project uses Jenkins to automate the application build,
    Docker to containerize services, Amazon ECR to store container
    images, and Amazon EKS with Kubernetes and Helm for deployment.
  </p>

  <h3>CI/CD Pipeline</h3>

  <div className="pipeline-box">

    <div>GitHub</div>

    <span>→</span>

    <div>Jenkins</div>

    <span>→</span>

    <div>Maven</div>

    <span>→</span>

    <div>Docker</div>

    <span>→</span>

    <div>Amazon ECR</div>

    <span>→</span>

    <div>Helm</div>

    <span>→</span>

    <div>Amazon EKS</div>

  </div>

  <h3>Technologies Used</h3>

  <div className="technology-list">

    <span>AWS</span>
    <span>Jenkins</span>
    <span>Docker</span>
    <span>Kubernetes</span>
    <span>Amazon EKS</span>
    <span>Amazon ECR</span>
    <span>Helm</span>
    <span>Maven</span>
    <span>Git</span>
    <span>Linux</span>

  </div>

  <h3>My Work</h3>

  <ul className="project-list">

    <li>
      Created and configured a Jenkins CI/CD pipeline.
    </li>

    <li>
      Built backend services using Maven.
    </li>

    <li>
      Built the frontend application using Node.js.
    </li>

    <li>
      Created Docker images for application services.
    </li>

    <li>
      Pushed Docker images to Amazon ECR.
    </li>

    <li>
      Used Kubernetes for application deployment.
    </li>

    <li>
      Used Helm to manage Kubernetes deployment.
    </li>

    <li>
      Deployed the application to Amazon EKS.
    </li>

    <li>
      Troubleshot CI/CD, Docker, Kubernetes and deployment issues.
    </li>

 
   </ul>

  </div>


</section>
      {/* Experience */}
      <section id="experience" className="section">
        <p className="section-label">EXPERIENCE</p>

        <h2>Internship</h2>

        <div className="experience-card">
          <h3>Cummins Technologies India Private Limited</h3>

          <p className="date">
            June 2025 – July 2026
          </p>

          <p>
            Internship and project experience involving software
            development, technical learning and practical exposure
            to enterprise technology environments.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <p className="section-label">EDUCATION</p>

        <h2>Academic Background</h2>

        <div className="education-card">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>2025</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">

  <p className="title">GET IN TOUCH</p>

  <h2>Let's Build Something Great</h2>

  <p>
    I am actively looking for an entry-level Cloud / DevOps Engineer
    opportunity where I can contribute my technical skills and continue
    learning and growing.
  </p>

  <a
    href="/akankshashindeeresumee.pdf"
    target="_blank"
    rel="noreferrer"
    className="hero-button primary-button resume-button"
  >
    View My Resume
  </a>

  <div className="contact-cards">

    <a
      href="mailto:akankshashinde289@gmail.com"
      className="contact-card"
    >
      <span className="contact-icon">✉</span>

      <div>
        <small>Email</small>
        <strong>akankshashinde289@gmail.com</strong>
      </div>
    </a>


    <a
      href="https://www.linkedin.com/in/akankshashinde289"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">in</span>

      <div>
        <small>LinkedIn</small>
        <strong>akankshashinde289</strong>
      </div>
    </a>


    <a
      href="https://github.com/akanksha280904"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">⌘</span>

      <div>
        <small>GitHub</small>
        <strong>akanksha280904</strong>
      </div>
    </a>

  </div>

</section>

      {/* Footer */}
      <footer>
        <p>© 2026 Akanksha Shinde</p>
      </footer>
    </>
  );
}

export default App;