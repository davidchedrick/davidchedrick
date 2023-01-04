import { BrowserRouter as Route, Switch } from "react-router-dom";

import Header from "./Header";
import ProjectArea from "./ProjectArea";
import { useState } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { keepTheme } from "./themes";
import { useEffect } from "react";

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
				<Route path="/">
					<ProjectArea />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
