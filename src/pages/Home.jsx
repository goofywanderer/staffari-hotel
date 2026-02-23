// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h1>Hotel Partner Portal</h1>
      <p>Login or register your hotel</p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/signup">
        <button style={{ marginLeft: 10 }}>Sign Up</button>
      </Link>
    </div>
  );
}
