import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosInstance from "../api/Axiosinstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [errormessage, seterrormessage] = useState();
  const [response,setresponse]=useState();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email) {
      seterrormessage("Please enter email");
    }
    if (!password) {
      seterrormessage("Please enter password");
    }

    AxiosInstance.post(
      "/User/login.php",
      { email: email, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setresponse(res.data.message);
        Cookies.set("user_id", res.data.user.id, { expires: 1 }); // expires in 1 day
        Cookies.set("email", res.data.user.email, { expires: 1 });
        Cookies.set("role", res.data.user.role, { expires: 1 });
        navigate("/dashboard");
      })
  };
  return (
    <Container
      className="login d-flex justify-content-center align-items-center min-vh-100"
      id="container"
      fluid
    >
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          <div className=" p-4 rounded shadow-lg" id="div">
            <div className="text-center mb-4">
              <h2 style={{ color: "black" }} className="fw-bold">
                Login
              </h2>
              <p className="fw-bold">
                Welcome Back! Please Sign In to Add Complaint.
              </p>
            </div>
            {response && <div className="text-center fs-4" style={{ color: "red" }}>{response}</div>}
            <Form method="post" onSubmit={handlesubmit}>
              <FormGroup>
                <Label
                  for="email"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Email :
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username@gmail.com"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                {errormessage && (
                  <div style={{ color: "red" }}>{errormessage}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label
                  for="password"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Password :
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                {errormessage && (
                  <div style={{ color: "red" }}>{errormessage}</div>
                )}
              </FormGroup>
              <FormGroup className="text-right">
                <a
                  href="/forget-password"
                  className="text-decoration-none fw-bold"
                  style={{ color: "black" }}
                >
                  Forgot Password?
                </a>
              </FormGroup>
              <Button color="primary" block>
                Sign in
              </Button>

              <div className="pt-0 my-2">
                <Label className="d-inline fw-medium ">
                  Sign up to create a new account&nbsp;
                  <a
                    href={`/register`}
                    className="text-decoration-none text-black fw-bold"
                  >
                    Sign up now.
                  </a>
                </Label>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
