import "./index.css";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-8">
          Event Registration
        </h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
