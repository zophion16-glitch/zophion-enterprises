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
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/919600411019?text=Hello%20Zophion%20Enterprises,%20we%20are%20interested%20in%20export%20products"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaWhatsapp color="#25D366" />
          <span style={labelStyle}>WhatsApp</span>
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=zophion16@gmail.com&su=Business%20Inquiry&body=Hello%20Zophion%20Enterprises,%0A%0AI%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaEnvelope color="#B22222" />
          <span style={labelStyle}>Gmail</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/blyzza_herbs/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
        >
          <FaInstagram color="#dd2a7b" />
          <span style={labelStyle}>Instagram</span>
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

const iconStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  fontSize: "48px",
  transition: "transform 0.3s ease",
};

const labelStyle = {
  marginTop: "10px",
  fontWeight: "600",
  fontSize: "16px",
  color: "#333",
};

export default Contact;
