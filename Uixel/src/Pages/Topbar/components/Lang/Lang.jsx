import "./Lang.css";

const Lang = () => {
  return (
    <select
      className="lang-select"
      style={{
        padding: "6px 12px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    >
      <option value="en">EN</option>
      <option value="hi">HI</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default Lang;
