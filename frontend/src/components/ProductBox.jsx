import { Link } from "react-router-dom";

const ProductBox = ({ id, name, unitPrice, image }) => {
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
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          padding: "15px",
          textAlign: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img src={"/" + image} alt={name + " image"} style={{}} />
        <Link
          to={`/products/${id}`}
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          {name}
        </Link>

        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#007bff", // Bootstrap primary color
            marginBottom: "15px",
          }}
        >
          {unitPrice} $
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
