import React from "react";
import {Content} from "./content";
import Footer from "./footer";
import {Header} from "./header";
import Sidebar from "./sidebar";
import "./home.css";

class Home extends React.Component{
    render(){
        return(
            <div className="container">
            <Header />
            <div className="wrapper">
                <Content />
                <Sidebar />
            </div>
            <Footer />  
            </div>
         
        );
    }
}
export default Home;
