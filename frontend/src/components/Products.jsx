import ProductBox from "./ProductBox";

export const Products = () => {
  const products = [4, 4, 8, 4, 4, 4, 4, 4];
  return (
    <div className="row">
      {products.map((product) => (
        <ProductBox
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
