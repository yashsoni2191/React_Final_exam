import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Action";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
