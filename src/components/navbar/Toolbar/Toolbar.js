import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
          <div className="ui mini image">
            <img src="adidas.jpg" height="150" width="200" />
          </div>
          ADIDAS SHOP 
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

          
        <div class="ui container">
        <div class="ui secondary menu">
          
         

          <div class="item">
            <Link to="/"> Home </Link>
          </div>

        
          <div class="ui simple dropdown item">
            <a>MEN'S</a>
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
            <a> WOMEN </a>
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
            <a> KIDS </a>
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
            <a> SPORTS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Runnig </Link></div> 
                  <div class="item"> <Link to="#"> Training  </Link></div> 
                  <div class="item"> <Link to="#"> Football </Link></div> 
                </div>
              </div>
     

         
          <div class="ui simple dropdown item">
            <a> BRANDS </a>
            <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                  <div class="item"> <Link to="#"> Adidas  </Link></div> 
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                  <div class="item"> <Link to="#"> Adidas </Link></div> 
                </div>
              </div>
    

          <div class="ui simple dropdown item">
            <a> OUTLET </a>
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
            <a> NEW ARRIVALS </a>
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
            <i className="yellow search icon" ></i> <input type="text" placeholder="Search your Brands" />
          </div>
          <div class="item">
            <Link to="/cart"><i className="cart icon" ></i></Link>
          </div>


          
        </div>
      </div>




        </div>
    </nav>
  </header>
);

export default toolbar;
