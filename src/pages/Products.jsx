import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const cardStyle = {
    width: "260px",
    height: "380px",
    borderRadius: "20px",
    backgroundColor: "#F9E076",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const imageBoxStyle = {
    height: "200px",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textBoxStyle = {
    padding: "20px",
    flexGrow: 1,
  };

  return (
    <section style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        OUR PRODUCTS
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >

        {/* Export & Import */}
        <div
          style={cardStyle}
          onClick={() => navigate("/export-import")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-8px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div style={imageBoxStyle}>
            <img src="/export-import.jpg" alt="Export Import" style={imgStyle} />
          </div>
          <div style={textBoxStyle}>
            <h3>Export & Import</h3>
            <p>End-to-end global trade services.</p>
          </div>
        </div>

        {/* Blyzza */}
        <div style={cardStyle}>
          <div style={imageBoxStyle}>
            <img src="/blyzza.jpg" alt="Blyzza" style={imgStyle} />
          </div>
          <div style={textBoxStyle}>
            <h3>Blyzza Cosmetics</h3>
            <p>Premium cosmetic products.</p>
          </div>
        </div>

        {/* Manpower */}
        <div style={cardStyle}>
          <div style={imageBoxStyle}>
            <img src="/manpower.jpg" alt="Manpower" style={imgStyle} />
          </div>
          <div style={textBoxStyle}>
            <h3>Manpower</h3>
            <p>Trusted manpower solutions.</p>
          </div>
        </div>

        {/* Website */}
        <div style={cardStyle}>
          <div style={imageBoxStyle}>
            <img src="/website.jpg" alt="Website" style={imgStyle} />
          </div>
          <div style={textBoxStyle}>
            <h3>Website Designing</h3>
            <p>Modern responsive websites.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default Products;
