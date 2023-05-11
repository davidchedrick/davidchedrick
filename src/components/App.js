import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import ProjectArea from "./project/ProjectArea";
import About from "./about/About";
import Contact from "./contact/Contact";
import Games from "./games/Games";
import ConnectGame from "./games/connect/ConnectGame";
import MemoryGame from "./games/flip/MemoryGame";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { keepTheme } from "./toggle/themes";
import NotFound from "../NotFound";

function App() {
	const [, setIsActive] = useState(false);

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
					path="/memory-game"
					element={<MemoryGame />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
		</div>
	);
}

export default App;
