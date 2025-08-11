"use client";
import { useState } from "react";
import Link from "next/link";

export default function TodoPage() {
  // State to store our todos
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(), // Simple way to generate unique IDs
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // Clear the input
    }
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h1>

        {/* Learning Info */}
        <div className="mb-6 p-3 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-sm font-semibold text-green-800 mb-1">
            🎓 Learning Concepts:
          </h3>
          <p className="text-xs text-green-700">
            React state management, event handling, array methods, conditional
            rendering
          </p>
        </div>

        {/* Input Section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="flex-1 px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500 bg-gray-50"
          />
          <button
            onClick={addTodo}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No todos yet. Add one above!
            </p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 p-3 border border-gray-200 rounded-md"
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 text-green-600"
                />

                {/* Todo Text */}
                <span
                  className={`flex-1 ${
                    todo.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-2 py-1 text-red-500 hover:bg-red-50 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Statistics */}
        {todos.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Total: {todos.length} | Completed:{" "}
              {todos.filter((todo) => todo.completed).length} | Remaining:{" "}
              {todos.filter((todo) => !todo.completed).length}
            </p>
          </div>
        )}

        {/* Code Explanation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            💡 How this works:
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>
              • <code className="bg-gray-200 px-1 rounded">useState</code>{" "}
              manages todo array and input state
            </li>
            <li>
              • <code className="bg-gray-200 px-1 rounded">map()</code> renders
              the todo list
            </li>
            <li>
              • <code className="bg-gray-200 px-1 rounded">filter()</code>{" "}
              handles deletion and statistics
            </li>
            <li>• Event handlers respond to user interactions</li>
            <li>
              • Conditional rendering shows different content based on state
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
