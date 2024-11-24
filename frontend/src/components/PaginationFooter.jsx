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

        {/* Items per page */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "10px" }}>Items per page</label>
          <select
            style={{
              padding: "5px",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </select>
        </div>

        {/* Page info */}
        <div
          style={{
            flex: 0.8,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          1 - 10 of 100
        </div>

        {/* Pagination arrows */}
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            style={{
              color: "#6c757d",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
          <a
            href="#"
            style={{
              color: "#6c757d",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
