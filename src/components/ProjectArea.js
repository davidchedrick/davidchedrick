import { Container, Row } from "react-bootstrap";
import ChoreList from "./ ChoreList";
import CatsGalore from "./CatsGalore";
import CutieCats from "./CutieCats";

function ProjectArea() {
	return (
		<Container>
			<Row>{/* <CutieCats /> */}</Row>
			<Row>{/* <CutieCats /> */}</Row>
			<Row>
				<ChoreList />
			</Row>
			<Row>
				<CutieCats />
			</Row>
			<Row>
				<CatsGalore />
			</Row>
		</Container>
	);
}

export default ProjectArea;
