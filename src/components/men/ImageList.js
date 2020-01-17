import React , {useState ,useEffect} from "react";
import axios from "axios"
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";

const ImageList = () => {

    const  [image ,setImage] =  useState([])

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
        .then(res => {
            console.log(res.data);
            setImage(res.data);
        })
        .catch(err => console.log(err));
    },[])

    return(
        <div>

            <br/><br/><br/><br/>
            <div className="ui container">
                <div className="ui two column grid">

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
                        <div className="ui three column grid">
                            <div className="column">
                                <div className="ui image">
                                  <Popup1 />
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui image">
                                    <Popup2 />
                                </div>
                            </div>
                            <div className="column">
                                <div className="ui image">
                                    <Popup3 />
                                </div>
                            </div>

                            <div className="column">
                                <div className="ui segment">
                                    <div className="ui image">
                                        <ul>
                                            {
                                    image.map(
                                    images => <li key={images.id}>
                                         {images.title} 
                                         <img src={images.url} /> 
                                           </li>
                              
                                        )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>




                </div>
            </div>













        </div>
    );
}

export default ImageList;