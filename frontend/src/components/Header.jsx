export const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f8f9fa", // light background
        padding: "15px 0", // vertical padding
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // light shadow
      }}
    >
      <div style={{ padding: "0 30px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <form
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
              onSubmit={(e) => e.preventDefault()}
              method="GET"
            >
              <input
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  fontSize: "18px",
                  border: "1px solid #ced4da",
                  borderRadius: "4px",
                  marginRight: "10px",
                }}
                type="text"
                name="search"
                placeholder="Search for data ..."
              />
              <button
                style={{
                  backgroundColor: "#007bff", // primary color
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Search
              </button>
            </form>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="shopping-detail.html"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    marginRight: "5px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  19.22{" "}
                  <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                    2
                  </span>
                </div>
                <i
                  className="fa fa-shopping-cart"
                  style={{ fontSize: "20px", color: "#000" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <div style={{ marginTop: "15px" }}></div>
        </div>
      </div>
    </header>
  );
};
