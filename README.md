# Andrea Morelli - Portfolio Website

A modern, responsive portfolio website showcasing the professional experience and technical skills of Andrea Morelli, AI & Cloud Engineer.

## 🌟 Features

- **Modern Design**: Clean, professional layout with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations and scroll effects
- **Performance Optimized**: Fast loading times with Vite
- **SEO Friendly**: Optimized meta tags and semantic HTML

## 🎨 Design Elements

- **Gradient Background**: Beautiful purple-to-blue gradient
- **Glassmorphism Cards**: Modern glass-like effect with backdrop blur
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Optimized for mobile and desktop experiences

## 📱 Sections

1. **Hero Section**: Introduction and key professional highlights
2. **Skills**: Technical competencies organized by category
3. **Experience**: Professional timeline with key achievements
4. **Projects**: Selected academic and personal projects
5. **Education**: Academic background and achievements
6. **Contact**: Professional contact information and links

## 🛠️ Built With

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with flexbox and grid
- **Google Fonts (Inter)** - Clean, professional typography

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18.17.1 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx          # Main portfolio component
├── App.css          # Portfolio styling
├── hooks.tsx        # Custom React hooks
├── index.css        # Global styles
├── main.tsx         # Application entry point
└── vite-env.d.ts    # Vite type definitions
```

## 🎯 Key Features

### Professional Presentation
- Clean, modern design that presents technical skills effectively
- Professional color scheme and typography
- Clear information hierarchy

### Technical Showcase
- Comprehensive skills section with categorized technologies
- Detailed project descriptions with tech stacks
- Professional experience timeline

### User Experience
- Smooth scroll navigation
- Responsive design for all devices
- Fast loading performance
- Intuitive navigation

## 🌐 Contact Information

- **Email**: morelliandrea9999@gmail.com
- **GitHub**: [https://github.com/bbooss97](https://github.com/bbooss97)
- **LinkedIn**: [Andrea Morelli](https://www.linkedin.com/in/andrea-morelli-6628831b8/)
- **Location**: Abruzzo, Italy (Available for Remote Work)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Andrea Morelli** - AI & Cloud Engineer specializing in RAG systems, multi-agent architectures, and Azure cloud solutions.
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
