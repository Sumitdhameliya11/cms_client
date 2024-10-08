import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import AxiosInstance from "../api/Axiosinstance";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const Change_password = () => {
    const [newpassword, setnewpassword] = useState();
  const [oldpassword, setoldpassword] = useState();
  const [cpassword, setcpassword] = useState();
  const navigate = useNavigate();
  const update_password = async () => {
    const user_id = Cookies.get('user_id');
    if(newpassword !== cpassword){
      alert("password not match");
      return;
    }
    AxiosInstance.put('/User/changepassword.php',{ id:user_id,oldpassword:oldpassword,newpassword:newpassword},{
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res)=>{
      console.log(res);
      // alert(res?.data?.message);
      setoldpassword('');
      setnewpassword('');
      setcpassword('');
      Cookies.remove('user_id');
      Cookies.remove('email');
      Cookies.remove('role');
      navigate('/login');
      
    })
  };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height:"80vh" }}>
    {/* <Loader showimg={loading}/> */}
      <Form  className="w-75 shadow p-3 rounded-3">
        <Row>
          <Col lg={12}>
            <FormGroup className="mb-4">
              <Label for="oldPassword" className="fw-bold">
                Old Password :
              </Label>
              <Input
                type="password"
                name="oldPassword"
                value={oldpassword}
                onChange={(e) => setoldpassword(e.target.value)}
                placeholder="Enter Old Password"
                style={{
                  boxShadow: " 0px 0px 8px 2px rgba(0, 0, 0, 0.160)",
                }}
                required
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="newPassword" className="fw-bold">
                New Password :
              </Label>
              <Input
                type="password"
                name="newPassword"
                value={newpassword}
                onChange={(e) => setnewpassword(e.target.value)}
                placeholder="Enter New Password"
                style={{
                  boxShadow: " 0px 0px 8px 2px rgba(0, 0, 0, 0.160)",
                }}
                required
              />
              <p style={{ fontSize: "14px" }}>
                1 lowercase & 1 uppercase, 1 number (0-9), 1 Special Character
                (!@#$%^&*), At least 8 Characters
              </p>
            </FormGroup>
            <FormGroup className="mb-5">
              <Label for="confirmPassword" className="fw-bold">
                Confirm Password :
              </Label>
              <Input
                type="password"
                name="confirmPassword"
                value={cpassword}
                onChange={(e) => setcpassword(e.target.value)}
                placeholder="Confirm New Password"
                style={{
                  boxShadow: "0px 0px 8px 2px rgba(0, 0, 0, 0.160)",
                }}
                required
              />
            </FormGroup>
            <div className="d-grid">
              <Button color="primary" onClick={update_password}>
                Reset Password
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Change_password