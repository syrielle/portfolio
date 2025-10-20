import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Boutique en ligne (ASP.NET)',
      description: 'Une plateforme e-commerce moderne et complète développée avec ASP.NET Core 8.0, permettant aux utilisateurs d\'acheter des produits et aux vendeurs de gérer leur catalogue.',
      technologies: ['ASP.NET Core 8.0', 'C#', 'SQL Server', 'SCSS'],
      image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=E-Commerce',
      github: 'https://github.com/syrielle/boutique-en-ligne-2',
      demo: 'https://github.com/syrielle/boutique-en-ligne-2'
    },
    {
      title: 'Canada Student Integration',
      description: 'Application mobile facilitant l\'intégration des étudiants internationaux au Canada en les connectant avec des mentors expérimentés et en les guidant à travers leurs démarches.',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'Mobile'],
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Student+App',
      github: 'https://github.com/syrielle/Canada-Student-Integration',
      demo: 'https://github.com/syrielle/Canada-Student-Integration'
    },
    {
      title: 'Mon Petit Agent IA',
      description: 'Mini agent IA développé avec React et TypeScript, intégrant une logique d\'intentions avancée et des analytics stockés en localStorage.',
      technologies: ['React', 'TypeScript', 'IA', 'localStorage'],
      image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=Agent+IA',
      github: 'https://github.com/syrielle/Mon-petit-agent-IA',
      demo: 'https://github.com/syrielle/Mon-petit-agent-IA'
    },
    {
      title: 'Boutique Microservices',
      description: 'Architecture microservices pour une application e-commerce, démontrant la mise en œuvre de services décuplés et scalables en C#.',
      technologies: ['C#', '.NET', 'Microservices', 'Architecture'],
      image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Microservices',
      github: 'https://github.com/syrielle/BoutiqueMicroservices',
      demo: 'https://github.com/syrielle/BoutiqueMicroservices'
    },
    {
      title: 'Solution Gestion Clients',
      description: 'Application de gestion de clients développée en C#, permettant la gestion complète des informations clients et de leurs interactions.',
      technologies: ['C#', '.NET', 'SQL', 'WinForms/WPF'],
      image: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Gestion+Clients',
      github: 'https://github.com/syrielle/SolutionGestionClients',
      demo: 'https://github.com/syrielle/SolutionGestionClients'
    },
    {
      title: 'Boutique en ligne (v1)',
      description: 'Premier projet de plateforme e-commerce, posant les bases du développement web full-stack et de la gestion de catalogue produits.',
      technologies: ['Web', 'E-commerce', 'Backend', 'Frontend'],
      image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=E-Shop+v1',
      github: 'https://github.com/syrielle/boutique-en-ligne',
      demo: 'https://github.com/syrielle/boutique-en-ligne'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <p className="projects-intro">
        Découvrez mes projets académiques et personnels démontrant mes compétences en développement .NET, React et applications mobiles.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

