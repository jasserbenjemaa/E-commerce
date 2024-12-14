import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CheckoutForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="tel" placeholder="Enter your phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label>Country</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>state</Form.Label>
        <Form.Select>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>city</Form.Label>
        <Form.Select>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CheckoutForm;
