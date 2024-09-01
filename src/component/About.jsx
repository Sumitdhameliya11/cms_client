import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sumit from "../image/sumit.png";
import nirav from "../image/nirav.jpeg";
import uttam from "../image/uttam.jpg";
import parth from "../image/parth.jpg";
import shruti from "../image/shruti.jpg";

const About = () => {
  const developers = [
    {
      id: 1,
      name: "Sumit Dhameliya",
      image: sumit,
      specialization: "Full-stack Developer",
      skill: "React.js, MySQL, MongoDB, Node.js, PHP, Bootstrap",
    },
    {
      id: 2,
      name: "Nirav Mathukiya",
      image: nirav,
      specialization: "Full-stack Developer",
      skill: "React.js, Next.js, Node.js, Bootstrap",
    },
    {
      id: 3,
      name: "Uttam Dobariya",
      image: uttam,
      specialization: "Front-End Developer",
      skill: "React.js, Next.js, Tailwind CSS, Bootstrap",
    },
    {
      id: 4,
      name: "Parth Dudhatra",
      image: parth,
      specialization: "Front-End Developer",
      skill: "Naggai, Group ma pizza mokalva, Bootstrap",
    },
    {
      id: 5,
      name: "Shruti Ghevariya",
      image: shruti,
      specialization: "Tester",
      skill: "Postman, Documentation",
    },
  ];
  return (
    <Container>
      <h1 className="text-center text-primary fw-bold mt-3 d-flex flex-column">
        Faces Behind Creative Minds
        <span className="fs-6 text-center mt-1">
          Sutex Complaint Management
        </span>
      </h1>

      <Row className=" align-items-center justify-content-center  my-4">
        {developers.map((developer) => (
          <Col xs={12} md={4} lg={4} key={developer.id} className="text-center">
            <div>
              <img
                src={developer.image}
                alt={developer.name}
                className="img-fluid"
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "10px",
                  objectFit:"cover"
                }}
              />
            </div>
            <div className="ps-1 ms-0">
              <h3 className="fw-bold text-start">{developer.name}</h3>
              <p className="text-start">
                <strong>Specialization:</strong> {developer.specialization}
              </p>
              <p className="text-start">
                <strong>Skills:</strong> {developer.skill}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
