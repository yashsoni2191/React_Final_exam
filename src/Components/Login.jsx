import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setUser(user); 
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control my-2" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
