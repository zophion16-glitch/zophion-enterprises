import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);
    console.log("Selected:", lang);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.menu}>

        <NavLink to="/" end style={styles.inactiveBtn}>Home</NavLink>
        <NavLink to="/products" style={styles.inactiveBtn}>Products</NavLink>
        <NavLink to="/certificate" style={styles.inactiveBtn}>Certificate</NavLink>
        <NavLink to="/contact" style={styles.inactiveBtn}>Contact</NavLink>
        <NavLink to="/enquiry" style={styles.inactiveBtn}>Enquiry</NavLink>

        {/* 🌍 LANGUAGE DROPDOWN */}
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            style={styles.langBtn}
          >
            🌐 {language}
          </button>

          {open && (
            <div style={styles.dropdown}>
              <button onMouseDown={() => selectLanguage("EN")}>English</button>
              <button onMouseDown={() => selectLanguage("FR")}>French</button>
              <button onMouseDown={() => selectLanguage("PL")}>Polish</button>
              <button onMouseDown={() => selectLanguage("NL")}>Dutch</button>
              <button onMouseDown={() => selectLanguage("ES")}>Spanish</button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}


const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15px 40px",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  menu: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  inactiveBtn: {
  textDecoration: "none",
  padding: "8px 16px",
  fontSize: "16px",
  color: "#000",        // 👈 DARK BLACK
  fontWeight: "500"
},
  langBtn: {
    padding: "8px 16px",
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: "6px",
    background: "#fff",
    border: "1px solid #ccc",
    width: "150px",
    zIndex: 9999,          // 👈 VERY IMPORTANT
    display: "flex",
    flexDirection: "column"
  }
};
export default Navbar;