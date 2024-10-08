import React, { useState } from "react";
import {
  Row,
  Form,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"
import Loader from "./Loader";
// import { useNavigate } from "react-router-dom";
const Reset_Password = () => {
    // const { id,token} = useParams();
    const [password,setpassword]=useState();
    const [confirmpass,setconfirmpass]=useState();
    const [loading,setloading]=useState(false);
    const handlesubmit = ()=>{
        setloading()
    }
  return (
    <section className="">
      <Loader showimg={loading} />
      <div className="d-flex justify-content-center mt-5">
        <Card className="shadow col-xl-6 col-sx-12 mx-2">
          <CardHeader className="px-3 fw-bold">Reset Password</CardHeader>
          <CardBody>
            <Form className="" method="post" onSubmit={handlesubmit}>
              <FormGroup className="mt-3">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label
                      className="form-control-label"
                      htmlFor="input-new-password"
                    >
                      New Password :
                    </Label>
                  </Col>
                  <Col md="8">
                    <Input
                      className="form-control-alternative"
                      id="input-new-password"
                      placeholder="New Password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup className="mt-3">
                <Row className="align-items-center">
                  <Col md="4">
                    <Label
                      className="form-control-label"
                      htmlFor="input-confirm-password"
                    >
                      Confirm New Password :
                    </Label>
                  </Col>
                  <Col md="8">
                    <Input
                      className="form-control-alternative"
                      id="input-confirm-password"
                      placeholder="Confirm New Password"
                      type="password"
                      required
                      value={confirmpass}
                      onChange={(e) => setconfirmpass(e.target.value)}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <div className="d-flex justify-content-center">
                <button typeof="submit" className="btn btn-primary mt-2">
                  Reset My Password
                </button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Reset_Password;
