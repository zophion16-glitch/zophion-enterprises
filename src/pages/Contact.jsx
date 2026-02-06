import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

function Contact() {

  // 👉 hover handlers
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

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
          href="https://wa.me/919600411019"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaWhatsapp color="#25D366" />
          <span style={labelStyle}>WhatsApp</span>
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=zophion16@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope color="#B22222" />
          <span style={labelStyle}>Gmail</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/zophion/"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaInstagram color="#dd2a7b" />
          <span style={labelStyle}>Instagram</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/zophion-enterprises-62a0783ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin color="#0077b5" />
          <span style={labelStyle}>LinkedIn</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Zophion Traders"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaFacebook color="#1877F2" />
          <span style={labelStyle}>Facebook</span>
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

// 👉 styles (component keela irukkum)
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
