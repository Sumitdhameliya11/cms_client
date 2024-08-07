import React, { useState } from "react";
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
const Registration = () => {
  const [name,setname]=useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [role,setrole]=useState("");
  const handlesubmit =(e)=>{
    e.preventDefault();
    AxiosInstance.post('/user/registration.php',{
      name,
      email,
      password,
      role
    }).then((res)=>{
      
    })
  }
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
                Registration
              </h2>
              <p className="fw-bold">Welcome Please Sign up For Add Complaint.</p>
            </div>
            <Form method="post" onSubmit={handlesubmit}>
            <FormGroup>
                <Label for="email" style={{ color: "black",fontWeight:"600"}} >
                  Name :
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter The Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" style={{ color: "black",fontWeight:"600"}}>
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
              </FormGroup>
              <FormGroup>
                <Label for="password" style={{ color: "black",fontWeight:"600"}}>
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
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="password" style={{ color: "black",fontWeight:"600"}}>
                  Role :
                </Label>
                <Input
                  type="select"
                  name="role"
                  id="role"
                  placeholder="Role"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                  required
                />
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <Button color="primary" block>
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Registration