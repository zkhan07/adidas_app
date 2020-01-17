import React from "react";
import "./Style1.css"

const Card = () => {
  return(
    <div>

      <br/><br/><br/><br/>
      {/* <div className="ui fluid container">
        <div className="doubling stackable ui two column grid">
          <div className="six wide column card1 center aligned">
            <div className="ui stacked black segment">
              <h1>HOME OF <br/> CLASSIC</h1>
              <h3>Made With Care , Worn Without</h3>
              <br/>
              <button className="ui black big button">SHOP NOW <i className="right arrow icon"></i> </button> <br/><br/>
              <button className="ui black big button">EXPLORE NOW <i className="right arrow icon"></i> </button>
            </div>

          </div>

          <div className="ten wide column center aligned">
          <img class="ui fluid image center aligned" src="girl.jpg" />
          </div>

        </div>
      </div> */}




      <div className="ui fluid container con1">
          <div className="ui fluid image">
            <img   src="girl.jpg" />
          </div>

          <h1 className="head1">Adidas Branded Shoes <br/> We are giving the <br/> Best</h1>
          <p className="para1">Our all‑in‑one Marketing Platform gives <br/> you the tools to find the right customers, build  <br/>your audience, and bring your brand to life</p>
          <button className=" btn1">SHOP NOW</button> 

          <img className="img1" src="pic1.jpeg" />
      </div>


      <br/><br/>



    </div>
  );
}

export default Card;