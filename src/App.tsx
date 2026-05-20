import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Tailwind CSS</h1>
        <p className="mb-6 text-gray-600">Project using Tailwind!</p>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount((c) => c + 1)}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
