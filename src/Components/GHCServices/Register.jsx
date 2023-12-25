import React from 'react';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, Row, InputGroup } from 'react-bootstrap';
import { SlArrowDownCircle } from 'react-icons/sl';
import { SweetAlertGeneral } from '../CommonFiles/SweetAlerts';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    function nav() {
        navigate("/login");
    }
    const imgUrl =
        'https://img.freepik.com/free-vector/personal-site-concept-illustration_114360-2577.jpg?w=826&t=st=1683008240~exp=1683008840~hmac=aee1750bb487f4ac8d16ea5628407d15bc8bb062501f2779212924455f8aa0dc';

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            user_mobile: '',
            user_password: '',
            retype_password: ''
        },
        validationSchema: Yup.object({
            user_name: Yup.string().required('Required'),
            user_email: Yup.string().email('Invalid email').required('Required'),
            user_mobile: Yup.string().matches(/^[6-9]\d{9}$/, 'Invalid mobile number').required('Required'),
            user_password: Yup.string().required('Required').matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
            ),
            retype_password: Yup.string().required('Required').oneOf([Yup.ref('user_password'), null], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            localStorage.setItem("profile", JSON.stringify(values));
            SweetAlertGeneral("Registration Successful", `Dear ${values.user_name}, you have succesfully registered in our website. Use your email ${values.user_email} to login to our portal.`, "success");
            nav()
        },
    });

    return (
        <>
            <FormikProvider value={formik}>
                <Row className="my-5">
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                        <div>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>

                                    <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                                        <Row className="my-5">
                                            <Row>
                                                <Col xs={12} className="text-center">
                                                    <h4 className="text-primary">Register Here</h4>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                                    {/* <label>Your Name:</label> */}
                                                    <InputGroup>
                                                        <Field
                                                            type="text"
                                                            name="user_name"
                                                            className={`form-control ${formik.touched.user_name && formik.errors.user_name ? 'is-invalid' : ''
                                                                }`}
                                                            maxLength="30"
                                                            placeholder="Enter your Name"
                                                            autoComplete="off"
                                                        />
                                                        <div className="invalid-feedback">{formik.errors.user_name}</div>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                                    {/* <label>Your Email:</label> */}
                                                    <InputGroup>
                                                        <Field
                                                            type="email"
                                                            name="user_email"
                                                            className={`form-control ${formik.touched.user_email && formik.errors.user_email ? 'is-invalid' : ''
                                                                }`}
                                                            maxLength="30"
                                                            placeholder="Enter your Email"
                                                            autoComplete="off"
                                                        />
                                                        <div className="invalid-feedback">{formik.errors.user_email}</div>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                                    {/* <label>Your Mobile:</label> */}
                                                    <InputGroup>
                                                        <Field
                                                            type="text"
                                                            name="user_mobile"
                                                            className={`form-control ${formik.touched.user_mobile && formik.errors.user_mobile ? 'is-invalid' : ''
                                                                }`}
                                                            minLength="10"
                                                            maxLength="10"
                                                            placeholder="Enter your Phone"
                                                            autoComplete="off"
                                                        />
                                                        <div className="invalid-feedback">{formik.errors.user_mobile}</div>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                                    {/* <label>Your Password:</label> */}
                                                    <InputGroup>
                                                        <Field
                                                            type="password"
                                                            name="user_password"
                                                            className={`form-control ${formik.touched.user_password && formik.errors.user_password ? 'is-invalid' : ''
                                                                }`}
                                                            maxLength="16"
                                                            placeholder="Creare Password"
                                                        />
                                                        <div className="invalid-feedback">{formik.errors.user_password}</div>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                                                    {/* <label>Your Password:</label> */}
                                                    <InputGroup>
                                                        <Field
                                                            type="password"
                                                            name="retype_password"
                                                            className={`form-control ${formik.touched.retype_password && formik.errors.retype_password ? 'is-invalid' : ''
                                                                }`}
                                                            maxLength="16"
                                                            placeholder="Retype Password"
                                                        />
                                                        <div className="invalid-feedback">{formik.errors.retype_password}</div>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row className="my-2">
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                                                <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} className="btn-group">
                                                    <button type="submit" className="btn btn-primary">
                                                        <SlArrowDownCircle /> Register
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Form>

                                </Col>

                                <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className=" text-center">
                                    <img src={imgUrl} className="img-fluid" alt="mlogo" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></Col>
                </Row>
            </FormikProvider>
        </>
    );
};

export default Register;
