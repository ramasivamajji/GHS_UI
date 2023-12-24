import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImStarEmpty } from "react-icons/im";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

export default function Subscriptions() {
    const subscriptionData = [
        {
            level: "Free",
            color: "text-muted",
            price: "0",
            features: [
                { name: "Access to Basic content", access: true }
                ,
                { name: "Access to Full content", access: false }
                ,
                { name: "Access to VIP content", access: false }
                ,
                { name: "No ads", access: false }
                ,
                { name: "Priority support", access: false }

            ],
        },
        {
            level: "Standard",
            color: "text-info",
            price: "99.99",
            features: [
                { name: "Access to Basic content", access: true }
                ,
                { name: "Access to Full content", access: true }
                ,
                { name: "Access to VIP content", access: false }
                ,
                { name: "No ads", access: true }
                ,
                { name: "Priority support", access: false }
            ],
        },
        {
            level: "Premium",
            color: "text-warning",
            price: "199.99",
            features: [
                { name: "Access to Basic content", access: true }
                ,
                { name: "Access to Full content", access: true }
                ,
                { name: "Access to VIP content", access: true }
                ,
                { name: "No ads", access: true }
                ,
                { name: "Priority support", access: true }
            ],
        },
    ];

    return (
        <>
            <Row className="mb-4">
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <h3 className="text-primary mt-3 text-decoration-underline ">Subscriptions</h3>
                </Col>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <Row>
                        {subscriptionData.map((subscription, index) => (
                            <Col key={index} xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                                <div className="card nav-link-animated" style={{ width: "18rem", alignItems: 'center' }}>
                                    <ImStarEmpty size={130} className={`${subscription.color} mt-2 mb-2`} />
                                    <div className="card-body">
                                        <h5 className="card-title h4">{subscription.level}</h5>
                                        <p className="card-text fw-bold h4 text-muted">
                                            ${subscription.price} / month
                                        </p>
                                        <button className="btn btn-primary w-100 mb-1">Subscribe</button>
                                        <ul className="list-group list-group-flush">
                                            {subscription.features.map((feature, i) => (
                                                <li key={i} className="list-group-item">
                                                    {feature.name} &nbsp; {feature.access ? <RxCheckCircled className="text-success float-end" size={25} /> : <RxCrossCircled className="text-danger float-end" size={25} />}

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
            </Row>
        </>
    );
}
