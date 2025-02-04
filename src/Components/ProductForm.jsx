import React, { useState } from "react";

function ProductForm() {
  const [state, setState] = useState({
    title: "",
    price: "",
  });

  const handleChange = (e) => {
    setState({...state,[e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          name="Title"
          id="name"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="">Product Price</label>
        <input
          type="text"
          name="Price"
          id="price"
          value={price}
          onChange={handleChange}
        />
        <input type="submit" value={submit} />
      </form>
    </div>
  );
}

export default ProductForm;
