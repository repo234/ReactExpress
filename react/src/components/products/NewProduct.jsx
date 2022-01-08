import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const delPro= () => {
    axios.post("http://localhost:3000/api/products/", {name,price}).then((res=>{
      console.log(res.data);
      alert("product added");
          })) .catch((err) => {
            console.log(err);
          })
  };
  React.useEffect(delPro, []);

  return (
    <div className="container-md ArchiFont bg-light p-5">
      <h1>Add New Product</h1>
      <form>
        <div className="row g-3">
          <div className="col">
            <label className="form-label">Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control bg-danger  fs-3 bg-opacity-25"
            />
          </div>
          <div className="col">
            <label className="form-label">Price</label>
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              className="form-control bg-danger  fs-3 bg-opacity-25"
            />
          </div>
          <div className="col-2  ">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={ delPro }
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
