import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json"; //firebase
import { sliderSettings } from "../../utils/Common";

const Residencies = (props) => {
    let myStyle={
        color:props.mode==='dark'? 'white':'black',
        backgroundColor:props.mode==='dark'? 'black':'white',
    }
    let myStyle1={
        color:props.mode==='dark'? 'white':'black'
    }
  return (
    <section className="r-wrapper" style={myStyle}>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* destructuring 
         https://www.geeksforgeeks.org/destructuring-of-props-in-reactjs/ */}
         <div className="flexRowStart buttonf">
        <Swiper {...sliderSettings} >
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="Home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span style={myStyle1}>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};