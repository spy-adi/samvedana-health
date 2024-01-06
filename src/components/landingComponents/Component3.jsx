import React, {useState} from "react"
import './component.css'

const Component3 = (props) => {

    

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
        
        <div className="c3-c1">
            <div className="container">
                <div className="paragraph">Ultimate D2C <br/>Tools</div>
                <div className="heading">Super power your product research<br /> and save hours every month.</div>
            </div>
        </div>

        <div className="c3-c2">
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Real User Metrics</div>
                    <div className="paragraph" style={{color:'#df9B44'}}>Instantly find the best <br />suppliers for any <br/>product.</div>
                    {/* <div className="paragraph"></div> */}
                    <div className="" style={{color:'white'}}>We analyse the images from any product and compare them with 200M direct from factory suppliers to find the best possible sellers.</div>
                    <div className="btn btn-secondary m-1">Find sellers with better prices and reviews.</div>
                    <br /><div className="btn btn-secondary m-1">Filter by country for faster deliveries.</div>
                </div>
            </div>
        </div>
         </div>

         

        <div className="c3-c1">
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Store Search</div>
                    <div className="paragraph" style={{color:'#d84c3f'}}>See what top stores are selling, and copy them.</div>
                    {/* <div className="paragraph"></div> */}
                    <div className="" style={{color:'white'}}>Search over 200,000 dropship stores and rank them by sales or traffic to find top stores in any niche. Then mine them for inspiration.</div>
                    <div className="btn btn-secondary m-1">Use Supplier Search to match competitor products to suppliers.</div>
                </div>
            </div>
        </div>
         </div>

         <div className="c3-c2">
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Keywords</div>
                    <div className="paragraph" style={{color:'#db2a66'}}>Explore trending search terms to uncover untapped niches.</div>
                    {/* <div className="paragraph"></div> */}
                    <div className="" style={{color:'white'}}>Jump on trends before anyone else with real time Google Search data for 100,000’s of ecom related search terms. Stay up with the latest seasonal products to exploding trends.</div>
                    <div className="btn btn-secondary m-1">Hand picked products for each search term.</div>
                </div>
            </div>
        </div>
         </div>

         

        <div className="c3-c1">
        <div className="container">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <div className="subHeading">Store Search</div>
                    <div className="paragraph" style={{color:'#b53480'}}>Find your niche and everything you need to dominate it.</div>
                    {/* <div className="paragraph"></div> */}
                    <div className="" style={{color:'white'}}>A curated list of trending and evergreen niches with in depth analysis from our ecom exports. Each niche report includes:</div>
                    <div className="btn btn-secondary m-1">Example Products</div><br />
                    <div className="btn btn-secondary m-1">Audience demographics.</div><br />
                    <div className="btn btn-secondary m-1">Example dropship stores.</div><br />
                    <div className="btn btn-secondary m-1">Profitability audit.</div><br />
                    <div className="btn btn-secondary m-1">Related keywords.</div><br />
                </div>
            </div>
        </div>
         </div>

        
    </div>
  )
};

export default Component3;
