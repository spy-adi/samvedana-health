import React, { useState } from "react";
import "./login.css";
import logo from "./images/vaevLogo.png";

const Login = (props) => {

    const [isOTPForm,setIsOTPForm] = useState(false);
    const [email, setEmail] = React.useState('');
    const [otp, setOtp] = React.useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const getOTP = (e) => {
        e.preventDefault();
        setIsOTPForm(true);
        console.log('Email:', email);
    };

    
    const handleOTPChange = (event) => {
        setOtp(event.target.value);
      };
    
      const verifyOTP = (e) => {
          e.preventDefault();
          setIsOTPForm(true);
          console.log('OTP:', otp);
      };

  return (
    <div className="loginContainer">
      <div className="logo">
        <img src={logo} alt="VAEV Logo" />
      </div>
      <div className="center">
        <div className="caption">
          <b>LOGIN</b>
        </div>

      <div className="container">
        {!isOTPForm?
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
                    <div className="col-3 text-start">
                    <button type="button" onClick={getOTP} className="btn btn-primary mb-2">Send OTP</button>
                    </div>
                </div>
            </form>
            :
            <form>
                <div className="row">
                    <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="OTP"
                        id="otp"
                        value={otp}
                        onChange={handleOTPChange}
                    />
                    </div>
                    <div className="col text-start">
                    <button type="button" onClick={verifyOTP} className="btn btn-primary mb-2">Verify OTP</button>
                    </div>
                </div>
                
                <div className="row">
                    
                <button type="button" onClick={getOTP} className="btn btn-primary mb-2" >Resend OTP</button>
                </div>
            </form>
        }
</div>
    
        


      </div>
    </div>
  );
};

export default Login;
