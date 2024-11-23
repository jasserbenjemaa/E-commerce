const MenuSideBar = () => {
  return (
    <>
      <aside className="menu-sidebar d-none d-lg-block">
        <div className="logo">
          <a href="home.html">
            <img
              src="assets/images/logo.png"
              alt="luv2shop logo"
              className="img-fluid"
            />
          </a>
        </div>
        <div className="menu-sidebar-content js-scrollbar1">
          <nav className="navbar-sidebar" aria-label="Sidebar navigation">
            <ul className="list-unstyled navbar-list">
              <li>
                <a href="/books">Books</a>
              </li>
              <li>
                <a href="/coffee-mugs">Coffee Mugs</a>
              </li>
              <li>
                <a href="/mouse-pads">Mouse Pads</a>
              </li>
              <li>
                <a href="/luggage-tags">Luggage Tags</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default MenuSideBar;
