import axios from "axios";
import React from "react";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  let name, value;
  const handleInp = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const sendData = (e) => {
    axios.post("http://localhost:3000/api/users/register", {user}).then((res=>{
     alert("user registered")
          })) .catch((err) => {
            console.log(err);
          })
  };
  
  return (
    <div>
      <div className="ms-1 comtainer bg border p-5 fs-2 border-secondary DanFont bg-light">
        <form>
          <div
            className="form-group col-xs-4 w-50"
            style={{ marginLeft: "25%" }}
          >
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control bg-danger  fs-3 bg-opacity-25"
              id="name"
              value={user.name}
              onChange={handleInp}
              name="name"
            />
          </div>
          <div
            className="form-group col-xs-4 w-50"
            style={{ marginLeft: "25%" }}
          >
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control bg-danger  fs-3 bg-opacity-25"
              id="InputEmail1"
              value={user.email}
              onChange={handleInp}
              name="email"
            />
          </div>
          <div className="form-group w-50  " style={{ marginLeft: "25%" }}>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control bg-danger  fs-3 bg-opacity-25 "
              id="InputPassword1"
              value={user.password}
              onChange={handleInp}
            
              name="password"
            />
          </div>
          <div className="form-group w-50  " style={{ marginLeft: "25%" }}>
            <label htmlFor="exampleInputPhone">Phone No</label>
            <input
              type="number"
              className="form-control bg-danger  fs-3 bg-opacity-25 "
              id="InputPhone"
              value={user.phone}
              onChange={handleInp}
             
              name="phone"
            />
          </div>
          <div className="form-group w-50  " style={{ marginLeft: "25%" }}>
            <label htmlFor="InputAddress">Address</label>
            <input
              type="text"
              className="form-control  bg-danger  fs-3 bg-opacity-25"
              id="exampleInputAddress"
              value={user.address}
              onChange={handleInp}
            
              name="address"
            />
          </div>
          <button
            onClick={sendData}
            type="submit"
            className="btn badge-danger fs-2 bg-danger btn mt-4"
            style={{ marginLeft: "45%", color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
