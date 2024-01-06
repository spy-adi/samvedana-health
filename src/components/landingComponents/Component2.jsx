import React, {useState} from "react"
import './component.css'

const Component2 = (props) => {

    

    const [email,setEmail] = useState();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const getOTP = (e) => {
          e.preventDefault();
          console.log('Email:', email);
      };

  return (
    <div className="FContainer2">
        
        <div className="container text-start c2-c1">
            <div className="paragraph">Daily</div>
            <div className="paragraph">Winning</div>
            <div className="paragraph">Products</div>
            <div className="className">Thousands of beautiful products curated</div>
            <div className="className">by a community of creatives, designers</div>
            <div className="className">blogger and ecom experts</div>
        </div>

        <div className="c2-c2">
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Real User Metrics</div>
                    <div className="paragraph">Know what sells before you spend a cent on ads</div>
                    {/* <div className="paragraph"></div> */}
                    <div className="className">We collect data from millions of ral consumer interactions to provide you with popularity and conversion scores on every product.</div>
                    {/* <div className="className">.</div> */}
                </div>
            </div>
        </div>
         </div>

         <div className="container c2-c1">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Premium Product Images</div>
                    <div className="paragraph" style={{color:'#FE5E68'}}>Create beautiful product pages that actually convert</div>
                    {/* <div className="paragraph"></div>
                    <div className="paragraph"></div> */}
                    <div className="className">We curate and produce the best supplier images for each product,saving you hours and making your product pages look clean and trustworthy.</div>
                </div>
            </div>
         </div>

         <div className="c2-c2">
            <div className="container">
                <div className="paragraph">Get instant access to thousands of handpicked trending products.</div>
                
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

    </div>
  )
};

export default Component2;
