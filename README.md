# Portfolio Website
https://priti24.github.io/portfolio/ <br>
A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my professional experience, skills, and achievements in an interactive and visually appealing manner.

## 📌 Table of Contents
- [Features](#-features)
- [Built With](#️-built-with)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Responsive Design](#-responsive-design)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🚀 Features

- **Modern Design**
  - Responsive layout that works on all devices
  - Dark/Light mode with smooth transitions
  - Glassmorphism effects and custom animations
  - Beautiful gradient text and background patterns

- **Interactive Elements**
  - Smooth scrolling navigation
  - Animated section transitions
  - Interactive cards with hover effects
  - Custom scrollbar styling

- **Content Sections**
  - About Me
  - Professional Experience
  - Technical Skills
  - Education
  - Achievements
  - Interests

- **Technical Skills Showcase**
  - Programming Languages (C++, Golang, Java, PySpark)
  - Cloud Technologies (AWS Services)
  - Development Tools
  - Other Technical Competencies

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PRITI24/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is triggered on pushes to the main branch.

### Manual Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. The built files will be in the `dist` directory
3. Deploy using GitHub Pages or your preferred hosting service

### GitHub Pages Configuration
1. Ensure your repository name is set in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     // ...
     base: '/portfolio/',  // Replace with your repository name
   })
   ```
2. The GitHub Actions workflow will handle the rest automatically

## 📁 Project Structure
```
portfolio/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/
│   └── profile-placeholder.jpg  # Profile image
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions deployment workflow
├── package.json         # Project dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Colors and Theme
- Edit color variables in `src/index.css`:
  ```css
  :root {
    --color-primary: #2563eb;
    --color-secondary: #4b5563;
    /* ... other color variables */
  }
  ```
- Modify Tailwind configuration in `tailwind.config.js`

### Content
- Update personal information in `src/App.tsx`
- Modify section content in respective components
- Replace `public/profile-placeholder.jpg` with your profile picture

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop screens (1024px - 1280px)
- Large displays (> 1280px)

## ✨ Performance

- Optimized images and assets
- Lazy loading of components
- Efficient CSS with Tailwind
- Fast build times with Vite
- Automated deployment with GitHub Actions

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Priti Jha - [Jhapriti764@gmail.com](mailto:Jhapriti764@gmail.com)

Project Link: [https://github.com/PRITI24/portfolio](https://github.com/PRITI24/portfolio)

---

Made with ❤️ by Priti Jha 
