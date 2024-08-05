import React, { useState } from "react";
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
  ModalHeader,
} from "reactstrap";
import DataSaverOnRoundedIcon from "@mui/icons-material/DataSaverOnRounded";
const Add_Complaint = () => {
  const [modal, setModal] = useState(false);
  const [email, setemail] = useState("");
  const [category, setcategory] = useState();
  const [subcategory, setsubcategory] = useState();
  const [description, setdescription] = useState();
  const [date, setdate] = useState();
  const [sutno, setsutno] = useState();
  const [priority, setpriority] = useState();
  const labSubcategories = [
    "Lan Cabel",
    "Moniter",
    "Keyboard",
    "Mouse",
    "CPU",
    "Network",
    "Application",
  ];

  //   const [admindata, setadmindata] = useState([]);
  //   const [loading, setloading] = useState(false);
  const [searchinput, setsearchinput] = useState("");
  const handlesubmit = (e) => {};
  return (
    <div className="add-complaint">
      <div className="container border-bottom mb-4">
        <div className="d-flex justify-content-between align-item-center mt-5">
          <h3 className="fw-semibold mx-1 mb-1">Add Complaint</h3>
          <Button
            typeof="submit"
            color="success"
            className="btn d-flex me-4"
            onClick={() => {
              setModal(true);
              //   setloading(true);
              setTimeout(() => {
                // setloading(false);
              }, 500);
            }}
          >
            <DataSaverOnRoundedIcon className="" /> Add
          </Button>
        </div>
        <p>
          The Complaint Management System enables students to report issues and
          concerns easily. It ensures prompt handling and resolution of
          complaints, fostering a supportive learning environment. Stay informed
          with real-time updates and track the progress of your submissions.
        </p>
      </div>

      {/* ===================================== Modals ===================================== */}
      <Modal
        className="modal"
        size="lg"
        isOpen={modal}
        toggle={() => setModal(!modal)}
        centered
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          Cover Image Update
        </ModalHeader>
        <ModalBody>
          <Container className="mt-3">
            <Form onSubmit={handlesubmit}>
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
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="email" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Sut No :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="text"
                    name="sutno"
                    id="sutno"
                    placeholder="Enter SUTNO"
                    required
                    value={sutno}
                    onChange={(e) => setsutno(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="category"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Category :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    value={category}
                    onChange={(e) => {
                      setcategory(e.target.value);
                      setsubcategory(""); // Reset subcategory when category changes
                    }}
                  >
                    <option value="">Select a category</option>
                    <option value="LAB1">Lab1</option>
                    <option value="LAB2">LAb2</option>
                    <option value="LAB3">LAb3</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="subcategory"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Lab Subcategory :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="subcategory"
                    id="subcategory"
                    required
                    value={subcategory}
                    onChange={(e) => setsubcategory(e.target.value)}
                  >
                    <option value="">Select a subcategory</option>
                    {labSubcategories.map((labSub, index) => (
                      <option key={index} value={labSub}>
                        {labSub}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label
                  for="category"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Priority :
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="select"
                    name="category"
                    id="category"
                    required
                    value={priority}
                    onChange={(e) => {
                      setpriority(e.target.value);
                    }}
                  >
                    <option value="">Select a priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row className="justify-content-center">
                <Label
                  for="description"
                  sm={2}
                  md={2}
                  style={{ color: "#1974D2" }}
                >
                  Problem Description:
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Enter your problem description"
                    required
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="justify-content-center">
                <Label for="date" sm={2} md={2} style={{ color: "#1974D2" }}>
                  Date:
                </Label>
                <Col sm={10} md={8}>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Select date"
                    required
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Row className="justify-content-center">
                  <Col sm={10} className="text-center">
                    <Button color="primary" type="submit" sm={10} md={12}>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Add_Complaint;
