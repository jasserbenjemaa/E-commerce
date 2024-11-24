import img from "../assets/images/products/placeholder.png";
const ProductBox = () => {
  return (
    <div
      style={{
        flex: "0 0 25%", // Equivalent to col-md-3
        maxWidth: "25%",
        padding: "15px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "15px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={img}
          alt="Product"
          style={{
            height: "auto",
            marginBottom: "15px",
          }}
        />
        <h1
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Lorem ipsum dolor sit amet
        </h1>
        <h2
          style={{
            fontSize: "16px",
            color: "#777",
            marginBottom: "15px",
          }}
        >
          Duis aute irure dolor in reprehenderit in voluptate
        </h2>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#007bff", // Bootstrap primary color
            marginBottom: "15px",
          }}
        >
          29.22 $
        </div>
        <a
          href="#"
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductBox;
