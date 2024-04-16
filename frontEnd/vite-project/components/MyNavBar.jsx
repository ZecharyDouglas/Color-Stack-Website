import { NavLink } from "react-router-dom";

export default function MyNavBar() {
  return (
    <header
      style={{
        display: "flex",
        width: "100%",
        height: "60px",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none", color: "#007bff" }}>
          Home
        </NavLink>
        <NavLink to="/DSA" style={{ textDecoration: "none", color: "#007bff" }}>
          Leetcode
        </NavLink>
      </h1>
    </header>
  );
}
