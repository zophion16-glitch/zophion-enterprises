function Enquiry() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Enquiry Form</h2>
        <p style={styles.subtitle}>
          Please fill the form below. We will contact you soon.
        </p>

        <form style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="tel" placeholder="Mobile Number" style={styles.input} />

          <select style={styles.input}>
            <option value="">Select Service</option>

            
            <option>Export & Import</option>
            <option>Cosmetics</option>
            <option>Manpower</option>
            <option>Website Designing</option>
          </select>

          <textarea
            placeholder="Your Message"
            rows="4"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fff9e6", // same yellow tone
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "26px"
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#555"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px"
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px"
  },
  button: {
    marginTop: "10px",
    padding: "12px",
    backgroundColor: "#FFD700",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default Enquiry;
