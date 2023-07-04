import { Container } from "react-bootstrap";
import "./cat-names.css";
import NameList from "./NameList";
import { useState } from "react";
export default function NameBox() {
	const [names, setNames] = useState([]);
	const [newName, setNewName] = useState("");

	function addName() {
		setNames([...names, newName]);
		setNewName("");
	}

	return (
		<Container className="cat-box">
			<h1>Cat Names ❤️</h1>
			<fieldset>
				<legend>Name Your Cat!</legend>
				<input
					type="text"
					placeholder="Cat Name"
					onChange={e => setNewName(e.target.value)}
					value={newName}
				/>
				<button onClick={addName}>Submit</button>
			</fieldset>
			<NameList names={names} />
		</Container>
	);
}
