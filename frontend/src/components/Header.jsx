import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = ({ menuSideBarHandler }) => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(cart.totalAmount);
  const [totalQuantity, setTotalQuantity] = useState(cart.totalQuantity);

  const [searchInput, setsearchInput] = useState("");
  const searchInputHandler = (e) => {
    setsearchInput(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotalAmount(JSON.parse(localStorage.getItem("cart")).totalAmount);
    setTotalQuantity(JSON.parse(localStorage.getItem("cart")).totalQuantity);
  }, [cart]);

  return (
    <header
      style={{
        backgroundColor: "#f8f9fa", // light background
        padding: "15px 0", // vertical padding
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // light shadow
      }}
    >
      <div style={{ padding: "0 30px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button onClick={menuSideBarHandler}>{"->"}</button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "60%",
              }}
            >
              <input
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  fontSize: "18px",
                  border: "1px solid #ced4da",
                  borderRadius: "4px",
                  marginRight: "10px",
                }}
                onChange={searchInputHandler}
                value={searchInput}
                type="text"
                name="search"
                placeholder="Search for data ..."
              />
              <Link
                style={{
                  backgroundColor: "#007bff", // primary color
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                to={!searchInput.trim() ? "" : "/search/" + searchInput}
              >
                Search
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="shopping-detail.html"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    marginRight: "5px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "#007bff",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  {totalAmount.toFixed(2) + " DT "}
                </div>
                <Link
                  to="/checkout-products"
                  className="fa fa-shopping-cart"
                  style={{ fontSize: "20px", color: "#000" }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                    {totalQuantity}
                  </span>
                </Link>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
