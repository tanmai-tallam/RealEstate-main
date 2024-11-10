import React from 'react';
import './Footer.css';

const Footer = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
      };
  return (
    <div>
      <section className="f-wrapper" style={myStyle}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo1.jpeg" alt="" width={80} />

          <span className="secondaryText">
            Our vision is to help you by providing you the best properties
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Bangalore, Karnataka</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer
