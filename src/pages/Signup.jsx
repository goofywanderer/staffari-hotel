// src/pages/Signup.jsx
import { useState } from "react";
import { hotelSignup } from "../authService";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await hotelSignup({ fullName, phone, email, password });
      navigate("/dashboard");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h2>Hotel Registration</h2>
      <input
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
