import { Card } from "react-bootstrap";
import catsGaloreImg from "../images/catsgaloreimg.png"
function CatsGalore() {

    return (
        <Card>
            <Card.Img variant="top" src={catsGaloreImg} />
            <Card.Body>
                <Card.Text>
                     cat
                </Card.Text>
            </Card.Body>
        </Card>
    );

}


export default CatsGalore;