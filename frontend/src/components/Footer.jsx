import React from "react";

const Footer = () => {
  return (
    <div class="footer-pagination">
      <div class="row">
        <div class="col-md-6"></div>
        <div class="col-md-3">
          <div class="items">
            <label>Item per page</label>
            <select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
          </div>
        </div>
        <div class="col-md-2">
          <div class="number">1 - 10 of 100</div>
        </div>
        <div class="col-md-1">
          <div class="arrows">
            <a href="#">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
