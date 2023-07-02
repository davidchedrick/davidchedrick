import { Container } from "react-bootstrap";
import "./cat-names.css";
import NameList from "./NameList";
import { useState } from "react";
export default function NameBox() {
	const [names, setNames] = useState([
		"Tyler",
		"Megan",
		"Milo",
		"Otis",
		"Garfield",
	]);
	return (
		<Container className="cat-box">
			<h1>Cat Names ❤️</h1>
			<fieldset>
				<legend>Name Your Cat!</legend>
				<input
					type="text"
					placeholder="Cat Name"
				/>
				<button>Submit</button>
			</fieldset>
			<NameList names={names} />
		</Container>
	);
}
