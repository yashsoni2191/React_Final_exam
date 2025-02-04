import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get("http://localhost:3000/products");
  dispatch({ type: "FETCH_PRODUCTS", payload: response.data });
};

export const addProduct = (product) => async (dispatch) => {
  const response = await axios.post("http://localhost:3000/products", product);
  dispatch({ type: "ADD_PRODUCT", payload: response.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/products/${id}`);
  dispatch({ type: "DELETE_PRODUCT", payload: id });
};
