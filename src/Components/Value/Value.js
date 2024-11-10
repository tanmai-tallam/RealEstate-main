import React,{useState} from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"; 
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from "../../utils/Accordion";

const Value = (props) => {

  const[className,setClassName]=useState(null);

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  };
  return (
    <div>
      <section className="v-wrapper" style={myStyle}>
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./main1.png" alt="" />
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">
              Our Value
            </span>
            <span className="primaryText">
              Value we give to you
            </span>
            <span className="secondaryText">
              We always help you to find the right property <br/>Best service you can get is from us related to buying the best property that will have great value in future
            </span>

            {/* all are default values like parameters for accordions, learn in documentation in web */}
            <Accordion className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
              {
                data.map((item,i)=>{
                    return (
                      <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}> 
                        <AccordionItemHeading>
                          <AccordionItemButton className="flexCenter accordionButton">
                            <AccordionItemState>
                              {/* we are using usestate here bcoz we need nly one accordion to open while others should be closed so that logic is applied here */}
                              {({expanded})=>expanded? setClassName("expanded"):setClassName("collapsed")}
                            </AccordionItemState>
                            <div className="flexCenter icon">{item.icon}</div>
                            <div className="primaryText">{item.heading}</div>
                            <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20} />
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                          <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>

                      </AccordionItem>
                    )
                })
              }
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value
