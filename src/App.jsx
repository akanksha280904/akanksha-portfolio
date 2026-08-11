import "./App.css";
import profileImage from "./assets/profile.jpg";

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Akanksha Shinde
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="home">

        <div className="hero-content">

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

            <a
              href="#projects"
              className="hero-button primary-button"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="hero-button glass-button"
            >
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

        {/* 3D DEVOPS TERMINAL */}
        <div className="hero-visual">

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
                <span className="terminal-green">$</span>{" "}
                kubectl get pods
              </p>

              <p className="terminal-output">
                bbhealthapp &nbsp; Running
              </p>

              <p>
                <span className="terminal-green">$</span>{" "}
                aws eks status
              </p>

              <p className="terminal-output">
                cluster &nbsp; ACTIVE
              </p>

              <p>
                <span className="terminal-green">$</span>{" "}
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


      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          DevOps & Cloud Enthusiast
        </h2>

        <div className="about-text">

          <div className="about-content">

            

            <div className="about-highlight">
              <span>FOCUS</span>
              <strong>
                Cloud Infrastructure
              </strong>

              <span>INTEREST</span>
              <strong>
                DevOps Automation
              </strong>

              <span>GOAL</span>
              <strong>
                Cloud / DevOps Engineer
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <p className="section-label">
          TECHNICAL SKILLS
        </p>

        <h2>
          Technologies I Work With
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>☁️ Cloud</h3>
            <p>AWS</p>
            <p>Amazon EKS</p>
            <p>Amazon ECR</p>
            <p>Amazon RDS</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>⚙️ DevOps</h3>
            <p>Jenkins</p>
            <p>Docker</p>
            <p>Kubernetes</p>
            <p>Helm</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>🏗️ Infrastructure</h3>
            <p>Terraform</p>
            <p>Ansible</p>
            <p>Linux</p>
            <p>Git</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>📊 Monitoring</h3>
            <p>Prometheus</p>
            <p>Grafana</p>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>💻 Programming</h3>
            <p>Java</p>
            <p>Python</p>
            <p>JavaScript</p>
            
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>🌐 Web</h3>
            <p>React</p>
            <p>Next.js</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>

        </div>

      </section>


     {/* FEATURED PROJECT */}
<section id="projects" className="project-section">

  <div className="project-heading">
    <p className="section-label">FEATURED PROJECT</p>

    <h2>
      BBHealth<span>App</span>
    </h2>

    <p className="project-subtitle">
      CLOUD • DEVOPS • CI/CD
    </p>
  </div>


  <div className="featured-project">

    {/* 3D BACKGROUND */}
    <div className="project-ambient-glow"></div>
    <div className="project-grid-bg"></div>


    {/* PROJECT HEADER */}
    <div className="featured-header">

      <div>

        <div className="project-status">
          <span className="status-dot"></span>
          DEPLOYED
        </div>

        <h3>
          Production-Style
          <br />
          Cloud Deployment
        </h3>

        <p>
          End-to-end CI/CD deployment of a containerized
          application using AWS, Docker, Jenkins,
          Kubernetes and Helm.
        </p>

      </div>


      <div className="aws-3d-badge">

        <div className="aws-badge-icon">
          ☁
        </div>

        <strong>AWS</strong>

        <small>
          CLOUD
        </small>

      </div>

    </div>


    {/* ARCHITECTURE */}
    <div className="architecture">

      <div className="architecture-line"></div>


      <div className="architecture-node">

        <div className="architecture-icon">
          ⌘
        </div>

        <strong>GitHub</strong>

        <small>
          SOURCE
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node">

        <div className="architecture-icon">
          ⚙
        </div>

        <strong>Jenkins</strong>

        <small>
          CI/CD
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node">

        <div className="architecture-icon">
          M
        </div>

        <strong>Maven</strong>

        <small>
          BUILD
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node">

        <div className="architecture-icon">
          🐳
        </div>

        <strong>Docker</strong>

        <small>
          IMAGE
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node">

        <div className="architecture-icon">
          ECR
        </div>

        <strong>Amazon ECR</strong>

        <small>
          REGISTRY
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node">

        <div className="architecture-icon">
          H
        </div>

        <strong>Helm</strong>

        <small>
          DEPLOY
        </small>

      </div>


      <div className="architecture-arrow">
        →
      </div>


      <div className="architecture-node eks-node">

        <div className="architecture-icon">
          ☸
        </div>

        <strong>Amazon EKS</strong>

        <small>
          KUBERNETES
        </small>

      </div>

    </div>

    {/* PROJECT METRICS */}
    <div className="project-metrics">

      <div className="metric">

        <strong>01</strong>

        <span>
          CI/CD
        </span>

        <small>
          Automated Pipeline
        </small>

      </div>


      <div className="metric">

        <strong>02</strong>

        <span>
          Docker
        </span>

        <small>
          Containerized Apps
        </small>

      </div>


      <div className="metric">

        <strong>03</strong>

        <span>
          EKS
        </span>

        <small>
          Kubernetes Deployment
        </small>

      </div>


      <div className="metric">

        <strong>04</strong>

        <span>
          Helm
        </span>

        <small>
          Deployment Management
        </small>

      </div>

    </div>


    {/* TECHNOLOGIES */}
    <div className="project-stack">

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


    {/* WHAT I BUILT */}
    <div className="project-bottom">

      <div className="project-description">

        <span className="project-mini-label">
          PROJECT OVERVIEW
        </span>

        <h4>
          What I Built
        </h4>

        <p>
          Designed and implemented a production-style
          CI/CD workflow that builds, containerizes and
          deploys application services to Amazon EKS.
        </p>

      </div>


      <div className="project-features">

        <div>
          <span>✓</span>
          Jenkins CI/CD automation
        </div>

        <div>
          <span>✓</span>
          Maven backend builds
        </div>

        <div>
          <span>✓</span>
          Docker containerization
        </div>

        <div>
          <span>✓</span>
          Amazon ECR image management
        </div>

        <div>
          <span>✓</span>
          Kubernetes deployment
        </div>

        <div>
          <span>✓</span>
          Helm deployment management
        </div>

        <div>
          <span>✓</span>
          Amazon EKS deployment
        </div>

        <div>
          <span>✓</span>
          CI/CD troubleshooting
        </div>

      </div>

    </div>

  </div>

