import React from "react";
import "./header.css";
export class Header extends React.Component {
    showMessage(mess){
        alert(mess);
    }
    render(){
        return (
            <div className="header">
            <button onClick={()=>{
                this.showMessage("hello22");
            }}>Show Mess</button>
            <h1>Header</h1>
            </div>

        )
    }
}
