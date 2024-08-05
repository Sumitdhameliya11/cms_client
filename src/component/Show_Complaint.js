import React, { useState } from "react";
import { Modal, ModalBody, Container, Table } from "reactstrap";
const handleedit = () => {};
const handledelete = () => {};
const Show_Complaint = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      userId: 101,
      email: 'student1@example.com',
      mobileNumber: '1234567890',
      category: 'Lab',
      subcategory: 'Lab 1',
      problem: 'Equipment malfunction',
      createDate: '2024-08-01',
      resolveDate: null,
      resolveName: null,
      status: 'Open',
      computerIp: '192.168.1.2',
      resolveIp: null,
      priority: 'High',
    },
    // ...other initial complaints
  ]);
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
  );
};

export default Show_Complaint;
