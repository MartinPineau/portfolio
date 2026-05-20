import Button from "./components/Button";

function App() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Tailwind CSS</h1>
        <p className="mb-6 text-gray-600">Project using Tailwind!</p>
          <Button variant="primary">Projects</Button>
          <Button variant="outline">LinkedIn</Button>
          <Button variant="pill-outline">View Project</Button>
      </div>
    </div>
  );
}

export default App;
