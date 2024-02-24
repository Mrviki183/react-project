import React from 'react';
import '../pages/css/Footer.css'
const Footer = () => {
  return (  
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Our mission is to provide not just financial support, but a pathway to a thriving future for every farmer we serve.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: agri@gmail.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;