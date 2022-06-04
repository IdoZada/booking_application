import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Carousel from 'react-bootstrap/Carousel'


const About = () => {
    return (
        <div>
            {/* <Container>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"></iframe>
                </div>
            </Container> */}
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://brownhotels.com/sites/default/files/styles/smush_mobile/public/tlv.jpg?itok=U1Wr3aiN"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://brownhotels.com/sites/default/files/styles/smush_mobile/public/jlm_0.jpg?itok=zrRkGFVX"
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
                            src="https://brownhotels.com/sites/default/files/styles/smush_mobile/public/athens_0.jpg?itok=svJLMR6t"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default About