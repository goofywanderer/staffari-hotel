// src/pages/Login.jsx
import { useState } from "react";
import { hotelLogin } from "../authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await hotelLogin(email, password);
      navigate("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h2>Hotel Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
