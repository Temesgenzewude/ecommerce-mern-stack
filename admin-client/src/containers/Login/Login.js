import React, { useEffect, useState } from "react";
import HeaderLayout from "../../components/Layout/HeaderLayout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import Input from "../../components/UI/Input/Input";

import { isUserLoggedIn, login } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector(state => state.auth);


  const dispatch = useDispatch();

 
  

  const userLogin = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to="/" />;
  }

  return (
    <HeaderLayout>
      <Container>
        <Row style={{ marginTop: "6rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </HeaderLayout>
  );
}
