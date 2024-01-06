import React, { useState } from "react"
import './component.css'

const Component1 = (props) => {

    const [email,setEmail] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const getOTP = (e) => {
          e.preventDefault();
          console.log('Email:', email);
      };

  return (
    <div className="FContainer">
    <div className="row">
        <div className="col-6">LOGO</div>
        <div className="col-6 text-end"> 
            <button className="btn btn-primary" style={{marginRight:5}}>Sign In</button>
            <button className="btn btn-primary">Try Now</button>
        </div>
    </div>
      <div className="container">
        <div className="row">
            <div className="c1-heading">
                <b> Empowering Health, Transforming Lives</b>
            </div>
        </div>
        <div className="row">
            <div className="c1-subHeading">
            Dedicated to making a positive impact on global health. Our mission: provide accessible healthcare, promote wellness, and empower communities for healthier lives. Together, let's create a world where everyone thrives.
            </div>
        </div>
        <div className="row">
            <form>
                <div className="row">
                    <div className="col-9">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email Address"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </div>
                    <div className="col-3">
                        <button type="button" onClick={getOTP} className="btn btn-primary mb-2">Try Vaev Free</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="c1-content">"Product #1 Top Voted Product of the Day"
                <span className="c1-subContent">PRODUCTHUNT.COM</span></div>
            </div>
            <div className="col-4">
                <div className="c1-content">"Killer catalog that are a game changer"</div>
                <div className="c1-subContent">J. RICH</div>
            </div>
            <div className="col-4">
                <div className="c1-content">"It's our little hidden gem that we use to run our 7 figure business"</div>
                <br />
                <div className="c1-subContent">D. ZANDER</div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Component1;
