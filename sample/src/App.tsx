import "./App.css";
import { HapticButton } from "./components/HapticButton/index.tsx";

function App() {
  return (
    <main>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite-deno.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <HapticButton />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
