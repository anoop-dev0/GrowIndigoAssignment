import firebase from "firebase/app";
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import firebaseConfig from '../config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

class PhoneAuth extends Component {
  constructor(){
    super();
    this.state = {
      mobile:0,
      otp:0,
      disableOtp:true
    };
  }
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    
    this.setUpRecaptcha();
    let phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then( (confirmationResult) => {

        window.confirmationResult = confirmationResult;
        this.setState({disableOtp:false})
        alert("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
        this.setState({disableOtp:true})
      });
  };
  onSubmitOtp = (e) => {
    e.preventDefault();
    let otpInput = this.state.otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then( (result) => {
        this.props.history.push({
          pathname: this.props.location.state.uri,
          state: { mobile: this.state.mobile }
        });
        let user = result.user;
      })
      .catch( (error) => {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  render(){
    return (
      <div>
        <Container fluid="sm" className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Login</h2>
              <Form className="form" onSubmit={this.onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={this.onChangeHandler}
                    required
                  />
                </Form.Group>
                <Button button="Submit" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Enter OTP</h2>
              <Form className="form" onSubmit={this.onSubmitOtp}>
                <Form.Group>
                  <Form.Control
                    id="otp"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    onChange={this.onChangeHandler}
                    disabled={this.state.disableOtp}
                  />
                </Form.Group>
                <Button button="Submit" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PhoneAuth;