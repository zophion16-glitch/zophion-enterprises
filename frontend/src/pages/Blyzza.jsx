import React from "react";

function Blyzza() {
  const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#fde7ec",
  padding: "40px 20px 80px",
  boxSizing: "border-box",
};


  /* 🌸 HEADER */
  const headerStyle = {
    textAlign: "center",
    marginBottom: "30px",
  };

  const titleStyle = {
    fontSize: "34px",
    fontWeight: "700",
    color: "#c2185b",
    marginBottom: "6px",
  };

  const subtitleStyle = {
    fontSize: "15px",
    color: "#555",
  };

  /* 🌸 PRODUCTS */
  const productsTitle = {
    fontSize: "26px",
    color: "#8e0038",
    marginBottom: "28px",
    textAlign: "center",
  };

  const cardsWrapper = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  };

  /* 🌸 CARD */
  const cardStyle = {
    width: "240px",
    backgroundColor: "#fff",
    borderRadius: "18px",
    padding: "24px 18px",
    boxShadow: "0 10px 22px rgba(0,0,0,0.15)",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "170px",
    objectFit: "contain",
    marginBottom: "14px",
  };

  const productName = {
    fontSize: "18px",
    color: "#d81b60",
    marginBottom: "8px",
  };

  const productDesc = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "18px",
  };

  const buttonRow = {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  };

  const addBtn = {
    padding: "7px 16px",
    borderRadius: "18px",
    border: "1px solid #d81b60",
    background: "#fff",
    color: "#d81b60",
    fontSize: "13px",
    cursor: "pointer",
  };

  const buyBtn = {
    padding: "7px 16px",
    borderRadius: "18px",
    border: "none",
    background: "#d81b60",
    color: "#fff",
    fontSize: "13px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      {/* 🌸 HEADER */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Welcome to Blyzza 💖</h1>
        <p style={subtitleStyle}>
          Premium cosmetic & skincare products crafted with care.
        </p>
      </div>

      {/* 🌸 PRODUCTS */}
      <h2 style={productsTitle}>Products</h2>

      <div style={cardsWrapper}>
        {/* Aloe Vera */}
        <div style={cardStyle}>
          <img src="/aloevera.jpg" alt="Aloe Vera Gel" style={imageStyle} />
          <h3 style={productName}>Aloe Vera Gel</h3>
          <p style={productDesc}>
            Natural aloe vera gel for glowing skin and healthy hair.
          </p>
          <div style={buttonRow}>
            <button style={addBtn}>Add</button>
            <button style={buyBtn}>Buy</button>
          </div>
        </div>

        {/* Hibiscus */}
        <div style={cardStyle}>
          <img src="/hibiscus.jpg" alt="Hibiscus Powder" style={imageStyle} />
          <h3 style={productName}>Hibiscus Powder</h3>
          <p style={productDesc}>
            Pure hibiscus powder for stronger hair and natural shine.
          </p>
          <div style={buttonRow}>
            <button style={addBtn}>Add</button>
            <button style={buyBtn}>Buy</button>
          </div>
        </div>

        {/* Chamomile */}
        <div style={cardStyle}>
          <img src="/chamomile.jpg" alt="Chamomile Powder" style={imageStyle} />
          <h3 style={productName}>Chamomile Powder</h3>
          <p style={productDesc}>
            Gentle herbal powder for soothing skin and hair care.
          </p>
          <div style={buttonRow}>
            <button style={addBtn}>Add</button>
            <button style={buyBtn}>Buy</button>
          </div>
        </div>

        {/* Butterfly Pea */}
        <div style={cardStyle}>
          <img
            src="/butterflypea.jpg"
            alt="Butterfly Pea Powder"
            style={imageStyle}
          />
          <h3 style={productName}>Butterfly Pea Powder</h3>
          <p style={productDesc}>
            Natural butterfly pea powder for hair strength and growth.
          </p>
          <div style={buttonRow}>
            <button style={addBtn}>Add</button>
            <button style={buyBtn}>Buy</button>
          </div>
        </div>

        {/* Shea Butter */}
        {/* <div style={cardStyle}>
          <img src="/sheabutter.jpg" alt="Shea Butter" style={imageStyle} />
          <h3 style={productName}>Shea Butter</h3>
          <p style={productDesc}>
            Pure shea butter for deep skin & hair nourishment.
          </p>
          <div style={buttonRow}>
            <button style={addBtn}>Add</button>
            <button style={buyBtn}>Buy</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Blyzza;
