import React from 'react';
import { Code2, Layers, Database, Shield } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      category: 'Langages de programmation',
      skills: ['C#', 'JavaScript', 'TypeScript', 'VB.NET', 'HTML5/CSS', 'PHP', 'Java', 'Assembleur']
    },
    {
      icon: <Layers size={32} />,
      category: 'Frameworks & Technologies',
      skills: ['.NET', 'ASP.NET', 'React', 'React Native', 'Django', 'Bootstrap', 'MVC', 'MVVM', 'Microservices']
    },
    {
      icon: <Database size={32} />,
      category: 'Bases de données & Outils',
      skills: ['SQL Server', 'MySQL', 'Firebase', 'Visual Studio', 'VS Code', 'GitHub', 'UML', 'Merise', 'Eclipse', 'Dia']
    },
    {
      icon: <Shield size={32} />,
      category: 'Sécurité informatique',
      skills: ['Authentification sécurisée', 'OTP', 'Gestion des accès', 'Hachage SHA-256']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>
      <p className="skills-intro">
        Voici un aperçu de mes compétences techniques et des technologies avec lesquelles je travaille.
      </p>

      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="skill-tag"
                  style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.03)}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

