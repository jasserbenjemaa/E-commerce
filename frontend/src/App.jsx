import "./App.css";
import MenuSideBar from "./components/MenuSideBar";
import { Header } from "./components/Header";
import ProductBox from "./components/ProductBox";
import PaginationFooter from "./components/PaginationFooter";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 29.99,
      image: "assets/images/products/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      price: 29.99,
      image: "assets/images/products/product2.png",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      price: 39.99,
      image: "assets/images/products/product3.png",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for product 4",
      price: 49.99,
      image: "./assets/images/products/placeholder.png",
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <MenuSideBar />

        <div className="page-container">
          <Header />

          <div className="main-content">
            <div className="section-content section-content-p30">
              <div className="container-fluid">
                <div className="row">
                  {products.map((product) => (
                    <ProductBox
                      key={product.id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                    />
                  ))}
                </div>
                <PaginationFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <ul style={{ listStyleType: "none", padding: 0, textAlign: "center" }}>
          <li style={{ display: "inline", margin: "0 10px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              About Us
            </a>
          </li>
          <li style={{ display: "inline", margin: "0 10px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              Contact Us
            </a>
          </li>
          <li style={{ display: "inline", margin: "0 10px" }}>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              Help
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
