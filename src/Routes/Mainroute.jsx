import { Routes, Route } from "react-router-dom";
import ProductList from "../Components/ProductList";
import ProductForm from "../Components/ProductForm";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import PrivateRoute from "../Components/PrivateRoute";

const MainRoute = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute user={user}><ProductList /></PrivateRoute>} />
      <Route path="/add" element={<PrivateRoute user={user}><ProductForm /></PrivateRoute>} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoute;
