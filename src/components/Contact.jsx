import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les informations du formulaire
    const mailtoLink = `mailto:maks0005@uqar.ca?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Réinitialiser le formulaire
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'maks0005@uqar.ca',
      link: 'mailto:maks0005@uqar.ca'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localisation',
      value: 'Lévis, Québec',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <p className="contact-intro">
        Vous avez une opportunité de stage ? N'hésitez pas à me contacter pour en discuter.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-subtitle">Informations de contact</h3>
          <p className="contact-description">
            Je suis à la recherche d'un stage pour l'hiver 2026. Le formulaire ouvrira votre 
            client email avec les informations pré-remplies pour faciliter votre prise de contact.
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                className="contact-detail-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemple@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Sujet de votre message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <Send size={20} />
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

