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
const Change_password = () => {
    const [newpassword, setnewpassword] = useState();
  const [oldpassword, setoldpassword] = useState();
  const [cpassword, setcpassword] = useState();
//   const [loading,setloading]=useState(false);
  // const [modal, setmodal] = useState(false);
  //custom sucessfully message handle
//   const Showsucess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       className: "toast-responsive mx-3",
//     });
//   };
//custom error message
//   const Showerror = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       className: "toast-responsive mx-3",
//     });
//   };
  //handle submit
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const update_password = async () => {
    // setloading(true);
    // const user = JSON.parse(localStorage.getItem("userdata"));
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   Showerror("token not found");
    //   return;
    // }

    // if (cpassword !== newpassword) {
    //   Showerror("password does not match");
    //   return;
    // }

    // AxiosInstance
    //   .put(
    //     `api/user/change_password/${user?.user_id}`,
    //     {
    //       oldpassword: oldpassword,
    //       newpassword: newpassword,
    //       cpassword: cpassword,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     setoldpassword("");
    //     setnewpassword("");
    //     setcpassword("");
    //     setTimeout(() => {
    //       setloading(false);
    //       Showsucess(response?.data?.message);
    //     }, 300);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Showerror(error?.response?.data?.message);
    //     setloading(false);
    //   });
  };
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
    {/* <Loader showimg={loading}/> */}
      <Form onSubmit={handlesubmit} className="w-75">
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