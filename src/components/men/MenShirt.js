import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";
import ShirtModal from "./ShirtModal";

const MenShirt = () => {
    return(
        <div className="cont">

            <Navbar />


            <br/><br/><br/><br/>
            <div className="ui container">

            <div className="ui small menu">
                        <div class="ui simple dropdown item">
                        <a> SORTING </a>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item"> <a href="#"> Newest Arivals </a></div> 
                            <div class="item"> <a href="#"> Price High to Low  </a></div> 
                            <div class="item"> <a href="#"> Price Low to High </a></div> 
                            <div class="item"> <a href="#"> Most Popular </a></div> 
                        </div>
                        </div>
                        <div class="ui simple dropdown right item">
                        <a> REFINE </a>
                        <i class="dropdown icon"></i>
                            <div class="menu">
                                <div class="item"> <a href="#"> Product Type </a></div> 
                                <div class="item"> <a href="#"> Gender  </a></div> 
                                <div class="item"> <a href="#"> Category </a></div> 
                                <div class="item"> <a href="#"> Brand </a></div> 
                            </div>
                        </div>
                    </div>
                    
                <div className="doubling stackable ui two column grid">

                    <div className="four wide column">
                    <h3>REFINE YOUR SELECTION </h3> 
                    <div className="ui segment"> <br/>
                        <input type="checkbox" /> Product Type : JACKETS <br/>
                        <input type="checkbox" /> Product Type : JEANS <br/>
                        <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                        <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                        <a>clear All</a>
                    </div> 


                    <div className="ui segment"> 
                    <h3>GENDER </h3> 
                    <div className="ui divider"></div>
                        <input type="checkbox" /> Product Type : JACKETS <br/>
                        <input type="checkbox" /> Product Type : JEANS <br/>
                        <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                        <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                        <a>clear All</a>
                    </div> 

                    <div className="ui segment"> 
                    <h3>CATEGORY </h3> 
                    <div className="ui divider"></div>
                        <input type="checkbox" /> Product Type : JACKETS <br/>
                        <input type="checkbox" /> Product Type : JEANS <br/>
                        <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                        <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                        <a>clear All</a>
                    </div> 

                    <div className="ui segment"> 
                    <h3>PRODUCT TYPE </h3> 
                    <div className="ui divider"></div>
                        <input type="checkbox" /> Product Type : JACKETS <br/>
                        <input type="checkbox" /> Product Type : JEANS <br/>
                        <input type="checkbox" /> Product Type : SWEATSHIRTS <br/>
                        <input type="checkbox" /> Discount : 0 % AND ABOVE <br/><br/>
                        <a>clear All</a>
                    </div> 

                    </div>





                    <div className="twelve wide column">
                        
                            <div className="doubling ui three column grid">

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt1.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shirt</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt2.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shirt</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt3.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shirt</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>


                            {/* 2nd images Column */}
                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt4.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt5.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt6.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>




                            {/* 3rd images Column */}
                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt7.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt8.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                <div class="ui black ribbon label">
                                        <i class="cart icon"></i> Adidas
                                    </div>
                                    <div className="ui image">
                                        <img src="menshirt9.jpg" />
                                    </div>
                                    <h3>Mens Adidas Shoes</h3>
                                    <h4>Prize $14.20</h4>
                                    <ShirtModal />
                                </div>
                            </div>

                            
                         
                        </div>
                    </div>




                </div>
            </div>



            <Footer />


        </div>
    );
}

export default MenShirt;