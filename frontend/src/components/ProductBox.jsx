import React from "react";

const ProductBox = () => {
  return (
    <>
      <div class="col-md-3">
        <div class="product-box">
          <img
            src="assets/images/products/placeholder.png"
            class="img-responsive"
          />
          <h1>Lorem ipsum dolor sit amet</h1>
          <h2>Duis aute irure dolor in reprehenderit in voluptate</h2>
          <div class="price">19.22 $</div>
          <a href="#" class="primary-btn">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
