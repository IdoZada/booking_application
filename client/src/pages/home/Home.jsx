import React from 'react'
import AnimationPage from '../../components/animationPage/animationPage'
import About from '../about/About'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container'
import { MDBAnimation } from "mdbreact";


const Home = () => {
    return (
        <main id='main'>
            <Container id='about'>
                <About></About>
            </Container>
            <Container id='zengarden'>
                <MDBAnimation type="fadeIn" delay="300" duration={10} onAnimationStart={onscroll} reveal>
                    <Container>
                        <Container>
                            <h1 style={{ textAlign: 'center', margin: 25 }}>Zen Garden</h1>
                        </Container>
                        <Container>
                            <Row xs={1} md={2} className="g-4">
                                {Array.from({ length: 1 }).map((_, idx) => (
                                    <Container>
                                        <Col>
                                            <Card style={{ margin: 10 }}>
                                                <Card.Img variant="top" src="https://brownhotels.com/sites/default/files/styles/smush/public/img_6222.jpg?itok=4Gjoy537" />
                                                <Card.Body>
                                                    <Card.Title>Card title</Card.Title>
                                                    <Card.Text>
                                                        This is a longer card with supporting text below as a natural
                                                        lead-in to additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Container>
                                ))}
                            </Row>
                        </Container>
                    </Container>
                </MDBAnimation>

            </Container>
            <Container id='resturant'>
                <MDBAnimation type="fadeIn" delay="300" duration={10} onAnimationStart={onscroll} reveal>
                    <Container>
                        <Container>
                            <h1 style={{ textAlign: 'center', margin: 25 }}>Resturant</h1>
                        </Container>
                        <Container>
                            <Row xs={1} md={2} className="g-4">
                                {Array.from({ length: 1 }).map((_, idx) => (
                                    <Container>
                                        <Col>
                                            <Card style={{ margin: 10 }}>
                                                <Card.Img variant="top" src="https://brownhotels.com/sites/default/files/styles/smush/public/img_6222.jpg?itok=4Gjoy537" />
                                                <Card.Body>
                                                    <Card.Title>Card title</Card.Title>
                                                    <Card.Text>
                                                        This is a longer card with supporting text below as a natural
                                                        lead-in to additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Container>
                                ))}
                            </Row>
                        </Container>
                    </Container>
                </MDBAnimation>
            </Container>
            <Container id='doubleroom'>
                <MDBAnimation type="fadeIn" delay="300" duration={10} onAnimationStart={onscroll} reveal>
                    <Container>
                        <Container>
                            <h1 style={{ textAlign: 'center', margin: 25 }}>Room</h1>
                        </Container>
                        <Container>
                            <Row xs={1} md={2} className="g-4">
                                {Array.from({ length: 1 }).map((_, idx) => (
                                    <Container>
                                        <Col>
                                            <Card style={{ margin: 10 }}>
                                                <Card.Img variant="top" src="https://brownhotels.com/sites/default/files/styles/smush/public/img_6222.jpg?itok=4Gjoy537" />
                                                <Card.Body>
                                                    <Card.Title>Double Room</Card.Title>
                                                    <Card.Text>
                                                        This is a longer card with supporting text below as a natural
                                                        lead-in to additional content. This content is a little bit longer.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Container>
                                ))}
                            </Row>
                        </Container>
                    </Container>
                </MDBAnimation>
            </Container>
        </main>
    )
}

export default Home