import React from "react";

const Content3 = () => {
    return(
        <div>


            <br/>
            <div className="ui container">
                <h1> Latest Products for Sales</h1> <br/><br/>
            <div className="two column ui grid">

                <div className="four wide column">
                <div className="ui segment">
                    <div className="ui image">
                    <img src="c1.jpg" />
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui image">
                    <img src="c2.jpg" />
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui image">
                    <img src="c3.jpg" />
                    </div>
                </div>

                </div>


                <div className="twelve wide column">
                    <div className="ui segment">
                        <div className="ui image">
                            <img src="c4.jpg" />
                        </div>
                    </div>
                </div>

            </div>
            </div>


        </div>
    );
}

export default Content3;