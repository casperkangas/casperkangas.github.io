# 💼 Portfolio Website — Casper Kangas

Welcome to the repository of my personal **portfolio website**, built to present my work, projects, and background as a **Computer Engineering student**.  
This site was designed and implemented fully by me using both **React** and **Vite**, with a focus on responsive design, animations, and deployment automation.

---

## 🧰 Tech Stack Overview

### Frontend
- **React** — Component-based UI structure for maintainability and modularity  
- **Vite** — Lightning-fast build tool for modern JavaScript frameworks  
- **Framer Motion** — Used for subtle animations and smooth transitions  
- **Lucide React** — Lightweight icon library 
- **Shadcn/UI** — Used for standardized UI components such as buttons and cards  

### Deployment
- **GitHub Pages** — Continuous deployment setup  
- **gh-pages** NPM package — Enables single-command deployment of the build folder

---

## ⚙️ Functionality & Features

### Core Features
- **Responsive design** — Works seamlessly across desktop, tablet, and mobile  
- **Dark / Light theme toggle** — Smooth animated switch using React state and Tailwind’s dark mode  
- **Smooth scrolling** — Navigates between sections with animated transitions  
- **Interactive components** — Hover animations and motion effects on project cards and buttons  
- **Automatic CV hosting** — My CV PDF is served directly from GitHub Pages, always up-to-date  

### Project Structure Highlights
- **Component-based architecture** — Each section (Navbar, Hero, Projects, Contact, Footer) is a separate React component for clarity and scalability  
- **Single-page layout** — Sections are navigated via smooth scrolling instead of page reloads  
- **Dynamic theming** — Dark/light mode state is stored in React and synced with Tailwind’s theme system  
- **Accessibility awareness** — Semantic HTML elements and keyboard navigation compatibility  

---

## 🧩 Key Implementation Details

### Dark / Light Theme
- Controlled via a React `useState` hook that toggles a `dark` class on the `<html>` element.  
- Custom CSS transitions provide a smooth switch animation.  
- The toggle button adapts both position and color based on theme state.

### Smooth Scrolling
- Achieved using `scrollIntoView({ behavior: "smooth" })` within navbar link handlers.  
- Each section has a unique `id` that matches its navbar reference.

### Project Cards
- Built with Tailwind grid system and hover effects.  
- Each card includes a title, description, and placeholder image.  
- Animated hover effects using `Framer Motion` for a polished experience.

### CV Download Feature
- The file `CV.pdf` is placed in the `/assets` directory.  
- The “View CV” button dynamically fetches the latest version — no code change required when updating the PDF.

---

## 🖥️ Development Workflow

### Local Development
- npm install
- npm run dev

- Access the local site at:
http://localhost:5173

### Production build
- npm run dev

### One-command deployment
- npm run deploy

- This command:
	1.	Builds the project
	2.	Publishes the dist/ folder to the gh-pages branch
	3.	Automatically updates the live site on GitHub Pages

### Design Philosophy
- The project emphasizes:
	•	**Simplicity** — Clean layout and readable typography
	•	**Responsiveness** — Fluid design that adapts to any device
	•	**Performance** — Optimized build and lazy loading via Vite
	•	**Maintainability** — Reusable components and logical folder structure
	•	**User Experience** — Smooth transitions and interactive feedback

### Learning Outcomes
- Through building this portfolio, I strengthened my skills in:
	•	React component structure and state management
	•	Classic CSS customization and responsive design
	•	Build automation and deployment using GitHub Pages
	•	Frontend architecture design and UI/UX best practices

### Contact

**Developer**: Casper Kangas
**Location**: Turku, Finland
**Email**: casperkangas@gmail.com
**Portfolio**: https://casperkangas.github.io/
**GitHub**: github.com/casperkangas￼