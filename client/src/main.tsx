import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts
const poppinsFont = document.createElement("link");
poppinsFont.rel = "stylesheet";
poppinsFont.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
document.head.appendChild(poppinsFont);

const interFont = document.createElement("link");
interFont.rel = "stylesheet";
interFont.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap";
document.head.appendChild(interFont);

// Import Remix Icon
const remixIcon = document.createElement("link");
remixIcon.rel = "stylesheet";
remixIcon.href = "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css";
document.head.appendChild(remixIcon);

// Set page title
document.title = "Ivan de Murard | Product & Innovation Manager";

createRoot(document.getElementById("root")!).render(<App />);
