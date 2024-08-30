import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </HashRouter>
);
