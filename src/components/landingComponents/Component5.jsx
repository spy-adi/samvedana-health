import React, {useState} from "react"

const Component5 = (props) => {

    const [email,setEmail] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const getOTP = (e) => {
          e.preventDefault();
          console.log('Email:', email);
      };

  return (
    <div className="c5">
      <div className="container">
        <div className="c5-heading">Join over 1,000members & start growing your D2C business today.</div>
    

      <div className="row" style={{marginTop:20}}>
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
        </div>
    </div>
  )
};

export default Component5;
