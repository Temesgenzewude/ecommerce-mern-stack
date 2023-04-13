import React from "react";
// import { Row, Col, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

import HeaderLayout from "../../components/Layout/HeaderLayout";
import "./home.css";

export default function Home(props) {
  return (
    <HeaderLayout sidebar>
      {/* <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <ul>
              <li>
                <NavLink to= "/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/orders">Orders</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={10} style={{ marginLeft: "auto" }}>
            Container
          </Col>
        </Row>
      </Container> */}

      {/* <div className="container-fluid bg-light text-dark p-5">
        <div className="container bg-light p-5">
          <h1 className="display-4 fw-bold text-center">
            Welcome to Admin Dashboard
          </h1>
          <hr />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div> */}
    </HeaderLayout>
  );
}
