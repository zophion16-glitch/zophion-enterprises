import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.menu}>

        <NavLink to="/" end style={navStyle}>
          Home
        </NavLink>

        <NavLink to="/products" style={navStyle}>
          Products
        </NavLink>

        <NavLink to="/certificate" style={navStyle}>
          Certificate
        </NavLink>

        <NavLink to="/contact" style={navStyle}>
          Contact
        </NavLink>

        <NavLink to="/enquiry" style={navStyle}>
          Enquiry
        </NavLink>

      </div>
    </nav>
  );
}

const navStyle = ({ isActive }) =>
  isActive ? styles.activeBtn : styles.inactiveBtn;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  menu: {
    display: "flex",
    gap: "20px"
  },
  inactiveBtn: {
    color: "#fff",
    backgroundColor: "#000",
    padding: "8px 16px",
    textDecoration: "none",
    fontSize: "16px",
    borderRadius: "20px"
  },
  activeBtn: {
    color: "#000",
    backgroundColor: "#FFD700",
    padding: "8px 16px",
    borderRadius: "20px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px"
  }
};

export default Navbar;
