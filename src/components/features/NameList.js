import { Container } from "react-bootstrap";

export default function NameList({ names }) {
	console.log("names: ", names);
	if (names.length === 0) return <div className="add-name">Add A Name!</div>;

	return (
		<Container>
			<h2>Names:</h2>
			<ul>
				{names.map((name, index) => {
					return (
						<div
							key={index}
							className="cat-names"
						>
							<div>🗑️</div>
							<div>✅</div>
							<li>{name}</li>
						</div>
					);
				})}
			</ul>
		</Container>
	);
}
