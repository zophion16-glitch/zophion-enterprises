import React, { useState } from "react";

function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Data:", formData);
    alert("Inquiry submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section style={{ padding: "60px 20px", background: "#f6faf6" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Inquiry / Quotation
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Service</option>
          <option value="Export & Import">Export & Import</option>
          <option value="Cosmetics">Cosmetics</option>
          <option value="Manpower">Manpower</option>
          <option value="Website Designing">Website Designing</option>
        </select>

        <textarea
          name="message"
          placeholder="Your Requirements"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2e7d32",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

export default InquiryForm;
