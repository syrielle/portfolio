# Portfolio React

Un portfolio moderne et responsive créé avec React et Vite.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Compatible avec tous les appareils
- **Navigation fluide** - Smooth scrolling entre les sections
- **Animations** - Animations élégantes pour une meilleure UX
- **Composants réutilisables** - Architecture modulaire
- **Performance optimisée** - Build rapide avec Vite

## 📦 Sections

- **Hero** - Page d'accueil avec présentation
- **À propos** - Description et compétences clés
- **Projets** - Portfolio de projets avec images et technologies
- **Compétences** - Barres de progression pour chaque compétence
- **CV** - Section de téléchargement du curriculum vitae
- **Contact** - Formulaire de contact et informations
- **Footer** - Liens sociaux et informations de contact

## 🛠️ Technologies utilisées

- React 18
- Vite
- Lucide React (icônes)
- CSS3 avec animations
- JavaScript moderne (ES6+)

## 📋 Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

## 🔧 Installation

1. Clonez ce repository :
\`\`\`bash
git clone <url-du-repo>
cd portfolio
\`\`\`

2. Installez les dépendances :
\`\`\`bash
npm install
\`\`\`

3. Lancez le serveur de développement :
\`\`\`bash
npm run dev
\`\`\`

4. Ouvrez votre navigateur et accédez à `http://localhost:5173`

## 🏗️ Build pour la production

Pour créer une version optimisée pour la production :

\`\`\`bash
npm run build
\`\`\`

Pour prévisualiser le build de production :

\`\`\`bash
npm run preview
\`\`\`

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `src/index.css` avec des variables CSS :

\`\`\`css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  /* ... */
}
\`\`\`

### Contenu

Pour personnaliser le contenu :

1. **Informations personnelles** : Modifiez les composants dans `src/components/`
2. **Projets** : Éditez le tableau `projects` dans `src/components/Projects.jsx`
3. **Compétences** : Modifiez le tableau `skillCategories` dans `src/components/Skills.jsx`
4. **Contact** : Ajoutez vos informations dans `src/components/Contact.jsx` et `src/components/Footer.jsx`

### Images

Pour personnaliser l'image de profil dans la section Hero :

1. Placez votre image dans le dossier `public/` (format recommandé : JPG, PNG)
2. Mettez à jour le chemin dans `src/components/Hero.jsx` :
\`\`\`javascript
<img src="/votre-image.jpg" alt="Profile" className="profile-image" />
\`\`\`
3. Pour les images de projets : Remplacez les images placeholder dans `src/components/Projects.jsx`

### CV

Pour ajouter ou mettre à jour votre CV :

1. Placez votre fichier CV (format PDF) dans le dossier `public/`
2. Si votre fichier a un nom différent, mettez à jour le chemin dans `src/components/CV.jsx` :
\`\`\`javascript
link.href = '/votre-nom-de-cv.pdf';
link.download = 'votre-nom-de-cv.pdf';
\`\`\`

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à toutes les tailles d'écran :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🌟 Fonctionnalités à ajouter

Suggestions d'améliorations possibles :

- [ ] Mode sombre
- [ ] Multilingue (FR/EN)
- [ ] Blog intégré
- [ ] Animations avancées avec Framer Motion
- [ ] Intégration backend pour le formulaire de contact
- [ ] Système de gestion de contenu (CMS)
- [ ] Tests unitaires

## 📄 Structure du projet

\`\`\`
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 📝 Licence

Ce projet est sous licence MIT. Voir les fichiers [LICENSE](LICENSE) (anglais) et [LICENSE.fr.md](LICENSE.fr.md) (français) pour plus de détails.

En résumé, vous êtes libre de :
- ✅ Utiliser ce code pour vos projets personnels ou commerciaux
- ✅ Modifier le code selon vos besoins
- ✅ Distribuer et partager le code
- ✅ Sous-licencier le code

À condition de :
- 📄 Conserver l'avis de copyright
- 📄 Inclure une copie de la licence MIT

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📧 Contact

Pour toute question, n'hésitez pas à me contacter via le formulaire de contact du portfolio.

---

Fait avec ❤️ par Sirielle Makouani Sidjui

© 2025 - Sous licence MIT

