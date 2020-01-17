import React from "react";
import "./Style.css";

const Appbar = () => {
  return(
    <div>

      
      {/* <!-- // Menubar 1 --> */}
		<div className="ui fluid container bar1">
			<div className="doubling stackable ui inverted menu">
			<div className="left item">
			  <a href="#"> adidas786.kz@gmail.com </a>
			</div>
			
			<div className="item">
				<a href="/signup">	
					Register
				</a>
			</div>
			
			<div className="item">
			<a href="/loginlive">
				  Login
			</a>
			</div>
			
			</div>
		</div>
		



	{/* // <!-- Menubar 2 --> */}
	<div class="ui fluid container">
		<div class="doubling stackable ui menu"> 
			
			<div className="left item">
			<h1>Addidas Shop <i className="cart icon"></i> </h1> 
			</div>
		
			<div class="item">
				<a href="/"> Home </a>
			</div>

			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div>Men</div>
				<i class="dropdown icon"></i>
                <div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>FOOTWEAR</h3>
						<div class="item"> <a href="menshoes"> Men's Shoes </a></div> 
						<div class="item"> <a href="commodity"> Basketball  </a></div> 
						<div class="item"> <a href="indices"> Cricket </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
						<h3>CLOTHING</h3>
						<div class="item"> <a href="menshirt"> Shirts </a></div> 
						<div class="item"> <a href="commodity"> Jerseys  </a></div> 
						<div class="item"> <a href="indices"> Pants & Tights </a></div> 
						<div class="item"> <a href="stocks">   Shorts </a></div> 
						<div class="item"> <a href="conditions"> Sweatshirts </a></div> 
						<div class="item"> <a href="trading">  Tank & Shirts </a></div> 
						<div class="item"> <a href="account"> Tracksuits </a></div> 
						<div class="item"> <a href="conditions"> T-Shirts & Polos </a></div> 
						<div class="item"> <a href="trading">  Windbreakers </a></div> 
						<div class="item"> <a href="account"> adidas Originals </a></div> 
						</div> 

						<div className="three wide column">
						<h3>ACCESSORIES</h3>
						<div class="item"> <a href="menjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

						<div className="three wide column">
						<h3>SPORTS</h3>
						<div class="item"> <a href="whatforex"> What is Forex? </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div>


					</div>
					</div>
                </div>
                </div>
			</div>
			
			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div> WOMEN </div>
				<i class="dropdown icon"></i>
                  <div class="menu">
					<div className="ui container">
					<div className="ui four column grid">

						<div className="three wide column">
						<h3>FOOTWEAR</h3>
						<div class="item"> <a href="womenshoes"> shoes </a></div> 
						<div class="item"> <a href="commodity"> Basketball  </a></div> 
						<div class="item"> <a href="indices"> Cricket </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
						</div> 

						<div className="three wide column">
						<h3>CLOTHING</h3>
						<div class="item"> <a href="womenshirt"> shirt </a></div> 
						<div class="item"> <a href="commodity"> Jerseys  </a></div> 
						<div class="item"> <a href="indices"> Pants & Tights </a></div> 
						<div class="item"> <a href="stocks">   Shorts </a></div> 
						<div class="item"> <a href="conditions"> Sweatshirts </a></div> 
						<div class="item"> <a href="trading">  Tank & Shirts </a></div> 
						<div class="item"> <a href="account"> Tracksuits </a></div> 
						<div class="item"> <a href="conditions"> T-Shirts & Polos </a></div> 
						<div class="item"> <a href="trading">  Windbreakers </a></div> 
						<div class="item"> <a href="account"> adidas Originals </a></div> 
						</div> 

						<div className="three wide column">
						<h3>ACCESSORIES</h3>
						<div class="item"> <a href="womenjeans"> Jeans </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div> <br/><br/>

						<div className="three wide column">
						<h3>SPORTS</h3>
						<div class="item"> <a href="whatforex"> What is Forex? </a></div> 
						<div class="item"> <a href="commodity"> Commodities  </a></div> 
						<div class="item"> <a href="indices"> Indices </a></div> 
						<div class="item"> <a href="stocks">   Stocks </a></div> 
						<div class="item"> <a href="conditions"> profit4money Conditions </a></div> 
						<div class="item"> <a href="trading">  Trading FAQs </a></div> 
						<div class="item"> <a href="account"> Account Types </a></div> 
						</div>

					</div>
					</div>
					</div>
                </div>
			</div>

			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div> KIDS </div>
				<i class="dropdown icon"></i>
                <div class="menu">
		 			<div class="item"> <a href="liveaccount"> Open Live Account </a></div>
					<div class="item"> <a href="accountcomparision"> Account Comparisions </a> </div>
				    <div class="item"> <a href="accountverification"> Account verification </a></div>
					<div class="item"> <a href="tradingparameters"> Tradnig Parameters </a></div>
				 	<div class="item"> <a href="tradingspreads"> Trading Spreads </a></div>
					<div class="item"> <a href="losspolicy"> Stop Loss policy </a></div>
			     	<div class="item"> <a href="premium"> Premium </a></div>
					<div class="item"> <a href="withdrawal"> Withdrawl process </a></div>
                </div>
                </div>
			</div>
		
			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div> SPORTS </div>
				<i class="dropdown icon"></i>
                <div class="menu">
		 		    <div class="item"> <a href="dailymarket"> Daily Market Review </a></div> 
					<div class="item"> <a href="financial"> Finacial Calender  </a></div> 
					<div class="item"> <a href="timecharts"> Real Time Charts </a></div> 
					<div class="item"> <a href="signals"> Signals</a></div> 
				    <div class="item"> <a href="platforms"> Platforms </a></div> 
					<div class="item"> <a href="livemarket"> Live Market Rates </a></div> 
			     	<div class="item"> <a href="educationpackage"> Education Package </a></div> 
                </div>
                </div>
			</div>

			<div class="ui compact menu">
 			    <div class="ui simple dropdown item">
				<div> BRANDS </div>
				<i class="dropdown icon"></i>
                <div class="menu">
		 		    <div class="item"> <a href="policy"> Our Trading Policy </a></div> 
					<div class="item"> <a href="disclaimer"> Disclaimer  </a></div> 
					<div class="item"> <a href="terms"> Trading Terms </a></div> 
					<div class="item"> <a href="riskcaution"> Risk Caution </a></div> 
                </div>
                </div>
			</div>

            <div class="item">
				<a href="/contactnew"> OUTLET </a>
			</div>
			<div class="item">
				<a href="/contactnew"> NEW ARRIVALS </a>
			</div>
			<div class="item">
			 <i className="search icon"></i><input type="text" placeholder="Search" />
			</div>

		</div>
	</div>



		
				
					
		








    </div>
  );
}

export default Appbar;