import { Card } from "react-bootstrap";
import cutieCatImg from "../images/cutiecatsimg.png";

function CutieCats() {

    return (

        <Card>
            <Card.Img variant="top" src={cutieCatImg}  />
            <Card.Body>
                <Card.Text>
                     cat
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default CutieCats;