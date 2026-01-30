import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#f6f8f5",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "40px",
          color: "#1f4d45",
        }}
      >
        Connect With Us
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          padding: "55px",
          borderRadius: "28px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919600411019?text=Hello%20Zophion%20Enterprises,%20we%20are%20interested%20in%20export%20products"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "50%",
            fontSize: "36px",
            textDecoration: "none",
            padding: "10px",
          }}
        >
          <FaWhatsapp />
          <span style={{ marginTop: "8px", fontWeight: "600", fontSize: "16px" }}>
            WhatsApp
          </span>
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=zophion16@gmail.com&su=Business%20Inquiry&body=Hello%20Zophion%20Enterprises,%0A%0AI%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #8B0000, #B22222)",
            color: "#fff",
            borderRadius: "50%",
            fontSize: "36px",
            textDecoration: "none",
            padding: "10px",
          }}
        >
          <FaEnvelope />
          <span style={{ marginTop: "8px", fontWeight: "600", fontSize: "16px" }}>
            Gmail
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/blyzza_herbs/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100px",
            height: "100px",
            background:
              "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
            color: "#fff",
            borderRadius: "50%",
            fontSize: "36px",
            textDecoration: "none",
            padding: "10px",
          }}
        >
          <FaInstagram />
          <span style={{ marginTop: "8px", fontWeight: "600", fontSize: "16px" }}>
            Instagram
          </span>
        </a>
      </div>

      <footer
        style={{
          marginTop: "45px",
          fontSize: "14px",
          color: "#777",
        }}
      >
        © 2025 Zophion Enterprises. All Rights Reserved.
      </footer>
    </section>
  );
}

export default Contact;
