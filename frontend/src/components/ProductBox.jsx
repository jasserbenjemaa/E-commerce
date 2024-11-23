const ProductBox = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="product-box">
          <img
            src="assets/images/products/placeholder.png"
            className="img-responsive"
          />
          <h1>Lorem ipsum dolor sit amet</h1>
          <h2>Duis aute irure dolor in reprehenderit in voluptate</h2>
          <div className="price">19.22 $</div>
          <a href="#" className="primary-btn">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
