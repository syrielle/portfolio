import React from 'react';
import { Download, FileText, Eye, Award } from 'lucide-react';
import './CV.css';

const CV = () => {
  const cvHighlights = [
    {
      icon: <Award size={28} />,
      title: 'Expérience',
      description: 'Projets professionnels et académiques'
    },
    {
      icon: <FileText size={28} />,
      title: 'Formations',
      description: 'Diplômes et certifications'
    },
    {
      icon: <Eye size={28} />,
      title: 'Compétences',
      description: 'Technologies maîtrisées'
    }
  ];

  const handleDownload = () => {
    // Le fichier CV doit être dans le dossier public
    const link = document.createElement('a');
    link.href = '/CV stage hiver 2026.pdf';
    link.download = 'CV stage hiver 2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Ouvrir le CV dans un nouvel onglet
    window.open('/CV stage hiver 2026.pdf', '_blank');
  };

  return (
    <section id="cv" className="cv-section">
      <h2>Mon CV</h2>
      <p className="cv-intro">
        Découvrez mon parcours professionnel et téléchargez mon CV complet.
      </p>

      <div className="cv-container">
        <div className="cv-highlights">
          {cvHighlights.map((highlight, index) => (
            <div 
              key={index} 
              className="cv-highlight-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cv-highlight-icon">{highlight.icon}</div>
              <h3 className="cv-highlight-title">{highlight.title}</h3>
              <p className="cv-highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="cv-download-card">
          <div className="cv-icon-large">
            <FileText size={80} />
          </div>
          <h3 className="cv-card-title">Curriculum Vitae</h3>
          <p className="cv-card-description">
            Téléchargez mon CV au format PDF pour découvrir en détail mon parcours, 
            mes compétences et mes réalisations professionnelles.
          </p>

          <div className="cv-actions">
            <button onClick={handleView} className="cv-btn cv-btn-view">
              <Eye size={20} />
              Voir le CV
            </button>
            <button onClick={handleDownload} className="cv-btn cv-btn-download">
              <Download size={20} />
              Télécharger
            </button>
          </div>

          <div className="cv-file-info">
            <span className="cv-file-name">CV stage hiver 2026.pdf</span>
            <span className="cv-file-format">Format PDF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;

