import { Link } from "react-router-dom";

const MenuSideBar = ({ menuSideBarIsVisible, menuSideBarHandler }) => {
  return (
    <>
      <aside
        style={{
          display: menuSideBarIsVisible ? "" : "none",
          width: "250px",
          backgroundColor: "#343a40", // Dark background
          color: "#fff",
          position: "fixed",
          height: "100vh",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Link to="/">
            <img
              src="assets/images/logo.png"
              alt="luv2shop logo"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
          <button onClick={menuSideBarHandler}>{"<-"}</button>
        </div>
        <div
          style={{
            overflowY: "auto",
            height: "calc(100vh - 60px)", // Adjust height based on logo area
          }}
        >
          <nav aria-label="Sidebar navigation">
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <li style={{ margin: "10px 0" }}>
                <Link
                  to="/1"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "10px 20px",
                    display: "block",
                    borderRadius: "4px",
                  }}
                >
                  Books
                </Link>
              </li>
              <li style={{ margin: "10px 0" }}>
                <Link
                  to="/2"
                  href="/coffee-mugs"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "10px 20px",
                    display: "block",
                    borderRadius: "4px",
                  }}
                >
                  Coffee Mugs
                </Link>
              </li>
              <li style={{ margin: "10px 0" }}>
                <Link
                  to="/3"
                  href="/mouse-pads"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "10px 20px",
                    display: "block",
                    borderRadius: "4px",
                  }}
                >
                  Mouse Pads
                </Link>
              </li>
              <li style={{ margin: "10px 0" }}>
                <Link
                  to="/4"
                  href="/luggage-tags"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "10px 20px",
                    display: "block",
                    borderRadius: "4px",
                  }}
                >
                  Luggage Tags
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MenuSideBar;
