import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
} from "reactstrap";
// import axiosInstance from "../api/Axoisinstance";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const Forgot_Password = () => {
    const handlesubmit = () =>{}
    const [email,setemail]=useState();
  return (
    <div className="row d-flex justify-content-center mt-5 mx-2">
      <Card className="shadow col-xl-6 col-sx-12 px-0">
        <CardHeader className="px-3 fw-bold">Forget Password</CardHeader>
        <CardBody>
          <Form onSubmit={handlesubmit}>
            <FormGroup className="mt-3">
              <Row className="align-items-center">
                <Col md="4">
                  <Label className="form-control-label" htmlFor="input-email">
                    Email Address :
                  </Label>
                </Col>
                <Col md="8">
                  <Input
                    className="form-control-alternative"
                    id="input-email"
                    placeholder="Enter Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </Col>
              </Row>
            </FormGroup>
            <div className="d-flex justify-content-center">
              <button typeof="submit" className="btn btn-primary mt-2">
                Send Password Reset Link
              </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Forgot_Password