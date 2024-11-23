export const Header = () => {
  return (
    <header className="header-desktop">
      <div className="section-content section-content-p30">
        <div className="container-fluid">
          <div className="header-wrap">
            <form className="form-header" onSubmit="return false;" method="GET">
              <input
                className="au-input au-input-xl"
                type="text"
                name="search"
                placeholder="Search for data ..."
              />
              <button className="au-btn-submit" type="submit">
                Search
              </button>
            </form>
            <div className="cart-area d-n">
              <a href="shopping-detail.html">
                <div className="total">
                  19.22 <span> 2</span>{" "}
                </div>{" "}
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="account-wrap"></div>
        </div>
      </div>
    </header>
  );
};
