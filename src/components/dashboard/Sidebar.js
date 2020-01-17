import React from 'react';
import Sidebar from "react-sidebar";

class SideBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
   
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
   
    render() {
      return (
        <div>

      
        <Sidebar
          sidebar={<>
          <h1>Addidas Shop</h1>
         <button className="ui red button">sidebar</button>
          </>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          
       

          <button className="ui small blue button" onClick={() => this.onSetSidebarOpen(true)}>
            <i className="car icon"></i>
            <h3>Open Menubar</h3>
          </button>
        </Sidebar>
    





      
   

    

    <div class="ui container">
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
	
						<div class="item"> <a href="menshoes"> Men's Shoes </a></div> 
						<div class="item"> <a href="commodity"> Basketball  </a></div> 
						<div class="item"> <a href="indices"> Cricket </a></div> 
						<div class="item"> <a href="stocks">   Football </a></div> 
						<div class="item"> <a href="conditions"> Original </a></div> 
						<div class="item"> <a href="trading">  Outdoor </a></div> 
						<div class="item"> <a href="account"> Running </a></div> 
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
  }
   
  export default SideBar;
