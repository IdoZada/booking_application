import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Carousel from 'react-bootstrap/Carousel'

const About = () => {
    return (
        <div>
            {/* https://brownhotels.com/sites/default/files/styles/smush_mobile/public/tlv.jpg?itok=U1Wr3aiN */}
            <Container>
                <Carousel style={{ margin: 10 }}>
                    <Carousel.Item>
                        <video className="d-block w-100" autoPlay loop muted>
                            <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                        </video>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            className="d-block w-100"
                            src="https://brownhotels.com/sites/default/files/styles/smush_mobile/public/jlm_0.jpg?itok=zrRkGFVX"
                            alt="Second slide"
                        /> */}
                        <img
                            className="d-block w-100"
                            src="/images/about/about1.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/about/about_enter.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/about/collage.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container>
                <h1 style={{ textAlign: 'center', margin: 50, fontSize: 40 }}>Welcome to Zen Hotels</h1>
                <p style={{ textAlign: 'center', margin: 50 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Container>
        </div >
    )
}

export default About