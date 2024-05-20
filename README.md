# CourseSellingPlatform


## Project Overview

This project is a Vite-based React application. It uses Tailwind CSS for styling and includes various components organized in a structured directory format to maintain clarity and modularity.

## Directory Structure

Here's the directory structure of the project:

```
fe/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BodyComponents/
│   │   │   ├── MainComponents/
│   │   │   │   ├── Main.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   ├── FooterComponents/
│   │   ├── HeaderComponents/
│   ├── state/
│   ├── App.css
│   ├── App.jsx
│   ├── Body.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── index.css
│   ├── main.jsx
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
├── vite.config.js
```

### Key Files and Directories

- `src/`: Contains the source code for the React application.
  - `assets/`: For static assets like images, fonts, etc.
  - `components/`: Organized subdirectories for different component categories.
    - `BodyComponents/`: Components related to the body of the application.
      - `MainComponents/`: Main components for the body.
        - `Main.jsx`: This consist main body section
        - `SearchBar.jsx` : Searchbar component
    - `FooterComponents/`: Components related to the footer.
    - `HeaderComponents/`: Components related to the header.
  - `state/`: Contains state management files (Recoil).
  - `App.css`: Global styles for the application.
  - `App.jsx`: Main application component.
  - `Body.jsx`: Body component.
  - `Footer.jsx`: Footer component.
  - `Header.jsx`: Header component.
  - `index.css`: Global CSS file.
  - `main.jsx`: Main entry point for the React application.

- `index.html`: Main HTML file for the application.
- `package-lock.json`: Auto-generated file that locks the version of each dependency.
- `package.json`: Contains metadata about the project and its dependencies.
- `README.md`: This file.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   cd fe
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`. You should see the application running.

### Building for Production

To create a production-ready build of the application, run:
```bash
npm run build
```
The build output will be located in the `dist/` directory.


## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [https://www.linkedin.com/in/nishant-singh-parihar-617b23169/].

---