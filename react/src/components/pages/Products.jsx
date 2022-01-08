import React from "react";
import SinglePro from "../products/SinglePro";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3000/api/products/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      <div className="row  ">
        <div className="col-8 fs-2 fw-bolder ArchiFont ">
          <h1
            className="border border-dark text-center"
            style={{ marginLeft: "55%", background: "pink" }}
          >
            Products
          </h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
        </div>
      </div>
      {product.length == 0 ? (
        <p>Sorry there are no products</p>
      ) : (
        <div className="border border-dark mt-3 bg-light">
          {product.map((product, index) => (
            <SinglePro key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
