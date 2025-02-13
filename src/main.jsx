import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobleStyled } from "./globle.styled.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobleStyled />
        <App />
    </StrictMode>
);
