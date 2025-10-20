import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/syrielle', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sirielle-makouani-1a48aa1ab', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:maks0005@uqar.ca', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Portfolio</h3>
          <p className="footer-description">
            Étudiante en informatique passionnée par le développement d'applications sécurisées et performantes.
          </p>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-contact">
            <li>
              <Mail size={16} />
              <span>maks0005@uqar.ca</span>
            </li>
            <li>
              <span>Lévis, Québec</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Portfolio. Fait avec <Heart size={16} className="heart-icon" /> par Sirielle Makouani Sidjui
        </p>
      </div>
    </footer>
  );
};

export default Footer;

