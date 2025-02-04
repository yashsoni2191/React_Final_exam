import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Product Management</NavLink>
        <div>
          {user ? (
            <>
              <span className="text-white me-3">Welcome, {user.username}</span>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink className="btn btn-outline-light me-2" to="/login">Login</NavLink>
              <NavLink className="btn btn-primary" to="/signup">Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
