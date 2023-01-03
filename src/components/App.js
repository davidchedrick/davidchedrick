import Header from "./Header";
import ProjectArea from "./ProjectArea";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	const [isActive, setIsActive] = useState(false);
	console.log("isActive: ", isActive);

	return (
		<div className={isActive ? "App" : "App dark-mode"}>
			<Header setIsActive={setIsActive} />
			<ProjectArea />
		</div>
	);
}

export default App;
