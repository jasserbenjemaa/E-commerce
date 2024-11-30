import { Outlet } from "react-router-dom";
import { useState } from "react";
import MenuSideBar from "../components/MenuSideBar";
import Header from "../components/Header";
import PaginationFooter from "../components/PaginationFooter";
const RootLayout = () => {
  const [menuSideBarIsVisible, setMenuSideBarIsVisible] = useState(false);
  const menuSideBarHandler = () => {
    setMenuSideBarIsVisible((prev) => !prev);
  };
  return (
    <>
      <div className="page-wrapper">
        <MenuSideBar
          menuSideBarIsVisible={menuSideBarIsVisible}
          menuSideBarHandler={menuSideBarHandler}
        />
        <div className="page-container">
          <Header menuSideBarHandler={menuSideBarHandler} />

          <div className="main-content">
            <div className="section-content section-content-p30">
              <div className="container-fluid">
                <Outlet />
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
export default RootLayout;
