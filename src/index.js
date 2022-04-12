import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/Cera Pro Bold.otf";
import "./assets/fonts/Cera Pro Light.otf";
import "./assets/fonts/Cera Pro Medium.otf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//Redux
import { store } from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
