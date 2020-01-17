import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>

      <div class="ui container">
          <div class="doubling stackable ui menu">
            
            <div class="item">
              <Link to="/"><i className="home icon" ></i> HOME </Link>
            </div>
         
          <div class="ui simple dropdown item">
            <a><i className="male icon" ></i> MEN'S</a>
            <i class="dropdown icon"></i>
                <div class="menu">
                <div class="item"> <Link to="menshoes"> Men's Shoes </Link></div> 
                  <div class="item"> <Link to="menshirt"> Men's Shirts  </Link></div> 
                  <div class="item"> <Link to="menjeans"> Men's Jeans </Link></div> 
                  <div class="item"> <Link to="menhoodies"> Men's Hoodies </Link></div> 
                  <div class="item"> <Link to="menshorts"> Men's Shorts </Link></div> 
                  <div class="item"> <Link to="menjacket"> Men's Jacket </Link></div> 
                  <div class="item"> <Link to="mencap"> Men's Caps </Link></div> 
                </div>
            </div>
         
          
      
              <div class="ui simple dropdown item">
            <a><i className="female icon" ></i> WOMEN </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                <div class="item"> <Link to="womenshoes"> Women's Shoes </Link></div> 
                  <div class="item"> <Link to="womenshirt"> Women's Shirts  </Link></div> 
                  <div class="item"> <Link to="womenjeans"> Women's Jeans </Link></div> 
                  <div class="item"> <Link to="menhoodies"> Women's Hoodies </Link></div> 
                  <div class="item"> <Link to="menshorts"> Women's Shorts </Link></div> 
                  <div class="item"> <Link to="menjacket"> Women's Jacket </Link></div> 
                  <div class="item"> <Link to="mencap"> Women's Caps </Link></div> 
                </div>
              </div>
     

   
              <div class="ui simple dropdown item">
            <a><i className="child icon" ></i> KIDS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                <div class="item"> <Link to="kidshoes"> Kid's Shoes </Link></div> 
                  <div class="item"> <Link to="kidshirt"> Kid's Shirts  </Link></div> 
                  <div class="item"> <Link to="kidjeans"> Kid's Jeans </Link></div> 
                  <div class="item"> <Link to="menhoodies"> Kid's Hoodies </Link></div> 
                  <div class="item"> <Link to="menshorts"> Kid''s Shorts </Link></div> 
                  <div class="item"> <Link to="menjacket"> Kid''s Jacket </Link></div> 
                  <div class="item"> <Link to="mencap"> Kid''s Caps </Link></div> 
                </div>
              </div>
         
          
         
              <div class="ui simple dropdown item">
            <a><i className="futbol icon" ></i> SPORTS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Runnig </Link></div> 
                  <div class="item"> <Link to="#"> Training  </Link></div> 
                  <div class="item"> <Link to="#"> Football </Link></div> 
                </div>
              </div>
       

   
              <div class="ui simple dropdown item">
            <a><i className="adn icon" ></i> BRANDS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                  <div class="item"> <Link to="#"> Adidas  </Link></div> 
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                </div>
              </div>
       

     
              <div class="ui simple dropdown item">
            <a><i className="shopping bag icon" ></i> OUTLET </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Women's Shoes </Link></div> 
                  <div class="item"> <Link to="#"> Women's Shirts  </Link></div> 
                  <div class="item"> <Link to="#"> Women's Jeans </Link></div> 
                  <div class="item"> <Link to="#"> Women's Hoodies </Link></div> 
                  <div class="item"> <Link to="#"> Women's Shorts </Link></div> 
                  <div class="item"> <Link to="#"> Women's Jacket </Link></div> 
                  <div class="item"> <Link to="#"> Women's Caps </Link></div> 
                </div>
              </div>
        
          
      
              <div class="ui simple dropdown item">
            <a> <i className="bell icon" ></i> NEW ARRIVALS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Women's Shoes </Link></div> 
                  <div class="item"> <Link to="#"> Women's Shirts  </Link></div> 
                  <div class="item"> <Link to="#"> Women's Jeans </Link></div> 
                  <div class="item"> <Link to="#"> Women's Hoodies </Link></div> 
                  <div class="item"> <Link to="#"> Women's Shorts </Link></div> 
                  <div class="item"> <Link to="#"> Women's Jacket </Link></div> 
                  <div class="item"> <Link to="#"> Women's Caps </Link></div> 
                </div>
              </div>
         

         
            <div class="item">
              <i className="search icon" ></i> <input type="text" placeholder="Search your Brands" />
            </div>
      
         
            <div class="item">
              <i className="cart icon" ></i> <Link to="/cart"> CART </Link>
            </div>

            <div class="item">
              <i className="user icon" ></i> <Link to="/signin"> LOGIN </Link>
            </div>
            

            <div class="item">
              <Link to="/#"><i className="mail big icon"></i></Link>
              <Link to="/#"><i className="facebook big icon"></i></Link>
              <Link to="/#"><i className="twitter big icon"></i></Link>
              <Link to="/#"><i className="linkedin big icon"></i></Link>
              <Link to="/#"><i className="instagram big icon"></i></Link>
              <Link to="/#"><i className="whatsapp big icon"></i></Link>
            </div>
         
          
          </div>
        </div>










    </nav>
  );
};

export default sideDrawer;
