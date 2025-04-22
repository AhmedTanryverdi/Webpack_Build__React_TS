import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from "@/app/store/index";
import { App } from "./ui/App";
import "../styles/app.css";

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
