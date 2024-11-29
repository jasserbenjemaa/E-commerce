import { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
const Home = () => {
  const params = useParams();
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
      {
        url: `http://localhost:8080/api/products/search/findByCategoryId?id=${params.id}`,
      },
      transformProducts
    );
  }, [fetchProducts, params.id]);
  if (error) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? (
        <h2>is Loading...</h2>
      ) : (
        <div className="row">
          {products.map((product) => (
            <ProductBox
              key={product.id}
              name={product.name}
              description={product.description}
              unitPrice={product.unitPrice}
              unitsInStock={product.unitsInStock}
              image={product.imageUrl}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
