import { useEffect, useRef } from "react";
import PocketBase from "pocketbase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

function LogInPage() {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const pb = new PocketBase("http://127.0.0.1:8090/");
  const auth = localStorage.getItem(pb);

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const pass = passInputRef.current.value;

    const authData = await pb.collection("users").authWithPassword(email, pass);

    console.log(pb.authStore.isValid);
  };

  return (
    <Form onSubmit={authSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control placeholder="Enter Username" ref={emailInputRef} />
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
      {auth && (
        <Alert key="primary" variant="success">
          Test
        </Alert>
      )}
    </Form>
  );
}

export default LogInPage;
