import React, { Component } from "react"
import './landing.css'
import Component1 from "./landingComponents/Component1";
import Component2 from "./landingComponents/Component2";
import Component3 from "./landingComponents/Component3";
import Component4 from "./landingComponents/Component4";
import Component5 from "./landingComponents/Component5";
import Component6 from "./landingComponents/Component6";

const Landing = (props) => {
  return (
    <div>
       <Component1 />
       <Component2 />
       <Component3 />
       <Component4 />
       <Component5 />
       <Component6 />
    </div>
  )
};

export default Landing;
