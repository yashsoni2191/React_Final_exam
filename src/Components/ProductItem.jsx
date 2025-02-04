import { useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/Action";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.image} alt={product.title} className="card-img-top" />
        <div className="card-body">
          <h5>{product.title}</h5>
          <p>Price: ${product.price}</p>
          <button onClick={() => dispatch(deleteProduct(product.id))} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
