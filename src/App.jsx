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
            <p>Go</p>
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


      {/* PROJECT */}
      <section id="projects" className="section">

        <p className="section-label">
          FEATURED PROJECT
        </p>

        <h2>
          BBHealthApp
        </h2>

        <div className="project-card">

          <div className="project-header">

            <div>
              <span className="project-label">
                CLOUD • DEVOPS • CI/CD
              </span>

              <h3>
                Production-style
                Cloud Deployment
              </h3>
            </div>

            <div className="project-status">
              ● DEPLOYED
            </div>

          </div>


          {/* PIPELINE */}
          <div className="pipeline">

            <div className="pipeline-item">
              <strong>GitHub</strong>
              <small>Source</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Jenkins</strong>
              <small>CI/CD</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Maven</strong>
              <small>Build</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Docker</strong>
              <small>Container</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Amazon ECR</strong>
              <small>Registry</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Helm</strong>
              <small>Deploy</small>
            </div>

            <span>→</span>

            <div className="pipeline-item">
              <strong>Amazon EKS</strong>
              <small>Kubernetes</small>
            </div>

          </div>


          {/* PROJECT TECHNOLOGIES */}
          <div className="project-tech">

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


          {/* PROJECT DETAILS */}
          <div className="project-details">

            <div>
              <h4>Implementation</h4>

              <ul>

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

            <div className="project-side">

              <div className="project-metric">
                <span>PLATFORM</span>
                <strong>AWS</strong>
              </div>

              <div className="project-metric">
                <span>ORCHESTRATION</span>
                <strong>Kubernetes</strong>
              </div>

              <div className="project-metric">
                <span>CI/CD</span>
                <strong>Jenkins</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section id="experience" className="section">

        <p className="section-label">
          EXPERIENCE
        </p>

        <h2>
          Professional Journey
        </h2>

        <div className="experience-card">

          <div className="experience-top">

            <div>
              <span className="experience-label">
                INTERNSHIP
              </span>

              <h3>
                Cummins Technologies India
                Private Limited
              </h3>
            </div>

            <span className="date">
              June 2025 – July 2026
            </span>

          </div>

          <p>
            Internship and project experience involving software
            development, technical learning and practical exposure
            to enterprise technology environments.
          </p>

        </div>

      </section>


      {/* EDUCATION */}
      <section className="section">

        <p className="section-label">
          EDUCATION
        </p>

        <h2>
          Academic Background
        </h2>

        <div className="education-card">

          <span className="education-year">
            2025
          </span>

          <div>
            <span className="education-label">
              BACHELOR'S DEGREE
            </span>

            <h3>
              Bachelor of Science
              in Computer Science
            </h3>
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
            rel="noreferrer"
            className="resume-card"
          >
            <span>RESUME</span>
            <strong>
              View My Resume →
            </strong>
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