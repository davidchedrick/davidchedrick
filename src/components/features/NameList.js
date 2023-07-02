import { Container } from "react-bootstrap";

export default function NameList({ names }) {
	return (
		<Container>
			<h2>Names</h2>
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>
		</Container>
	);
}
