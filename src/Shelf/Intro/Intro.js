import React from "react";
import "./Intro.css";
import GIF from '../../assests/construction.gif'

const Intro = (props) => {
  return (
    <div >
      <img src={GIF} alt="BOOKS"  className="GIF"/>
    </div>
  );
};

export default Intro;
