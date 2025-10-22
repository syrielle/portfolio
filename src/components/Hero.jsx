import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text fade-in-up">
          <h1 className="hero-title">
            Bonjour, je suis <span className="gradient-text">Sirielle Makouani Sidjui</span>
          </h1>
          <p className="hero-subtitle">Développeuse Full Stack | Recherche stage hiver 2026</p>
          <p className="hero-description">
            Spécialisée en .NET, React et applications sécurisées. Découvrez mes projets et compétences.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Me contacter
            </a>
            <a href="#projects" className="btn btn-secondary">
              Voir mes projets
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/syrielle" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sirielle-makouani-1a48aa1ab" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:maks0005@uqar.ca" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image fade-in-up">
          <div className="image-container">
            <img src="/image.jpg" alt="Sirielle Makouani Sidjui" className="profile-image" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-down">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;

