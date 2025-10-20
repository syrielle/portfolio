import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Développement .NET',
      description: 'Spécialisée en C#, ASP.NET et SQL pour créer des applications web robustes et scalables.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Applications Web & Mobile',
      description: 'Développement d\'interfaces modernes avec React, React Native et Firebase.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Sécurité',
      description: 'Conception d\'applications sécurisées avec systèmes d\'authentification OTP et bonnes pratiques.'
    },
    {
      icon: <Users size={32} />,
      title: 'Projets Concrets',
      description: 'Expérience en projets académiques et personnels : e-commerce, authentification, mobile.'
    }
  ];

  return (
    <section id="about" className="about">
      <h2>À propos de moi</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            Étudiante en fin de formation au baccalauréat en informatique à l'UQAR (campus de Lévis), 
            je recherche un stage à l'hiver 2026 pour mettre en pratique mes compétences et contribuer 
            à des projets concrets en entreprise.
          </p>
          <p>
            Je me spécialise actuellement dans le développement logiciel avec C#, ASP.NET et SQL grâce à 
            mes cours et à la formation .NET FullStack Developer (Coursera). Passionnée par la conception 
            d'applications sécurisées et performantes, j'ai une approche rigoureuse du développement.
          </p>
          <p>
            J'ai déjà réalisé des projets académiques et personnels, notamment une application web de 
            boutique en ligne, un système d'authentification OTP sécurisé et une application mobile avec 
            React Native et Firebase. Je suis constamment à l'affût des meilleures pratiques pour offrir 
            des solutions innovantes et robustes.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

