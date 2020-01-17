import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';

import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

import MenShoes from "./components/men/MenShoes";
import MenShirt from "./components/men/MenShirt";
import MenJeans from "./components/men/MenJeans";
import MenHoodies from "./components/men/MenHoodies";
import MenShorts from "./components/men/MenShorts";
import MenJacket from "./components/men/MenJacket";
import MenCap from "./components/men/MenCap";


import WomenShoes from "./components/women/WomenShoes";
import WomenShirt from "./components/women/WomenShirt";
import WomenJeans from "./components/women/WomenJeans";


import KidShoes from "./components/kid/KidShoes";
import KidShirt from "./components/kid/KidShirt";
import KidJeans from "./components/kid/KidJeans";

import Cart from "./components/payment/Cart";
import Delivery from "./components/payment/Delivery";
import Payment from "./components/payment/Payment";

import "./components/Style.css";


ReactDOM.render(

<HashRouter>

    {/* SignIn And SignUp */}
    <Route exact path="/signin" component={SignIn}/>
    <Route exact path="/signup" component={SignUp}/>

    {/* Dashboard */}
    <Route exact path="/" component={Dashboard}/>


    {/* Mens */}
    <Route exact path="/menjeans" component={MenJeans}/>
    <Route exact path="/menshirt" component={MenShirt}/>
    <Route exact path="/menshoes" component={MenShoes}/>
    <Route exact path="/menhoodies" component={MenHoodies}/>
    <Route exact path="/menshorts" component={MenShorts}/>
    <Route exact path="/menjacket" component={MenJacket}/>
    <Route exact path="/mencap" component={MenCap}/>

   
    {/* Womens */}
    <Route exact path="/womenjeans" component={WomenJeans}/>
    <Route exact path="/womenshirt" component={WomenShirt}/>
    <Route exact path="/womenshoes" component={WomenShoes}/>


    <Route exact path="/kidshoes" component={KidShoes}/>
    <Route exact path="/kidshirt" component={KidShirt}/>
    <Route exact path="/kidjeans" component={KidJeans}/>

    {/* Payment */}
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/delivery" component={Delivery}/>
    <Route exact path="/payment" component={Payment}/>


    

</HashRouter>,
document.getElementById("root"));