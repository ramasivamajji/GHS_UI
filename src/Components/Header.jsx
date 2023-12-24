import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaLocationArrow } from "react-icons/fa";
import { buttonColor } from "./style";

import { IoLogOutSharp } from "react-icons/io5";
import { FaUser, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



export default function Header() {

  // const user_email = localStorage.getItem("user_email");
  const is_logged = localStorage.getItem("is_logged");
  console.log(is_logged);

  function logOut() {
    localStorage.removeItem('is_logged');
    window.location.href = "/login";

  }


  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h2" className="text-primary fw-bold">YOUR PROFILE @GHC</Popover.Header>
      <Popover.Body>
        <ul className="list-group fw-bold">
          <li className="list-group-item"><FaUser /> Ramasiva Majji</li>
          <li className="list-group-item"><FaMailBulk /> ramasiva2022@gmail.com</li>
          <li className="list-group-item"><FaPhoneAlt /> 8499007575</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const Profile = () => (
    <OverlayTrigger placement="bottom" overlay={popover}>
      <li className="list-group-item ">
        <FaUser size={20} className="text-primary" /> : Ramasiva</li>
    </OverlayTrigger>
  );

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
        className="shadow"
      >
        <Container>

          <Navbar.Brand className="mr-auto" href="/">
            <img src="GHC_Logo.png" width="95px" alt="GHC" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            {/* <Nav className="mx-auto">
              <span className="h3 text-primary">HOTEL MANAGEMENT SYSTEM</span>
            </Nav> */}
            <Nav className="mx-auto">
              <Nav.Link href="/" className="nav-link-animated"> Home</Nav.Link>
              <Nav.Link href="/services" className="nav-link-animated"> Services</Nav.Link>
              <Nav.Link href="/aboutus" className="nav-link-animated"> About-Us</Nav.Link>
              <Nav.Link href="/contactus" className="nav-link-animated"> Contact-Us</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {is_logged === "true" ? <ul className="list-group list-group-horizontal shadow">

                <Profile />
                {/* <li className="list-group-item"><a href="/services"><IoSettings className="text-primary" size={20} /></a></li> */}
                <li style={{ cursor: "pointer" }} className="list-group-item" data-toggle="tooltip" data-placement="bottom" title="Click here to Logout">
                  <span onClick={() => { logOut() }}>  Logout <IoLogOutSharp className="text-primary" size={25} /> </span>
                </li>

              </ul> :
                <>
                  <a href="/login">
                    <button
                      type="button"
                      className="btn "
                      style={
                        buttonColor
                      }
                    >
                      <FaLocationArrow /> LogIn{" "}
                    </button>
                  </a>
                </>}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
