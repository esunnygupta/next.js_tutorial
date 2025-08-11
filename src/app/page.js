import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Next.js Learning App
          </h1>
          <p className="text-lg text-gray-600">
            Explore different features to learn Next.js concepts
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Todo App Card */}
          <Link href="/todo" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                  Todo App
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Learn React state management, event handling, and component
                architecture with a simple todo application.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  useState
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Events
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Arrays
                </span>
              </div>
            </div>
          </Link>

          {/* Weather App Card */}
          <Link href="/weather" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🌤️</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  Weather App
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Discover API requests, async operations, and dynamic data
                fetching with different city weather information.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  API Calls
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  async/await
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  useEffect
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Learning Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🎓 What You&apos;ll Learn
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">
                Next.js Concepts:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• App Router & File-based routing</li>
                <li>• Client Components</li>
                <li>• Navigation with Link</li>
                <li>• Project structure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">
                React Fundamentals:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• State management with hooks</li>
                <li>• Event handling</li>
                <li>• Conditional rendering</li>
                <li>• Component lifecycle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Built with Next.js 15 • Perfect for learning web development
        </div>
      </div>
    </div>
  );
}
