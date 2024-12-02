import PaginationBasic from "./UI/PaginationBasic";
const Footer = () => {
  return (
    <div
      style={{
        padding: "10px 20px",
        backgroundColor: "#f8f9fa", // Light background
        borderTop: "1px solid #dee2e6",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Empty column */}
        <div style={{ flex: 2 }}></div>
        {/* Page info */}
        <div
          style={{
            flex: 0.8,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <PaginationBasic />
        </div>
      </div>
    </div>
  );
};

export default Footer;
