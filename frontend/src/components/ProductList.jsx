import { useSelector, useDispatch } from "react-redux";
import { setPageNumbers } from "../store/pageNumber";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { addItemToCart, removeItemFromCart } from "../store/carte";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageNumbers(0));
  }, [dispatch]);

  return (
    <>
      <h2 className="mt-3 mb-3">Products</h2>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>ordered</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((element) => {
            return (
              <tr key={element.id}>
                <td>
                  <img
                    src={element.image}
                    alt={element.name}
                    style={{ height: "100px" }}
                  />
                </td>
                <td>{element.name}</td>
                <td>{element.price}</td>
                <td>{element.quantity}</td>
                <td>
                  <Button
                    onClick={() =>
                      dispatch(
                        addItemToCart({
                          id: element.id,
                          name: element.name,
                          price: element.price,
                          image: element.image,
                        })
                      )
                    }
                  >
                    +
                  </Button>{" "}
                  <Button
                    onClick={() => dispatch(removeItemFromCart(element.id))}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })}
          <Link
            to="/checkout-form"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              margin: "20px",
              marginBottom: "10px",
            }}
          >
            checkout
          </Link>
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
