import React,{useState} from 'react';
import './header.css';
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header(props) { 

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
  };

  const [menuopened,setmenuopened]=useState(false);
  const getmenustyles=(menuopened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right: !menuopened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper" style={myStyle}>
      <div className="flexCenter paddings innerWidth h-container">
        <img src="logo1.jpeg" alt="logo" width={100}/>

        <OutsideClickHandler onOutsideClick={()=>{
          setmenuopened(false);
        }}>
          {/* when user clicks somewhere else other than menu area, i want the menu to be closed, so we use tis */}
        <div className="flexCenter h-menu"
        style={getmenustyles(menuopened)}>
          {/* The spread operator ... merges the returned object from getMenuStyles(menuOpened) into the existing style object. */}

          <span style={myStyle} onClick={props.scrollToHome}>Home</span>
          <span style={myStyle} onClick={props.scrollToResidencies}>Residencies</span>
          <span style={myStyle} onClick={props.scrollToValue}>Our Value</span>
          <span style={myStyle} onClick={props.scrollToGetStarted}>Get Started</span>
          <button className="button" onClick={props.scrollToContact}>Contact</button>

            <div>
              <box-icon name={props.logo} 
              style={{padding: "4px",height: "40px", width: "40px", border:"1px solid grey", borderRadius:"10px",cursor: "pointer",...myStyle}}
              color= {props.mode === 'dark' ? 'white' : 'black'}
              onClick={props.toggleMode}>
              </box-icon>
            </div>

            {/* <label style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              {props.textval}
            </label> */}

        </div>
        </OutsideClickHandler>

        <div className="menu-icon" style={myStyle} onClick={()=>setmenuopened((prev)=>!prev)}>
          {/*initially prev parameter contains false(which is given by us in the beginning) and later changes depending on what we do */}
              <BiMenuAltRight size={30} style={{cursor:"pointer"}}/>
      </div>
      </div>
      
    </section>
  );
}
