import { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();
  useEffect(() => {
    const transformProducts = (productsObj) => {
      const loadedProducts = [];
      const products = productsObj["_embedded"]["products"];
      products.forEach((element) => {
        loadedProducts.push(element);
      });

      setProducts(loadedProducts);
    };
    fetchProducts(
      { url: "http://localhost:8080/api/products" },
      transformProducts
    );
  }, [fetchProducts]);
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h2 className="mt-3 mb-3">Products</h2>
      {isLoading ? (
        <h4>Loading products...</h4>
      ) : (
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((element, i) => {
              return (
                <tr key={i}>
                  <td>{element.name}</td>
                  <td>{element.unitPrice}</td>
                  <td>{element.unitsInStock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ProductList;
