import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  Container,
  Table,
  InputGroup,
  InputGroupText,
  ModalHeader
} from "reactstrap";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import DataSaverOnRoundedIcon from "@mui/icons-material/DataSaverOnRounded";
import SearchIcon from "@mui/icons-material/Search";
import AxiosInstance from "../api/Axiosinstance";
const Staff_registration = () => {
  const [modal, setModal] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [staffdata, setstaffdata] = useState([]);
  const [editmode, seteditmode] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const [editid, seteditid] = useState("");
  const [role,setrole]=useState("");
  const [searchinput, setsearchinput] = useState("");
  useEffect(()=>{
    fetchdata();
  },[])
  const fetchdata = ()=>{
    AxiosInstance.get('/admin_dashboard/getStaff.php').then((res)=>{
      setstaffdata(res?.data?.admin_data);
    })
  }
  const handleedit = (item) => {
    setModal(true);
    seteditmode(true);
    seteditid(item?.id);
    setname(item?.name);
    setemail(item?.email);
    setpassword(item?.password);
    setrole(item?.role);
  };
  const handledelete = (id) => {
    AxiosInstance.delete(`/admin_dashboard/deletestaff.php?id=${id}`).then((res)=>{
      alert(res?.data?.message);
      fetchdata();
    })
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email) {
      seterrorMessage("Please enter email");
      return ;
    }
    if (!password) {
      seterrorMessage("Please enter password");
      return ;
    }

    if (password !== cpassword) {
      seterrorMessage("password does not match");
      return ;
    }
    {editmode ?
    AxiosInstance.put(
      "/admin_dashboard/updatestaff.php",
      {id:editid,name: name, email: email, password: password, role: role },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      alert(res.data.message);
      setname("");
      setemail("");
      setpassword("");
      setcpassword("");
      setModal(false);
      fetchdata();
    }) :
    AxiosInstance.post(
      "/User/registration.php",
      { name: name, email: email, password: password, role:role },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      alert(res.data.message);
      setname("");
      setemail("");
      setpassword("");
      setcpassword("");
      setModal(false);
      fetchdata();
    }); }
  };
  return (
    <div className="Add_student">
      <div className="d-flex justify-content-between me-4 mt-5 w-100 bg-white">
        <InputGroup className="mb-3 d-flex justify-content-start w-50 ms-3 pe-5">
          <InputGroupText className="border-end-0 bg-white">
            <SearchIcon />
          </InputGroupText>
          <Input
            className="border-start-0 ms-0 ps-0 border"
            type="text"
            placeholder="Search by Email address"
            value={searchinput}
            onChange={(e) => setsearchinput(e.target.value)}
          />
        </InputGroup>
        <div className="d-flex justify-content-end">
          <Button
            typeof="submit"
            color="success"
            className="btn position-fixed d-flex me-4"
            onClick={() => {
              setModal(true);
            }}
          >
            <DataSaverOnRoundedIcon className="" /> Add
          </Button>
        </div>
      </div>
      {/* ------------Table----------- */}
      <div className="mt-5">
        <Container>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>password</th>
                <th>Action</th>
              </tr>
            </thead>
            {staffdata &&
              staffdata.map((item, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td>{item?.id ? item?.id : " "}</td>
                    <td>{item?.email ? item?.email : " "}</td>
                    <td>{item?.password ? item?.password : " "}</td>
                    <td>
                      <div className="">
                        <button
                          className="btn btn-warning me-1"
                          onClick={() => {
                            handleedit(item);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handledelete(item?.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
          </Table>
        </Container>
      </div>

            {/* ===================================== Modals ===================================== */}
            <Modal
        className="modal"
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        centered
      >
        <ModalHeader toggle={() => setModal(!modal)}>Add Student</ModalHeader>
        <ModalBody>
          <Container className="mt-5">
            <Form onSubmit={handlesubmit}>
            <FormGroup row className="justify-content-center">
                <Label for="email" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Name :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    required
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Col>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="email" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Email :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Col>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="name" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Password :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="password"
                    name="name"
                    id="name"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Col>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="name" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Confirm Password :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="password"
                    name="name"
                    id="name"
                    placeholder="Enter Password"
                    required
                    value={cpassword}
                    onChange={(e) => setcpassword(e.target.value)}
                  />
                </Col>
                {errorMessage && (
                  <div style={{ color: "red" }}>{errorMessage}</div>
                )}
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="role"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  role :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="role"
                    id="role"
                    required
                    value={role}
                    onChange={(e) => {
                      setrole(e.target.value);
                    }}
                  >
                    <option value="">Select a status</option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="student">Student</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Row className="justify-content-center">
                  <Col sm={10} className="text-center">
                    <Button color="primary" type="submit" sm={10} md={12}>
                      {editmode ? "Edit" : "Submit"}
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Staff_registration