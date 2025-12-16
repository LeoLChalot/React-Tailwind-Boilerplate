# React Tailwind Boilerplate

This is a boilerplate for a React application with Tailwind CSS, Vite, and other useful libraries.

## Features

*   **Vite:** Fast development server and build tool.
*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework.
*   **React Router:** For routing and navigation.
*   **Axios:** For making HTTP requests to a backend API.
*   **Zustand:** For state management.
*   **React Hook Form:** For managing forms.
*   **ESLint:** For code linting.

## Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-tailwind-boilerplate.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd react-tailwind-boilerplate
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the code using ESLint.
*   `npm run preview`: Starts a local server to preview the production build.

## Project Structure

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── form/
│   │   └── ui/
│   ├── config/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── README.md
└── vite.config.js
```

*   **`public/`**: Contains static assets that are publicly accessible.
*   **`src/`**: Contains the main source code of the application.
    *   **`assets/`**: Contains static assets like images, fonts, etc.
    *   **`components/`**: Contains reusable UI components.
    *   **`config/`**: Contains configuration files, such as Axios instances.
    *   **`hooks/`**: Contains custom React hooks.
    *   **`layouts/`**: Contains layout components for different parts of the application.
    *   **`pages/`**: Contains the pages of the application.
    *   **`routes/`**: Contains the routing configuration.
    *   **`services/`**: Contains services for interacting with external APIs.
    *   **`store/`**: Contains the Zustand store for state management.
    *   **`utils/`**: Contains utility functions.
*   **`.env.example`**: An example of the environment variables file.

## Configuration

1.  Create a `.env` file in the root of the project.
2.  Copy the contents of `.env.example` to `.env`.
3.  Update the environment variables in `.env` as needed.

## Deployment

1.  Build the application:
    ```bash
    npm run build
    ```
2.  The production-ready files will be in the `dist/` directory.
3.  Deploy the `dist/` directory to your hosting provider.

## Dependencies

*   **@hookform/resolvers:** For using Zod with React Hook Form.
*   **@tailwindcss/vite:** For using Tailwind CSS with Vite.
*   **axios:** For making HTTP requests.
*   **jwt-decode:** For decoding JSON Web Tokens.
*   **lucide-react:** For icons.
*   **react:** A JavaScript library for building user interfaces.
*   **react-dom:** For rendering React components in the DOM.
*   **react-hook-form:** For managing forms.
*   **react-router-dom:** For routing and navigation.
*   **tailwindcss:** A utility-first CSS framework.
*   **zod:** For schema validation.
*   **zustand:** For state management.
