import { useState } from "react";

function Language({ setLanguage }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Language");

  const handleSelect = (lang, label) => {
    setLanguage(lang);
    setSelected(label);
    setOpen(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Language</h2>

      {/* Wrapper */}
      <div style={{ position: "relative", width: "220px" }}>
        
        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          🌐 {selected}
        </button>

        {/* Dropdown BELOW the button */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",        // 👈 BELOW BUTTON
              left: 0,
              width: "100%",
              marginTop: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              zIndex: 100
            }}
          >
            <div onClick={() => handleSelect("en", "English")} style={itemStyle}>
              English
            </div>
            <div onClick={() => handleSelect("fr", "French")} style={itemStyle}>
              French
            </div>
            <div onClick={() => handleSelect("pl", "Polish")} style={itemStyle}>
              Polish
            </div>
            <div onClick={() => handleSelect("nl", "Dutch")} style={itemStyle}>
              Dutch
            </div>
            <div onClick={() => handleSelect("es", "Spanish")} style={itemStyle}>
              Spanish
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #eee"
};

export default Language;
