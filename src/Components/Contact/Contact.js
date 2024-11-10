import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = (props) => {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
      };
      return (
        <div id="contact-us" className="c-wrapper" style={myStyle}>
          <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
              <span className="orangeText">Our Contact Us</span>
              <span className="primaryText">Easy to contact us</span>
              <span className="secondaryText">
                We always ready to help by providijng the best services for you. We
                beleive a good blace to live can make your life better{" "}
              </span>
    
              <div className="flexColStart contactModes">
                {/* first row */}
                <div className="flexStart row">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <MdCall size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Call</span>
                        <span className="secondaryText">8765432178</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Call now</div>
                  </div>
    
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <IoMdMail  size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Mail</span>
                        <span className="secondaryText">realestate@gmail.com</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Send Mail</div>
                  </div>
                </div>
    
                {/* second row */}
                <div className="flexStart row">
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Video Call</span>
                        <span className="secondaryText">8765432178</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Video Call now</div>
                  </div>
    
                  <div className="flexColCenter mode">
                    <div className="flexStart">
                      <div className="flexCenter icon">
                        <HiChatBubbleBottomCenter size={25} />
                      </div>
                      <div className="flexColStart detail">
                        <span className="primaryText">Message</span>
                        <span className="secondaryText">8765432178</span>
                      </div>
                    </div>
                    <div className="flexCenter button">Send Message</div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* right side */}
            <div className="flexEnd c-right">
              <div className="image-container">
                <img src="./main2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Contact
