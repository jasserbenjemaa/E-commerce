const Footer = () => {
  return (
    <div className="footer-pagination">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-3">
          <div className="items">
            <label>Item per page</label>
            <select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
          </div>
        </div>
        <div className="col-md-2">
          <div className="number">1 - 10 of 100</div>
        </div>
        <div className="col-md-1">
          <div className="arrows">
            <a href="#">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