</section>

      {/* EXPERIENCE */}
      <section id="experience" className="section journey-section">

  <p className="section-label">EXPERIENCE</p>

  <h2>Professional Journey</h2>

  <div className="journey-timeline">

    <div className="journey-line"></div>

    <div className="journey-card experience-3d">

      <div className="journey-card-top">
        <div className="journey-icon">
          ☁
        </div>

        <div className="journey-number">
          01
        </div>
      </div>

      <div className="journey-content">

        <span className="journey-type">
          INTERNSHIP
        </span>

        <h3>
          Cummins Technologies India
          Private Limited
        </h3>

        <div className="journey-date">
          <span>◉</span>
          June 2025 – July 2026
        </div>

        <p>
          Internship and project experience involving software
          development, technical learning and practical exposure
          to enterprise technology environments.
        </p>

        <div className="journey-tags">
          <span>Software Development</span>
          <span>REST APIs</span>
          <span>Docker</span>
          <span>React</span>
          <span>Spring Boot</span>
          <span>Maven</span>
        </div>

      </div>

      <div className="card-depth"></div>

    </div>

  </div>

</section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">

  <p className="section-label">EDUCATION</p>

  <h2>Academic Background</h2>

  <div className="education-3d-wrapper">

    <div className="education-orbit orbit-education-one"></div>
    <div className="education-orbit orbit-education-two"></div>

    <div className="education-3d-card">

      <div className="education-glow"></div>

      <div className="education-top">

        <div className="education-icon">
          🎓
        </div>

        <div className="education-year">
          2025
        </div>

      </div>

      <div className="education-main">

        <span className="education-label">
          BACHELOR'S DEGREE
        </span>

        <h3>
          Bachelor of Science
          <br />
          in Computer Science
        </h3>

        <p className="education-institute">
          Yashawantrao Chavan Institute of Science,
          Satara
        </p>

        <p className="education-university">
          From KBP University, Satara
        </p>

      </div>

      <div className="education-score">

        <span>AGGREGATE</span>

        <strong>
          81.19%
        </strong>

      </div>

      <div className="education-bottom">

        <div>
          <small>FIELD</small>
          <strong>Computer Science</strong>
        </div>

        <div>
          <small>YEAR</small>
          <strong>2025</strong>
        </div>

        <div>
          <small>STATUS</small>
          <strong>COMPLETED</strong>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <p className="section-label">
          CONTACT
        </p>

        <h2>
          Let's Build Something
        </h2>

        <div className="contact-grid">

          <a
  href="/akankshashindeeresumee.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-card"
>
  <span>RESUME</span>
  <strong>View My Resume →</strong>
</a>


          <a
            href="mailto:akankshashinde289@gmail.com"
            className="contact-card"
          >
            <span className="contact-icon">
              ✉
            </span>

            <div>
              <small>Email</small>
              <strong>
                akankshashinde289@gmail.com
              </strong>
            </div>
          </a>


          <a
            href="https://www.linkedin.com/in/akankshashinde289"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">
              in
            </span>

            <div>
              <small>LinkedIn</small>
              <strong>
                akankshashinde289
              </strong>
            </div>
          </a>


          <a
            href="https://github.com/akanksha280904"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">
              GH
            </span>

            <div>
              <small>GitHub</small>
              <strong>
                akanksha280904
              </strong>
            </div>
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Akanksha Shinde
        </p>
      </footer>

    </div>
  );
}

export default App;