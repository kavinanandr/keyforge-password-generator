# 🔐 KeyForge – Password Generator

A lightweight, responsive password generator built with **React 19 and Tailwind CSS 4**. KeyForge allows users to generate customizable passwords by adjusting their preferred password length and selecting additional character types, including numbers and special characters.

🔗 **Live Demo:** [KeyForge](https://keyforge-psi-nine.vercel.app/)

---

## ✨ Features

- **Customizable Password Length:** Generate passwords ranging from 8 to 20 characters using an interactive range slider.
- **Alphabetic Characters:** Generates passwords using uppercase and lowercase English alphabets by default.
- **Number Inclusion:** Optionally include numeric characters (`0–9`) in generated passwords.
- **Special Characters:** Include special characters to increase character variety.
- **Automatic Password Generation:** Automatically generates a new password whenever the password length or character preferences change.
- **One-Click Copy:** Copy the generated password directly to the clipboard.
- **Responsive Design:** Adapts to different screen sizes, including mobile, tablet, and desktop.
- **Dark Mode Styling:** Provides dark-themed styling using Tailwind CSS dark variants.
- **Custom Favicon:** Includes a custom favicon displayed in the browser tab.
- **Clean User Interface:** Features a minimal interface with an indigo and slate colour palette.

## 🛠️ Built With

| Technology                                                                   | Purpose                                     |
| ---------------------------------------------------------------------------- | ------------------------------------------- |
| [React 19](https://react.dev/)                                               | Building the user interface                 |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Password generation and application logic   |
| [Tailwind CSS 4](https://tailwindcss.com/)                                   | Utility-first styling and responsive design |
| [Vite](https://vite.dev/)                                                    | Development server and build tooling        |
| [ESLint](https://eslint.org/)                                                | Code quality and linting                    |
| [Prettier](https://prettier.io/)                                             | Code formatting                             |

### React Concepts Used

- **Functional Components:** Building the application using React components.
- **useState:** Managing password length, character preferences, and generated password state.
- **useEffect:** Automatically regenerating passwords when configuration dependencies change.
- **useRef:** Accessing the password input element for clipboard-related interactions.
- **useCallback:** Memoizing the password-generation function to maintain a stable function reference between renders unless its dependencies change.

## 🚀 Getting Started

Follow these instructions to set up and run KeyForge on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/kavinanandr/keyforge-password-generator.git
```

**2. Navigate to the project directory**

```bash
cd keyforge-password-generator
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

### Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Starts the Vite development server    |
| `npm run build`   | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint`    | Runs ESLint to check for code issues  |

## 📂 Project Structure

```text
keyforge-password-generator/
│
├── src/
│   ├── assets/
│   │   └── favicon.png
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── .prettierrc.json
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

### File Overview

| File / Directory         | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `src/assets/`            | Contains application assets.                                                        |
| `src/assets/favicon.png` | Custom favicon displayed in the browser tab.                                        |
| `src/App.jsx`            | Main React component containing the password generator interface and functionality. |
| `src/index.css`          | Imports Tailwind CSS and provides the global stylesheet entry point.                |
| `src/main.jsx`           | Entry point that renders the React application using `createRoot`.                  |
| `index.html`             | HTML document serving as the application entry point and referencing the favicon.   |
| `vite.config.js`         | Configures Vite and its React and Tailwind CSS plugins.                             |
| `eslint.config.js`       | Contains ESLint configuration.                                                      |
| `.prettierrc.json`       | Contains Prettier formatting preferences.                                           |
| `package.json`           | Defines project dependencies and npm scripts.                                       |
| `package-lock.json`      | Locks dependency versions for consistent installations.                             |
| `.gitignore`             | Specifies files and directories Git should ignore.                                  |

## ⚙️ How It Works

KeyForge generates passwords dynamically based on the user's selected configuration.

### 1. Initial Character Set

The generator starts with a character set containing:

- Lowercase alphabets (`a–z`)
- Uppercase alphabets (`A–Z`)

### 2. Character Customization

Additional characters are appended to the character set depending on user preferences:

- **Numbers enabled:** Adds numeric characters (`0–9`).
- **Symbols enabled:** Adds supported special characters.

Both options can be enabled independently or together.

### 3. Password Generation

The generator randomly selects characters from the configured character set until the desired password length is reached.

### 4. Automatic Regeneration

React's `useEffect` monitors password configuration dependencies. Whenever the password length or character preferences change, the password-generation function is invoked to generate an updated password.

### 5. Function Memoization

The `useCallback` hook memoizes the password-generation function, maintaining its reference between renders as long as its dependencies remain unchanged.

This is useful when the function is used as a dependency of `useEffect`, helping prevent unnecessary effect executions caused by a newly created function reference on every render.

### 6. Clipboard Interaction

The Clipboard API is used to copy the generated password. The `useRef` hook provides access to the password input element for clipboard-related interactions.

## 🔒 Security Considerations

KeyForge currently uses JavaScript's `Math.random()` for character selection.

Although suitable for demonstrating basic random password generation, `Math.random()` is not cryptographically secure.

For real-world password generation, consider implementing the Web Crypto API using `crypto.getRandomValues()` to obtain cryptographically secure random values.

**Important:** Passwords generated by the current implementation should not be treated as cryptographically secure credentials.

## 🔮 Future Improvements

Potential enhancements for future versions:

- [ ] Implement cryptographically secure password generation using the Web Crypto API.
- [ ] Add a password strength indicator.
- [ ] Allow users to customize minimum and maximum password lengths.
- [ ] Add an option to exclude ambiguous characters (`0`, `O`, `1`, `l`).
- [ ] Provide more control over individual character types.
- [ ] Add a dedicated regenerate password button.
- [ ] Improve accessibility and keyboard navigation.
- [ ] Add password generation history.

## 👨‍💻 Author

**Kavin Anand**

- GitHub: [@kavinanandr](https://github.com/kavinanandr)
- Repository: [KeyForge – Password Generator](https://github.com/kavinanandr/keyforge-password-generator)

---

⭐ If you find this project useful, consider giving the repository a star!

**Built with ❤️ by Kavin Anand.**
