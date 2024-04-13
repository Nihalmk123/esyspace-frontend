import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import { Link } from "react-router-dom"; 
// import xyz from "./path_to_your_logo_image"; 

const Footer = () => {
  return (
    <>
      {/* <footer style={{ backgroundColor: "#e8e8f3" }}>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="">
                <img
                  src={""}
                  alt="VanLoka-Footer-img"
                  style={{ height: "51px", width: "242px", marginRight: "70px" }}
                />
                <p style={{ textAlign: "left" }}>
                  We offer safety certified transport for your children’s recurring everyday travel needs like Schools, Tuition, and extra-curricular institutes with the best price offering
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="" style={{ lineHeight: "10px" }}>
                <h5>Navigation</h5>
                <p>
                  <Link to="/" className="">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/About_Us" className="">
                    About US
                  </Link>
                </p>
                <p>
                  <Link to="/Features" className="">
                    Features
                  </Link>
                </p>
                <p>
                  <Link to="/How_it_Works" className="">
                    How it Works
                  </Link>
                </p>
                <p>
                  <Link to="/ContactUs" className="">
                    Contact Us
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="" style={{ lineHeight: "10px" }}>
                <h5>Information</h5>
                <p>
                  <Link to="/Terms_and_Conditions_Partners" className="">
                    Terms and Conditions - Partners
                  </Link>
                </p>
                <p>
                  <Link to="/Terms_and_Conditions_Customers" className="">
                    Terms and Conditions - Customers
                  </Link>
                </p>
                <p>
                  <Link to="/PrivacyPolicy" className="">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/GovernmentPolicy" className="">
                    Government Policies
                  </Link>
                </p>
                <p>
                  <Link to="/ParentHelpCenter" className="">
                    Parent Help Center
                  </Link>
                </p>
                <p>
                  <Link to="/PartnerHelpCenter" className="">
                    Partner Help Center
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="" style={{ lineHeight: "10px" }}>
                <h5>Find Us</h5>
                <p>Balaloka Technologies Private Limited</p>
                <div>
                  <i className="bi bi-envelope-fill"></i>
                  <p style={{ display: "inline", marginLeft: "10px" }}>
                    +91 (831) 355-7055
                  </p>
                </div>
                <div>
                  <i className="bi bi-telephone-fill Footer_Spacing" style={{ position: "relative", top: "10px" }} ></i>
                  <p className="mb-2" style={{ display: "inline", marginLeft: "10px", position: "relative", top: "10px" }}>
                    info@vanloka.com
                  </p>
                </div>
                <ul className="list-unstyled  mt-2">
                  <li>
                    <Link to="/">
                      <i className="bi bi-facebook Footer_Spacing"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-twitter Footer_Spacing"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-instagram Footer_Spacing"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-youtube Footer_Spacing"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      Copyright © 2023{" "}
                      <span>Balaloka Technologies Pvt. Ltd.</span> All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer> */}
      
      <footer className="text-center p-2 text-white" style={{backgroundColor:"#213555"}}>
<h3>Footer</h3>
      </footer>
    </>
  );
};

export default Footer;
