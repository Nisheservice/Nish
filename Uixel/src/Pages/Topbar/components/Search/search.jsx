import "./search.css";

const Search = () => {
  return (
    <form className="search-form" style={{ display: "flex" }}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        style={{
          padding: "6px 12px",
          borderRadius: "4px 0 0 4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        className="search-btn"
        style={{
          padding: "6px 16px",
          borderRadius: "0 4px 4px 0",
          border: "1px solid #ccc",
          background: "#eee",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
