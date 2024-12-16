import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const products = useSelector((state) => state.cart);
  const { sendRequest } = useHttp();
  const [states, setStates] = useState([]);
  useEffect(() => {
    const transformStates = (statesObj) => {
      const statesArray = [];
      statesObj["_embedded"]["states"].forEach((element) => {
        statesArray.push(element);
      });
      setStates(statesArray);
    };
    sendRequest(
      {
        url: "http://localhost:8080/api/states?size=24",
      },
      transformStates
    );
  }, [sendRequest]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = {
      customer: {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
      },
      shippingAddress: {
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
      },
      billingAddress: {
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
      },
      order: {
        totalPrice: products.totalAmount,
        totalQuantity: products.totalQuantity,
      },
      orderItems: products.items.map((item) => ({
        imageUrl: item.image,
        quantity: item.quantity,
        unitPrice: item.price,
        productId: item.id,
      })),
    };
    sendRequest({
      url: "http://localhost:8080/api/checkout/purchase",
      method: "POST",
      body: body,
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Post": " application/json; charset=UTF-8",
        Accept: "*/*",
      },
    });
  };

  return (
    <Form style={{ padding: "80px" }} onSubmit={formSubmitHandler}>
      <fieldset>
        <legend className="mb-3">Information</legend>

        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>state</Form.Label>
          <Form.Select style={{ width: "100%" }} name="state">
            {states.map((e) => (
              <option key={e.id}>{e.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label>city</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" name="city" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="street">
          <Form.Label>street</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the street"
            name="street"
          />
        </Form.Group>
      </fieldset>
      <fieldset>
        <legend className="mb-3">Credit Card</legend>
        <Form.Group className="mb-3" controlId="cardType">
          <Form.Label>Card Type</Form.Label>
          <Form.Select style={{ width: "100%" }} name="CreditCard">
            <option></option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="cardName">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card name"
            name="cardName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cardNumber">
          <Form.Label>Card number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Card number"
            name="cardNumber"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="securityCode">
          <Form.Label>Security Code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter security code"
            name="securityCode"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Expiration Month</Form.Label>
          <Form.Select style={{ width: "100%" }} name="expirationMonth">
            {[...Array(12)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Expiration Year</Form.Label>
          <Form.Select style={{ width: "100%" }} name="expirationYear">
            {[...Array(10)].map((e, i) => (
              <option key={i}>{new Date().getFullYear() + i}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </fieldset>
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
