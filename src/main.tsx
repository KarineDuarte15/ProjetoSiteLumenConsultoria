import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import 'aos/dist/aos.css'; // Importa os estilos do AOS

createRoot(document.getElementById("root")!).render(<App />);
