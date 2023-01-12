import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";
import { PBauthenticate } from "../store/auth-actions";
import { Card, Col, Container, Row } from "react-bootstrap";

function LogInPage() {
  const userInputRef = useRef();
  const passInputRef = useRef();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    const user = userInputRef.current.value;
    const pass = passInputRef.current.value;
    await dispatch(PBauthenticate({ email: user, pass: pass }));
    navigate('/dashboard');
  };

  return (
    <Container>
      <Row></Row>
      <Row>
        <Col></Col>
        <Col className="mt-5">
          <Card>
            <Card.Body>
              <Form onSubmit={authSubmitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    placeholder="Enter Username"
                    ref={userInputRef}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your information with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={passInputRef}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default LogInPage;
