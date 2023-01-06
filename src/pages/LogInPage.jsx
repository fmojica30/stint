import { useRef } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { PBauthenticate } from "../store/auth-actions";
import { Col, Container, Row } from "react-bootstrap";

function LogInPage() {
  const userInputRef = useRef();
  const passInputRef = useRef();
  const dispatch = useDispatch();

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(
      PBauthenticate({
        email: userInputRef.current.value,
        pass: passInputRef.current.value,
      })
    );
  };

  return (
    <Container>
      <Row></Row>
      <Row>
        <Col></Col>
        <Col className="mt-5">
          <Form onSubmit={authSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter Username" ref={userInputRef} />
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
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default LogInPage;
