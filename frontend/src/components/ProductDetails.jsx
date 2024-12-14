import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/carte";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { error, sendRequest: fetchProduct } = useHttp();
  const [product, setProduct] = useState();

  useEffect(() => {
    const transformProducts = (productsObj) => {
      setProduct(productsObj);
    };
    fetchProduct(
      {
        url: "http://localhost:8080/api/products/" + params.id,
      },
      transformProducts
    );
  }, [fetchProduct, params]);
  if (error) console.log(error);
  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        id: product.id,
        price: product.unitPrice,
        name: product.name,
      })
    );
  };
  return (
    <>
      {product === undefined ? (
        <h2>is Loading...</h2>
      ) : (
        <div className="container my-5">
          <div className="row">
            {/* Product Image */}
            <div className="col-md-6">
              <img
                src={"/" + product.imageUrl}
                alt={product.name}
                className="img-fluid rounded"
              />
            </div>

            {/* Product Details */}
            <div className="col-md-6">
              <h1 className="display-5">{}</h1>
              <p className="text-muted">Category: {product.sku}</p>
              <h2 className="text-primary">{product.unitPrice} DT</h2>
              <p className="mt-4">{product.description}</p>
              <button
                className="btn btn-success btn-lg mt-3"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="row mt-5">
            <div className="col">
              <h3></h3>
              <p>{}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
