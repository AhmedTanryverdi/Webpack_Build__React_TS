import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./ui/App";
import { BrowserRouter } from "react-router-dom";
import "../styles/app.css";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
