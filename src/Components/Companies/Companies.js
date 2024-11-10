// rafce
import React from 'react';
import './Companies.css';

const Companies = (props) => {
    let myStyle={
        color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'black':'white',
    }
  return (
    <section className="c-wrapper" style={myStyle}>
        <div className="paddings innerWidth flexCenter c-container">
          <span className="c-trust">Trusted Partners -</span>
            <img src="./equinix.png" alt="" />
            <img src="./prologis.png" alt="" />
            <img src="./realty.png" alt="" />
            <img src="./tower.png" alt="" />
        </div>
      
    </section>
  )
}

export default Companies

