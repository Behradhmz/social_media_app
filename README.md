# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
--------------------------

🚀 Introduction
Welcome to SocialSphere – a modern, full-stack social media platform built with React, Tailwind CSS, and powered by Supabase.
This project brings the essential features of a community-driven app to life, including:

📝 Posting content

❤️ Liking posts

💬 Commenting and replying to comments

🌐 Creating and joining communities

🔐 Seamless authentication via GitHub OAuth

---------------------

⚙️ Tech Stack
React for building the user interface
Vite for fast development and build processes
TypeScript for type safety and modern JavaScript features
Supabase for backend services including authentication, real-time data, and storage
Tailwind CSS for rapid and responsive styling

-----------------------

# 🌐 Live Demo

You can see the deployed version here:  
👉 [https://vercel.com/behrads-projects-19751dcd/social_media](https://vercel.com/behrads-projects-19751dcd/social_media)

-----------------------

# 👌 Quick Start

## Prerequisites

* Git
* Node.js
* npm

## Cloning the Repository

Run the following commands in your terminal:

```bash
git clone https://github.com/machadop1407/social-media-vite-supabase.git
cd social-media-tutorial
```

## Installation

Install the dependencies:

```bash
npm install
```

## Environment Variables

Create a file named `.env` in the project root and add your Supabase credentials and other configuration values:

```
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---






## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
