import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(user => user.email === formData.email);

    if (userExists) {
      alert("User already exists!");
      return;
    }

    // Save new user in localStorage
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful! Please login.");
    navigate("/login");
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
