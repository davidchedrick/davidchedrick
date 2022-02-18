import { Button, Card, Col, Container, Row } from "react-bootstrap";



function ProjectCard({ text, img }) {

    return (
        <Container>
            <Card className="img-style">
                <Row>
                    <Col className="rounded float-start">
                        <Card.Body >
                            <Card.Img variant="top" src={img} />
                        </Card.Body>   
                    </Col>
                    <Col className="rounded float-end">
                        <Card.Text>
                            <Row>
                                <Col><span >{text}</span></Col> 
                                <Col><span >{text}</span></Col> 
                            </Row>
                            <Row >
                                <div className="d-grid gap-2">
                                   <Button variant="success" size="lg">Enter Site</Button> 
                                </div>
                            </Row>
                            
                            
                        </Card.Text>   
                    </Col>                      
                </Row>
            </Card>
        </Container>
    );

}


export default ProjectCard;