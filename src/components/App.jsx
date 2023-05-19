import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import ProjectArea from "./project/ProjectArea";
import About from "./about/About";
import Contact from "./contact/Contact";
import Games from "./games/Games";
import ConnectGame from "./games/connect/ConnectGame";
import MemoryGame from "./games/flip/MemoryGame";
import NotFound from "../NotFound";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { keepTheme } from "./toggle/themes";

function App() {
	const [, setIsActive] = useState(false);

	useEffect(() => {
		keepTheme();
	}, []);

	const routes = [
		{ path: "/", component: <ProjectArea /> },
		{ path: "/about", component: <About /> },
		{ path: "/contact", component: <Contact /> },
		{ path: "/games", component: <Games /> },
		{ path: "/connect-game", component: <ConnectGame /> },
		{ path: "/memory-game", component: <MemoryGame /> },
		{ path: "*", component: <NotFound /> },
	];

	return (
		<div className="App">
			<Header setIsActive={setIsActive} />

			<Routes>
				{routes.map(({ path, component }, index) => (
					<Route
						key={index}
						path={path}
						element={component}
					/>
				))}
			</Routes>
		</div>
	);
}

export default App;