import axios from "axios";
import React from "react";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState({
    
        email: "",
        password: "",
    
      });
      let name, value;
      const handleInp = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
        console.log(user);
      };
    return ( <div className="ms-1 comtainer bg border fs-2 border-secondary DanFont p-5 bg-light"
    
  >
        <form >
        <div
            className="form-group col-xs-4 w-50 "
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
          <button
       
            type="submit"
            className="btn badge-danger fs-2 bg-danger btn mt-4"
            style={{ marginLeft: "45%", color: "white" }}
          >
            Submit
          </button>
        </form>
    </div> );
}
 
export default Login;


