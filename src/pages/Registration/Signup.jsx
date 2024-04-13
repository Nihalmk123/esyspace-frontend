import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../../Styles/Registrations.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="background_color p-3">
      <MDBContainer className="my-5">
        <MDBCard style={{ borderRadius: "12px" }}>
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
                style={{ borderRadius: "12px" }}
              />
            </MDBCol>

            <MDBCol md="5">
              <h1 className="text-center mb-3 text_font">Signup</h1>
              <MDBCardBody className="mt-3">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First name"
                  id="form1"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="form2"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Phone Number"
                  id="form2"
                  type="number"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form2"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                  <a href="!#">Forgot password?</a>
                </div>
                <button className="mb-4 w-100 reg_buttons">Sign up</button>
                <p className="text-center">
                  Already have an Account
                  <Link className="mx-2" to="/Signin">
                    Sign in
                  </Link>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Signup;
