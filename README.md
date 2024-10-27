# React CRUD Todo List Application

This is a fully functional CRUD (Create, Read, Update, Delete) application built using React, Redux, and Tailwind CSS. The app allows users to manage a list of users and todos with features like adding, editing, and deleting entries. It includes responsive design, an animated carousel, and a navigation bar.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)

## Features

- **CRUD Operations**: Users can add, edit, view, and delete items.
- **Responsive Design**: The app is fully responsive, including a responsive Navbar and Carousel.
- **Redux Integration**: State management is handled by Redux, with Redux Toolkit for simpler state handling.
- **Tailwind CSS Styling**: Tailwind CSS is used for fast and modern styling.
- **JSON Server**: A mock API is used to simulate backend CRUD operations.

## Technologies Used

- **React**: Component-based front-end library for building interactive user interfaces.
- **Redux**: State management for consistent handling of data throughout the application.
- **Redux Toolkit**: Simplified Redux setup and usage.
- **Tailwind CSS**: CSS framework for fast, responsive design.
- **React Router**: Routing to navigate between different views.
- **JSON Server**: A fake REST API for quick prototyping and testing.

## Installation

### Prerequisites

- Node.js and npm should be installed on your system.

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/IldizovNodirbek/amazing-todo.git
   ```

2. **Navigate to the Project Directory**

```bash
cd react-crud-todo
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start JSON Server JSON Server will simulate a REST API at http://localhost:3000/users.**

```bash
npx json-server --watch db.json --port 3000
```

5. **Run the App**

```bash
npm run dev
```



