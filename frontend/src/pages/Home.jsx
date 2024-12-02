import { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import { useParams, useSearchParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { useDispatch } from "react-redux";
import { setPageNumbers } from "../store/pageNumber";
const Home = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const searchPrams = useSearchParams();
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp();
  useEffect(() => {
    const checkQuery = () => {
      if (JSON.stringify(params) === "{}")
        return `?page=${searchPrams[0].get("page") ?? "0"}`;

      return params.name
        ? `/search/findByNameContaining?name=${params.name}&page=${
            searchPrams[0].get("page") ?? "0"
          }&size=12`
        : `/search/findByCategoryId?id=${params.id}&page=${
            searchPrams[0].get("page") ?? "0"
          }&size=12`;
    };
    const transformProducts = (productsObj) => {
      const loadedProducts = [];
      const products = productsObj["_embedded"]["products"];
      products.forEach((element) => {
        loadedProducts.push(element);
      });
      //
      dispatch(setPageNumbers(productsObj["page"]["totalPages"]));
      setProducts(loadedProducts);
    };
    fetchProducts(
      {
        url: "http://localhost:8080/api/products" + checkQuery(),
      },
      transformProducts
    );
  }, [fetchProducts, params]);
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
              id={product.id}
              name={product.name}
              unitPrice={product.unitPrice}
              image={product.imageUrl}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
