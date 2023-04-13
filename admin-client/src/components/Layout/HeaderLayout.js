import React from "react";
import Header from "../Header/Header.js";

import { Row, Col, Container } from "react-bootstrap";

import { NavLink } from "react-router-dom";

import "./style.css";

export default function HeaderLayout(props) {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : " link"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                      isActive ? "active" : " link"
                    }
                  >
                    Categories
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? "active" : " link"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/orders"
                    className={({ isActive }) =>
                      isActive ? "active" : " link"
                    }
                  >
                    Orders
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "4rem" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
}
