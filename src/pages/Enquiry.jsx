import React, { useState } from "react";
import "../styles/EnquiryForm.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    billNumber: "",
    phone: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry Submitted");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      billNumber: "",
      phone: "",
      enquiry: "",
    });
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-box">
        <h2>ENQUIRY FORM</h2>
        <p className="subtitle">Our team will contact you shortly</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" placeholder="Customer Name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input name="email" placeholder="mail@example.com" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Bill No</label>
            <input name="billNumber" placeholder="Bill Number" value={formData.billNumber} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Enquiry</label>
            <textarea name="enquiry" placeholder="Your Query" value={formData.enquiry} onChange={handleChange} />
          </div>

          <div className="button-group">
            <button className="btn submit" type="submit">SUBMIT</button>
            <button className="btn reset" type="button" onClick={handleReset}>RESET</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
