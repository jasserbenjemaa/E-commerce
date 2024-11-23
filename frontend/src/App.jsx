import "./App.css";
import MenuSideBar from "./components/MenuSideBar";
import { Header } from "./components/Header";
import ProductBox from "./components/ProductBox";
import PaginationFooter from "./components/PaginationFooter";

const App = () => {
  const products = [];
  return (
    <body>
      <div className="page-wrapper">
        <MenuSideBar />

        <div className="page-container">
          <Header />

          <div className="main-content">
            <div className="section-content section-content-p30">
              <div className="container-fluid">
                <div className="row">
                  {products.map((e, i) => {
                    <ProductBox elements={e} key={i} />;
                  })}
                </div>
                <PaginationFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </footer>
    </body>
  );
};

export default App;
