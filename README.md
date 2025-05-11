# Skip Select Redesign - React + TypeScript + Vite

This project is a redesigned version of the Skip Select application, built using **React**, **TypeScript**, and **Vite** for a fast, optimized development experience.

## Project Setup

## Requirements

- **Node.js** – JavaScript runtime for building and running applications.
- **React** – JavaScript library for building user interfaces.
- **npm** – Package manager for JavaScript.
- **TypeScript** – Typed superset of JavaScript for improved development experience.
- **Tailwind CSS** – Utility-first CSS framework for fast UI styling.

## Install Dependencies

#### Clone the repository:

   ```bash
   git clone https://github.com/chiriacdaria/skip-select-redesign.git
   cd skip-select-redesign
   ```

#### Install dependencies (use npm):

   ```bash
    npm install
   ```

## Development 

####  Run the development server:

   ```bash
    npm run dev
   ```

## Features
- React & TypeScript: Type-safe development with React.
- Vite: Fast development with hot module replacement (HMR).
- Responsive UI: Optimized for mobile and desktop.
  
## Folder Structure

- src/ – Contains React components and TypeScript files.
  - src/components/ – Contains React components.
  - src/data/ – Stores data files.
  - src/images/ – Stores image assets.
  - src/pages/ – Contains page components for routing.
  - src/styles/ – Contains global styles and theme configurations.
  - src-types/ – Contains TypeScript types for strong typing.

## Built With

- **React** – A JavaScript library for building user interfaces.
- **TypeScript** – A typed superset of JavaScript for safer and more maintainable code.
- **Vite** – Next-generation, fast build tool for modern web projects.
- **Mantine** – A modern React component library for UI elements.
- **ESLint & Prettier** – Tools for code linting and formatting.
- **Tailwind CSS** – A utility-first CSS framework for fast UI styling.

## Coding Approach

In this project, the focus is on creating maintainable, scalable, and clean code. Below are the key approaches I followed when writing the code:

### 1. **Component-Based Architecture**
   - The app follows a **component-based** architecture where the user interface is broken down into small, reusable components.
   - Components are and placed in the `src/components/` directory.
   - Each component is focused on a **single responsibility** (following the **Single Responsibility Principle**), making the code easier to maintain and extend.

### 2. **TypeScript for Strong Typing**
   - I use **TypeScript** throughout the project to provide type safety, which helps catch errors at compile time instead of runtime.
   - Interfaces and types are created for complex data structures and props, ensuring better maintainability and predictability.
   - TypeScript is especially helpful when working with React, allowing me to define prop types for components, ensuring that they are used correctly and consistently.

### 3. **Styling with Tailwind CSS**
   - **Tailwind CSS** is used for styling, following a **utility-first** approach. This allows me to create clean, responsive designs directly within the JSX without the need for additional CSS files.
   - I prioritize **responsive design**, ensuring that the app is fully functional on mobile, tablet, and desktop devices.

### 4. **State Management and React Hooks**
   - I make extensive use of **React hooks** (such as `useState`, `useEffect`) for managing component state, lifecycle methods, and side effects.

### 5. **Code Modularity and Reusability**
   - Code is organized in a modular fashion, where each part of the application (e.g., pages, components, types etc) is isolated into its own folder and file.
   - **Reusable components** are created for common UI patterns, like the card component, reducing duplication of code and improving maintainability.

### 6. **Version Control with Git**
   - All development work is tracked using **Git**, ensuring that changes can be easily managed, reviewed, and reverted if necessary.

### 7. **Testing**
   - Although not implemented in the current version of the project, I follow **test-driven development (TDD)** principles.
   - I would use testing libraries like **Jest** and **React Testing Library** to ensure the application works as expected and to prevent regressions.

### 8. **Collaboration and Code Reviews**
   - The code is designed to be **collaborative**. I aim to write clear, easy-to-understand code that anyone can work with.
