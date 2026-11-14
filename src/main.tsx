import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./ui/appsolute/styles.css";
import "./App.css";
import { App } from "./App";

// La lingua la decide la pagina: index.html è "it", en/index.html è "en".
const lang = document.documentElement.lang === "en" ? "en" : "it";
// privacy/index.html porta data-page="privacy": stessa app, contenuto diverso.
const page = document.documentElement.dataset.page === "privacy" ? "privacy" : "home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App lang={lang} page={page} />
  </StrictMode>,
);
