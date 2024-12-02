import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Cards() {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} sm={6} md={3}>
                    <Card className="mb-4 text-center">
                        <div className="custom-card-header">
                            Digital Marketing
                        </div>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a description for Card 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                {/* ---------------------------------------------------------------------------------------------------- */}
                <Col xs={12} sm={6} md={3}>
                    <Card className="mb-4 text-center">
                        <div className="custom-card-header">
                            Creative Autonion 
                        </div>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a description for Card 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* ---------------------------------------------------------------------------------------------------- */}
                <Col xs={12} sm={6} md={3}>
                    <Card className="mb-4 text-center">
                        <div className="custom-card-header">
                            Integration Purely
                        </div>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a description for Card 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* ------------------------------------------------------------------------------------------------- */}
                <Col xs={12} sm={6} md={3}>
                    <Card className="mb-4 text-center">
                        <div className="custom-card-header">
                            Digital Marketing
                        </div>
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a description for Card 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Cards;
