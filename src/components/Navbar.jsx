import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.menu}>
        
        {/* HOME */}
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.inactiveBtn
          }
        >
          Home
        </NavLink>

        {/* PRODUCTS */}
        <NavLink
          to="/products"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.inactiveBtn
          }
        >
          Products
        </NavLink>
        
        <NavLink
          to="/certificate"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.inactiveBtn
          }
        >
          Certificate
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.inactiveBtn
          }
        >
          Contact
        </NavLink>

        {/* ENQUIRY */}
        <NavLink
          to="/enquiry"
          style={({ isActive }) =>
            isActive ? styles.activeBtn : styles.inactiveBtn
          }
        >
          Enquiry
        </NavLink>

      </div>
    </nav>
  );
}

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

  // 🔴 Normal (BLACK)
  inactiveBtn: {
    color: "#fff",
    backgroundColor: "#000",
    padding: "8px 16px",
    textDecoration: "none",
    fontSize: "16px"
  },

  // 🟡 Active (YELLOW)
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
