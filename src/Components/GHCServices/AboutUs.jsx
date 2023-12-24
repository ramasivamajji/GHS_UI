import React from 'react';
import { Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <>
            <Row>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <h3 className="text-primary mt-5">About Us</h3>
                </Col>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <Row>
                        <Col xs={12}>
                            <p>
                                Welcome to <strong>Golden Hills Capital</strong>, a trusted destination for online trading. Our platform is designed to provide a seamless and transparent experience for traders worldwide.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <h4>Our Mission</h4>
                            <p>
                                At Golden Hills Capital, our mission is to empower individuals to make informed financial decisions. We are dedicated to fostering financial inclusion by providing a platform that bridges the gap between traders and global markets.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <h4>Who We Are</h4>
                            <p>
                                Golden Hills Capital is powered by a team of financial experts, technologists, and dedicated professionals. Our diverse expertise converges to create an inclusive and educational trading environment, tailored to meet the needs of traders at every skill level.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <h4>What Sets Us Apart</h4>
                            <p>
                                - **Innovative Technology:** Our cutting-edge platform leverages the latest technology to offer real-time market data, advanced charting tools, and secure trade execution.
                            </p>
                            <p>
                                - **Educational Resources:** Explore our comprehensive educational resources, market insights, and expert analysis to enhance your trading skills and stay ahead in the ever-changing financial landscape.
                            </p>
                            <p>
                                - **Customer-Centric Approach:** Your success is our priority. Our user-centric design, transparent fee structures, and dedicated customer support ensure a seamless trading experience.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <h4>Transparency and Trust</h4>
                            <p>
                                Operating with transparency and integrity, we prioritize the trust our users place in us. From transparent fee structures to secure transactions, we aim to provide a trustworthy trading environment.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <h4>Join Us on the Journey</h4>
                            <p>
                                Whether you're an experienced trader or just starting, Golden Hills Capital invites you to join us on the journey towards financial success. Your success is our success.
                            </p>
                        </Col>
                        <Col xs={12}>
                            <p>
                                Ready to embark on the journey? [Sign up](#) today and unlock a world of financial opportunities.
                            </p>
                            <p>
                                [Contact Us](#) if you have any questions or need assistance. We're here to help you thrive in the world of trading.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
            </Row>
        </>
    );
};

export default AboutUs;
