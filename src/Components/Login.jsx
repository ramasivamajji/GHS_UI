import { Field, Form, FormikProvider, useFormik } from "formik";
import * as ghc from "react-bootstrap";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SweetAlertGeneral, SweetAlertLoginSuccess } from "./CommonFiles/SweetAlerts";

const Login = () => {

  const imgUrl = "https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?w=826&t=st=1683007110~exp=1683007710~hmac=4e1b7e1e81805d671a67f4e8df7c776513c8e5adbcca07af82ceb39e20d48550";

  function navReg() {
    navigate("/register")
  }

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user_email: "",
      user_password: "",
    },
    validationSchema: Yup.object({
      user_email: Yup.string().required('Required'),
      user_password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      const profile = JSON.parse(localStorage.getItem("profile"));
      if (profile !== undefined && profile !== null && profile.user_email === values.user_email && profile.user_password === values.user_password) {
        localStorage.setItem("user_email", values.user_email);
        localStorage.setItem("is_logged", "true");
        SweetAlertLoginSuccess();
        window.location.href = "/services";
      } else {
        SweetAlertGeneral("Failed", "Invalid Credentials. Please Register!", "error");
      }

    }
  });

  return (
    <>

      <ghc.Row className="my-2">
        <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
        <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
          <div>
            <ghc.Row>
              <ghc.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                <FormikProvider value={formik}>
                  <Form autoComplete="off">
                    <ghc.Row className="my-5 py-5">
                      <ghc.Row>
                        <ghc.Col xs={12} className="text-center">
                          <h4 className="text-primary">Login Here</h4>
                        </ghc.Col>
                      </ghc.Row>
                      <ghc.Row className="my-2">
                        <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
                        <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                          <ghc.InputGroup>
                            <Field
                              type="text"
                              name="user_email"
                              className={`form-control ${formik.touched.user_email && formik.errors.user_email ? 'is-invalid' : ''}`}
                              maxLength="30"
                              placeholder="Username/Email"
                              autoComplete="off"
                            />
                            <div className="invalid-feedback">{formik.errors.user_email}</div>
                          </ghc.InputGroup>
                        </ghc.Col>
                      </ghc.Row>
                      <ghc.Row className="my-2">
                        <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
                        <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>
                          <ghc.InputGroup>
                            <Field
                              type="password"
                              name="user_password"
                              className={`form-control ${formik.touched.user_password && formik.errors.user_password ? 'is-invalid' : ''
                                }`}
                              maxLength="30"
                              placeholder="Password"
                            />
                            <div className="invalid-feedback">{formik.errors.user_password}</div>
                          </ghc.InputGroup>
                        </ghc.Col>
                      </ghc.Row>
                      <ghc.Row className="my-2">
                        <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
                        <ghc.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8} className="btn-group">

                          <button type="button" onClick={() => { navReg(); }} className="btn btn-primary fw-bold ">
                            <SlArrowDownCircle /> REGISTER
                          </button>
                          <button type="submit" className="btn btn-warning fw-bold ">
                            <SlArrowUpCircle /> &nbsp;LOGIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </button>

                        </ghc.Col>
                      </ghc.Row>
                      <ghc.Row className="my-2">
                        <ghc.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        </ghc.Col>
                        <ghc.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                          <span className="text-muted text-decoration-underline">forget Password?</span>
                        </ghc.Col>

                      </ghc.Row>
                    </ghc.Row>
                  </Form>
                </FormikProvider>
              </ghc.Col>

              <ghc.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className=" text-center">
                <img
                  src={imgUrl}
                  className="img-fluid"
                  alt="mlogo"
                />
              </ghc.Col>
            </ghc.Row>
          </div>
        </ghc.Col>
        <ghc.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></ghc.Col>
      </ghc.Row>
    </>
  );
};
export default Login;
