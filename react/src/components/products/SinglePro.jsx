import React from "react";
import axios from 'axios'
const SinglePro = ({ product}) => {

  return (
    <div className="container-md m-2 ArchiFont bg-light">
      <div className="row">
        <div class="col-8">
          <div>
            <h3>{product.name}</h3>
          </div>
          <div>
            <h5>{product.price}</h5>
          </div>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger mt-3 btn-sm" 
           onClick={(e) => {
            axios.delete("http://localhost:3000/api/products/"+product._id).then(data=>{
        console.log(data);
        alert("record deleted")
            }) .catch((err) => {
              console.log(err);
            })
            } }>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePro;
