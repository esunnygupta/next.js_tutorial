# Next.js Todo App

A simple and educational todo application built with Next.js to help learn the fundamentals of modern web development. This project is designed to be easily understood by developers coming from embedded systems background.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ View statistics (total, completed, remaining)
- ✅ Clean and responsive design with Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the todo app.

## Project Structure

This is a [Next.js](https://nextjs.org) project with the following key files:

- `src/app/page.js` - Main todo app component
- `src/app/layout.js` - Root layout component
- `src/app/globals.css` - Global styles including Tailwind CSS

## Learning Concepts

This project demonstrates several important Next.js and React concepts:

### 1. React Hooks

- `useState` - Managing component state for todos and input
- State updates trigger re-renders automatically

### 2. Event Handling

- `onClick` - Button click events
- `onChange` - Input field changes
- `onKeyPress` - Keyboard events (Enter key)

### 3. Array Methods

- `map()` - Rendering lists of todos
- `filter()` - Filtering completed/incomplete todos
- Spread operator (`...`) - Adding new items to arrays

### 4. Conditional Rendering

- Showing different content based on state
- Dynamic CSS classes based on todo completion status

### 5. Component Structure

- Single component architecture
- Clear separation of logic and presentation

## Next.js Features Used

- **App Router** - Modern Next.js routing system
- **Client Components** - Interactive components with `'use client'`
- **Tailwind CSS** - Utility-first CSS framework
- **Hot Reload** - Instant updates during development

## How It Works

1. **State Management**: Uses React's `useState` to manage an array of todo objects
2. **Todo Object Structure**: Each todo has an `id`, `text`, and `completed` property
3. **Adding Todos**: New todos are added to the state array with a unique timestamp ID
4. **Toggling Completion**: Updates the `completed` property using array mapping
5. **Deleting Todos**: Removes items from the state array using filtering

## Code Highlights

The app uses modern JavaScript features that are common in web development:

- ES6 arrow functions
- Template literals
- Destructuring
- Ternary operators for conditional rendering

This makes it a great stepping stone for embedded developers learning web technologies!
