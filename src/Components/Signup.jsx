import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
      if (data.length > 0) {
        alert("User already exists!");
        return;
      }
      await axios.post("http://localhost:3000/users", formData);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input className="form-control my-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control my-2" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
