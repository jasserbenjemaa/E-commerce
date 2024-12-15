import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const CheckoutForm = () => {
  const products = useSelector((state) => state.cart);
  const { sendRequest: fetchProducts } = useHttp();
  const [states, setStates] = useState([]);
  useEffect(() => {
    const transformStates = (statesObj) => {
      const statesArray = [];
      statesObj["_embedded"]["states"].forEach((element) => {
        statesArray.push(element);
      });
      setStates(statesArray);
    };
    fetchProducts(
      {
        url: "http://localhost:8080/api/states?size=24",
      },
      transformStates
    );
  }, [fetchProducts]);

  return (
    <Form style={{ padding: "80px" }}>
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

      <Form.Group className="mb-12">
        <Form.Label>state</Form.Label>
        <Form.Select>
          {states.map((e) => (
            <option key={e.id}>{e.name}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="city">
        <Form.Label>city</Form.Label>
        <Form.Control type="text" placeholder="Enter your city" />
      </Form.Group>
      <fieldset>
        <legend className="mb-3">Review your order</legend>
        <p></p>
        <p></p>
        <p>Total Quantity : {products.totalQuantity}</p>
        <p>Shipping : FREE</p>
        <p>Total Price : {products.totalAmount}</p>
      </fieldset>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CheckoutForm;
