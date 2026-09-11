# 🧱 Dev Stack Builder

Dev Stack Builder is a React-based website where developers can explore modern technologies and create their own personalized development stack. Technologies are loaded from a JSON file, and users can add or remove technologies from their stack.

## 🚀 Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

1. Explore modern technologies with category, difficulty, rating, and description.
2. Add technologies to a personalized stack and remove them whenever needed.
3. Get toast notifications for adding, removing, duplicate attempts, and clearing the stack.

## 📚 React Questions & Answers

### 1. What is JSX? Why is it used?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand because the UI structure can stay close to the JavaScript logic.

### 2. What is the difference between Props and State?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the UI to update.

### 3. What is the useState hook? Where did you use it?

`useState` is a React hook used to create and manage state in a component. I used it to manage the technologies list, loading state, and the user's selected technology stack.

### 4. What is the useEffect hook? Why is it needed for loading JSON?

`useEffect` is used to run side effects in a React component. I used it to fetch the technology data from the JSON file when the application loads.

### 5. Why do we need a unique key when using .map()?

React uses a unique key to identify each item in a list. It helps React efficiently update only the items that have changed.

### 6. What is conditional rendering? Where did you use it?

Conditional rendering means showing different UI based on a condition. I used it for the loading screen, the empty stack message, the selected technology list, and the "Added to Stack" button state.

### 7. How does data flow from parent to child and child to parent?

Data flows from parent to child through props. A child can communicate back to the parent by calling a function passed to it through props. In this project, the parent passes technology data and event handlers to components such as `TechnologyCard` and `YourStack`.

## 📁 Project Structure

src/
├── assets/
├── components/
├── data/
│   └── technologies.json
├── App.jsx
├── index.css
└── main.jsx

## ▶️ Run Locally

Clone the repository and install the dependencies:

git clone https://github.com/afiaafia/dev-stack-builder.git
cd dev-stack-builder
npm install
npm run dev
