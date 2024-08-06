import React, { useState } from "react";
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
  Table ,
  Container,
  ModalHeader,
} from "reactstrap";
const handleedit = () => {};
const handledelete = () => {};
const Show_Complaint = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      userId: 101,
      email: "student1@example.com",
      mobileNumber: "1234567890",
      category: "Lab",
      subcategory: "Lab 1",
      problem: "Equipment malfunction",
      createDate: "2024-08-01",
      resolveDate: null,
      resolveName: null,
      status: "Open",
      computerIp: "192.168.1.2",
      resolveIp: null,
      priority: "High",
    },
    // ...other initial complaints
  ]);
  const [modal, setModal] = useState(false);
  const [email, setemail] = useState("");
  const [category, setcategory] = useState();
  const [subcategory, setsubcategory] = useState();
  const [description, setdescription] = useState();
  const [date, setdate] = useState();
  const [sutno, setsutno] = useState();
  const [priority, setpriority] = useState();
  const handlesubmit = ()=>{}
  const labSubcategories = [
    "Lan Cabel",
    "Moniter",
    "Keyboard",
    "Mouse",
    "CPU",
    "Network",
    "Application",
  ];
  return (
    <div className="mt-5">
      <Container>
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>User_ID</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Problem</th>
              <th>Create Date</th>
              <th>Resolve Date</th>
              <th>Resolve Name</th>
              <th>Status</th>
              <th>Computer Ip</th>
              <th>Resolve Ip</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          {data &&
            data.map((item, idx) => (
              <tbody key={idx}>
                <tr>
                  <td>101</td>
                  <td>{item.user_id || "N/A"}</td>
                  <td>{item.email || "N/A"}</td>
                  <td>{item.Mobile_number || "N/A"}</td>
                  <td>{item.category || "N/A"}</td>
                  <td>{item.subcategory || "N/A"}</td>
                  <td>{item.problem || "N/A"}</td>
                  <td>{item.create_date || "N/A"}</td>
                  <td>{item.resolve_date || "N/A"}</td>
                  <td>{item.resolver_name || "N/A"}</td>
                  <td>{item.status || "N/A"}</td>
                  <td>{item.computer_ip || "N/A"}</td>
                  <td>{item.resolve_ip || "N/A"}</td>
                  <td>{item.priority || "N/A"}</td>
                  <td>
                    <div className="">
                      <button
                        className="btn btn-warning me-1"
                        onClick={() => {
                          handleedit(item);
                          setModal(true);
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

export default Show_Complaint;
