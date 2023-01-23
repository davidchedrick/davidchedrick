import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import ProjectArea from "./project/ProjectArea";
import { useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { keepTheme } from "./toggle/themes";
import { useEffect } from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Games from "./games/Games";
import ConnectGame from "./games/connect/ConnectGame";

function App() {
	const [isActive, setIsActive] = useState(false);
	console.log("isActive: ", isActive);

	useEffect(() => {
		keepTheme();
	}, []);

	return (
		<div className="App">
			<Header setIsActive={setIsActive} />

			<Routes>
				<Route
					path="/"
					element={<ProjectArea />}
				/>

				<Route
					path="/"
					element={<ProjectArea />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>

				<Route
					path="/contact"
					element={<Contact />}
				/>

				<Route
					path="/games"
					element={<Games />}
				/>

				<Route
					path="/connect-game"
					element={<ConnectGame />}
				/>

				<Route
					path="*"
					element={<h1>404 not found</h1>}
				/>
			</Routes>
		</div>
	);
}

export default App;
