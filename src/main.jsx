import { createRoot } from "react-dom/client";
import App from "./App";


const div = document.getElementById("root")

// createRoot(div).render(
// <div>
//     <h1>Hello React</h1>
//     <h1>Hello</h1>
// </div>)

// createRoot(div).render(App())
createRoot(div).render(<App/>)


