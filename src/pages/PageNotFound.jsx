import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Sorry to see you here 😢😢</h1>
      <div
        style={{
          fontSize: "32px",
        }}
      >
        <NavLink to="/">HomePage</NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;
