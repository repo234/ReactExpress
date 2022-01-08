import React from 'react';
const Footer = () => {
    return (
  <footer className="container-fluid mt-5">
  <div className="row">
    <div className="col">
    <img src="/images/picc.jpg" className="img-thumbnail" alt="..."/>
    </div>
    <div className="col text-center mt-5 fw-bold " >
     <div className="DanFont  fs-3 pt-5">Contact Us</div>
     <a className="link-danger ArchiFont fst-italic fs-2" href="https://www.instagram.com/">Instagram</a><br/>
     <a className="link-danger ArchiFont fst-italic fs-2" href="https://web.facebook.com/">FaceBook</a>
    </div>
  </div>
</footer>
 );
}
 
export default Footer;