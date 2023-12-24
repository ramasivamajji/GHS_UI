import { FaFacebook, FaFacebookMessenger, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <div className="mt-5">
                <hr />
                <Row className="align-items-center">
                    <Col xs={12} md={1}></Col>
                    <Col xs={12} md={5}>
                        <span className="h6">
                            <span>All rights reserved @Golden Hills Capital</span>
                        </span>
                    </Col>
                    <Col xs={12} md={5}>
                        <span className="h6">
                            <span>Connect with us at&nbsp;</span>
                            <FaFacebook size={25} />&nbsp;
                            <FaFacebookMessenger size={25} />&nbsp;
                            <FaInstagram size={25} />&nbsp;
                            <FaYoutube size={25} />&nbsp;
                            <FaTwitter size={25} />&nbsp;
                            <FaWhatsapp size={25} />&nbsp;
                        </span>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs={12} md={1}></Col>
                    <Col xs={9} md={5}>
                        <span className="h6">
                            <span>For any queries, write us @ ramsiva2022@gmail.com</span>

                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><span>Call Us:</span></ListGroup.Item>
                                <ListGroup.Item>+91-7207011234</ListGroup.Item>
                                <ListGroup.Item>+91-8919293838</ListGroup.Item>
                            </ListGroup>


                        </span>
                    </Col>
                    <Col xs={9} md={5}>
                        <span className="h6">
                            <span>Our Address is:</span>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Silpa Hills Layout, Khanamet,</ListGroup.Item>
                                <ListGroup.Item>HITEX Road, HiTech City,</ListGroup.Item>
                                <ListGroup.Item>Hyderabad 500081 Telangana, India</ListGroup.Item>
                            </ListGroup>
                        </span>
                    </Col>
                </Row> */}
            </div>
        </>
    );
}
