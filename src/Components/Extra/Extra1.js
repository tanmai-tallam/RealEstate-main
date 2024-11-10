import React from 'react'
import "./extra.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from "react-countup";
import { motion } from "framer-motion";


export default function Extra(props) {

      let myStyle={
        color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'black':'white',
    }

  return (
    <div>
      <section className="extra-wrapper" style={myStyle}>
        
        <div className="paddings innerWidth  flexCenter extra-container">
          <div className="flexColStart extra-left">
            <div className="extra-title">
              <div className="bluecircle"></div>
              <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "ease-in",
              }}
              >
                Discover <br/> Most Suitable <br/> Property
              </motion.h1>
            </div>
         
            <div className="flexColStart extra-des">
              <span className="secondaryText">Find Beautiful Properties that suite you the best</span>
              <span className="secondaryText">You will not face any difficulties in finding the best residence for you!</span>
            </div>
            <div className="flexCenter searchbar">
            <HiLocationMarker color="blue" size={40}></HiLocationMarker>
            <input type="text" placeholder="Search Location"/>
              <button className="button">Search</button>
            </div> 
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8500} end={9000} duration={4}/>
                  <span>+</span>
                </span>
                <span  className="secondaryText">Premium Properties</span>
                
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={50} end={90} duration={4}/>
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Clients</span>
                
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={10} end={25} duration={3}/>
                  <span>+</span>
                </span>
                <span  className="secondaryText">Award Winning</span>
                
              </div>
            </div>
          </div>

          
          
          <div className="flexCenter extra-right">
              <motion.div
                initial={{ x: "7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 4,
                  type: "ease-in",
                }}
                className="image-container"
              >
                <img src="./mainimage.jpeg" alt="mainimg" />
              </motion.div>
          </div>
            
        </div>
      </section>
    </div>
  )
}


