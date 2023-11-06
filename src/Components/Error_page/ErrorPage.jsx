import { useNavigate } from "react-router";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="Error-container">
      <h1>404 error</h1>
      <h2>This page does not exist.</h2>

      <div className="form-button" style={{ alignItems: "center" }}>
        <p>Click below button to go to Homepage</p>
        <button
          className="submit-button"
          onClick={() => navigate("/")}
          style={{ width: "6%", margin: "0" }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
