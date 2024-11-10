import React from 'react';
import "./GetStarted.css";

const GetStarted = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
      };
  return (
    <section className="g-wrapper" style={myStyle}>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Real Estate</span>
          <span className="secondaryText">
            Subscribe and find the attractive quotes from us
            <br />
            Find your property soon
          </span>

          <button className="button">
            <a href="mailto:tallamtanmai24@gmail.com"> Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted
