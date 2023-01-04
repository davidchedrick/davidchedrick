import { BrowserRouter as Route, Switch } from "react-router-dom";

import Header from "./Header";
import ProjectArea from "./project/ProjectArea";
import { useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { keepTheme } from "./toggle/themes";
import { useEffect } from "react";
import About from "./about/About";

function App() {
	const [isActive, setIsActive] = useState(false);
	console.log("isActive: ", isActive);

	useEffect(() => {
		keepTheme();
	}, []);

	return (
		<div className="App">
			<Header setIsActive={setIsActive} />

			<Switch>
				<Route path="/about">
					<About />
				</Route>

				<Route path="/">
					<ProjectArea />
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
