import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "./Image";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Footer from "./Footer";
import "./Style.css";

const Dashboard = () => {
  return(
    <div>
      <Navbar />
      <Image />
      <Content1 />
      <Content2 /> 
      <Content3 />
      <Footer />
    </div>
  );
}

export default Dashboard;















