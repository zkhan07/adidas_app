import React from "react";
import Navbar from "../navbar/Navbar";
import ShoesModal from "../men/ShoesModal";
import { Link } from "react-router-dom";

const Cart = () => {
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
                <h2>Your Shopping Cart</h2>
                <div className="ui divider"></div>
            </div>
            


            <br/><br/><br/><br/>
            <div className="ui container">
                <h2>Item Details</h2>
                <div className="ui divider"></div>
                 <br/>
                <div className="doubling stackable ui two column grid">
                    
                    <div className="ten wide column">
                    <div class="ui items">
                        <div class="item">
                            <div class="ui small image">
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
                            <div class="ui small image">
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
                        <div className="ui divider"></div>
                        <div class="ui items">
                        <div class="item">
                            <div class="ui small image">
                            <img src="menshoes3.jpg" />
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
                        </div> <br/>
                        
                        <Link to="/">
                            <button className="ui red button"> Continue Shopping</button>
                        </Link>
                      

                    </div>

                    <div className="six wide column center aligned">
                        <h3>Order Summary</h3>
                        <div className="ui segment">
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
                            <Link to="/delivery">
                                <button className="ui black button">CHECKOUT</button>
                            </Link>
                          
                        </div>
                    </div>
         
                </div>
            </div>



       


        </div>
    );
}

export default Cart;