import React from "react";

function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(135deg, #FFF3C4, #F9E076)",
        // background: "linear-gradient(135deg, #E6C15A, #F5D76E)",
        // background: "linear-gradient(135deg, #D4AF37, #FFD700)",
        // background: "linear-gradient(135deg, #E6C15A, #D4A017)",

        position: "relative",
        minHeight: "185px",      // 🔽 reduced background height
        padding: "15px",    // 🔽 less padding
      }}
    >
      {/* Logo - Left Corner */}
      <img
        src="/zophion-logo.png"
        alt="Zophion Logo"
        style={{
          width: "180px",        // 🔽 smaller logo
          height: "180px",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      />

      {/* Center Content */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "60px",    // 🔽 pulls content up
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "36px", margin: 0}}>
          
          ZOPHION ENTERPRISES
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginTop: "16px",
            lineHeight: "1.5",
          }}
        >
          Zophion Enterprises specializes in export & import, cosmetics,
          manpower solutions, and website designing with a focus on
          quality and reliability.
        </p>
      </div>
    </header>
  );
}

export default Header;
