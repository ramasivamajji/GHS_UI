import { Row, Col } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import Subscriptions from './GHCServices/Subscriptions';
import AboutUs from './GHCServices/AboutUs';

function LandingPage() {
    return (<>
        <Row className=' bg-light'>
            <Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}></Col>
            <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>

                <Carousel>
                    <Carousel.Item interval={3000}>
                        {/* <ExampleCarouselImage text="First slide" /> */}
                        <img src="cr1.jpg" className="d-block w-100" alt="GHC" />
                        <Carousel.Caption className='border border-circle' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <h3>Software Product Development</h3>
                            <p>Build minimum viable products, cloud applications, solution platforms and mobile apps.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <img src="cr2.jpg" className="d-block w-100" alt="GHC" />
                        <Carousel.Caption className='border border-circle' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <h3>Visualization insights</h3>
                            <p>Data engineering & Big Data visualization with cloud based real-time dashboards.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <img src="cr1.webp" className="d-block w-100" alt="GHC" />
                        <Carousel.Caption className='border border-circle' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                            <h3>Decision making analytics</h3>
                            <p>
                                Data wrangling, Feature engineering, Predictive Analytics using AI/ML
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col xs={12} sm={12} md={12} lg={1} xl={1} xxl={1}></Col>
        </Row>
        <Subscriptions />
        <AboutUs />

    </>);
}

export default LandingPage;

