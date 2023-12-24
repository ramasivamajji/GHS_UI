import { Col, Row } from "react-bootstrap";
import { FaMailBulk, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function ProfilePage() {
    return (<>
        <Row>
            <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>


                <h2 className="text-primary fw-bold">YOUR PROFILE @GHC</h2>
                <ul className="list-group fw-bold">
                    <li className="list-group-item"><FaUser /> Ramasiva Majji</li>
                    <li className="list-group-item"><FaMailBulk /> ramasiva2022@gmail.com</li>
                    <li className="list-group-item"><FaPhoneAlt /> 8499007575</li>
                </ul>
            </Col>
            <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
        </Row>
    </>)
}