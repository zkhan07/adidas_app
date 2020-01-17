import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../dashboard/Footer";
import { Link } from "react-router-dom";

const Delivery = () => {
    return(
        <div>

            <Navbar />

            <div className="ui fluid container">
                <div className="ui inverted menu">
                    <div className="item">
                        Cart
                    </div>
                    <div className="item">
                        Delivery
                    </div>
                    <div className="item">
                        Payment
                    </div>
                </div>
            </div>

            <br/><br/><br/>
            <div className="ui container">
                <h2>BILLING ADDRESS</h2>
                <div className="ui divider"></div>
            </div>
            


            <br/><br/><br/><br/>
            <div className="ui container">
                <h4>All fields are required unless otherwise noted.</h4>
                <div className="ui divider"></div>
                 <br/>
                <div className="doubling stackable ui two column grid">
                    
                    <div className="ten wide column">
                    <form class="ui form">
                        <div className="ui two fields">
                            <div class="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name" />
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input type="text" name="first-name" placeholder="Last Name" />
                            </div>
                        </div>

                        <div class="field">
                            <label>Select Address</label>
                            <input type="text" name="first-name" placeholder="Select Address" />
                        </div>

                        <div className="ui two fields">
                            <div class="field">
                                <label>Landmark</label>
                                <input type="text" name="first-name" placeholder="Landmark" />
                            </div>
                            <div class="field">
                                <label>State</label>
                                <input type="text" name="first-name" placeholder="State" />
                            </div>
                        </div>

                        <div class="field">
                            <label>Enter Pincode</label>
                            <input type="text" name="last-name" placeholder="Enter Pincode" />
                        </div>
                        <div class="field">
                            <label>Enter Number</label>
                            <input type="text" name="last-name" placeholder="Enter Number" />
                        </div>
                        </form>
                        <br/>

                        <div className="ui divider"></div>
                        <div class="field">
                            <input type="checkbox" name="last-name" placeholder="Enter Number" />
                           <h4> Save this Address and Phone Number to my Profile.</h4>
                        </div>

                        
                        <div className="ui divider"></div>
                    
                        <Link to="/payment">
                            <button className="ui red button"> CONTINUE CHECKOUT</button>
                        </Link>
                      

                        

                    </div>

                    <div className="six wide column center aligned">
                        <h3>Order Summary</h3>
                        <div className="ui segment">

                        <div class="ui items">
                        <div class="item">
                            <div class="ui tiny image">
                            <img src="menshoes1.jpg" />
                            </div>
                            <div class="content">
                            <div class="header">Adidas Mens Shoes</div>
                            <div class="meta">
                                <span class="price"> Price : $1200</span>
                                <span class="stay"> Ofeer : 1 Month</span>
                            </div>
                            <div class="description">
                                <p>Colour: CONAVY/CONAVY/SCARLE</p>
                                <p>Size: 9</p>
                                <p>Product Identifier: CK9420</p>
                            </div> <br/>
                            <button className="ui basic black button">Remove Item</button>
                            <button className="ui black button">Add To Wishlist</button>
                            </div>
                        </div>
                        </div>

                        <div className="ui divider"></div>

                        <div class="ui items">
                        <div class="item">
                            <div class="ui tiny image">
                            <img src="menshoes2.jpg" />
                            </div>
                            <div class="content">
                            <div class="header">Adidas Mens Shoes</div>
                            <div class="meta">
                                <span class="price"> Price : $1200</span>
                                <span class="stay"> Ofeer : 1 Month</span>
                            </div>
                            <div class="description">
                                <p>Colour: CONAVY/CONAVY/SCARLE</p>
                                <p>Size: 9</p>
                                <p>Product Identifier: CK9420</p>
                            </div> <br/>
                            <button className="ui basic black button">Remove Item</button>
                            <button className="ui black button">Add To Wishlist</button>
                            </div>
                        </div>
                        </div>

                        <table class="ui celled table">
                            <thead>
                                <tr>
                                <th>Product</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td data-label="Name">Merchandise Subtotal (Incl Item Discounts)</td>
                                <td data-label="Job">₹3,278.00</td>
                                </tr>
                                <tr>
                                <td data-label="Name">Shipping And Handling	</td>
                                <td data-label="Job">₹0.00</td>
                                </tr>
                                <tr>
                                <td data-label="Name">Order Discounts</td>
                                <td data-label="Job">-₹0.00</td>
                                </tr>
                                <tr>
                                <td data-label="Name"><h3>TOTAL</h3></td>
                                <td data-label="Job"><h3>₹3,278.00</h3></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
         
                </div>
            </div>



            <Footer />


        </div>
    );
}

export default Delivery;