function ExportImport() {
  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <h1 style={{ marginBottom: "10px" }}>
        Export & Import Brochure
      </h1> */}

      <p style={{ marginBottom: "30px", color: "#fcfbfb" }}>
        Click below to download our brochure
      </p>

      {/* DOWNLOAD ONLY */}
      <a
        href="/export-import-brochure.pdf"
        download="Export-Import-Brochure.pdf"
        style={{
          padding: "14px 35px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "40px",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        📥 Download Brochure
      </a>
    </div>
  );
}

export default ExportImport;
