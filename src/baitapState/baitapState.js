import React from "react";
import Styles from "./style.module.css";
import dataGlass from "../baitapState/dataGlasses.json";
import v1 from "./glassesImage/v1.png";
import v2 from "./glassesImage/v2.png";
import v3 from "./glassesImage/v3.png";
import v4 from "./glassesImage/v4.png";
import v5 from "./glassesImage/v5.png";
import v6 from "./glassesImage/v6.png";
import v7 from "./glassesImage/v7.png";
import v8 from "./glassesImage/v8.png";
import v9 from "./glassesImage/v9.png";

import g1 from "./glassesImage/g1.jpg";
import g2 from "./glassesImage/g2.jpg";
import g3 from "./glassesImage/g3.jpg";
import g4 from "./glassesImage/g4.jpg";
import g5 from "./glassesImage/g5.jpg";
import g6 from "./glassesImage/g6.jpg";
import g7 from "./glassesImage/g7.jpg";
import g8 from "./glassesImage/g8.jpg";
import g9 from "./glassesImage/g9.jpg";

import model from "./glassesImage/model.jpg"

class BaitapState extends React.Component {
    state = {
        glassImg: v1,
    }
    changeGlass = (img) => {
        this.setState({
            glassImg: img,
        })
    }
    render(){
        return (
            
            <div className={Styles.main}>
                <div className={Styles.overplay}></div>
                <div className={Styles.header}>
                    <h1>TRY GLASSES APP ONLINE</h1>
                </div>
                <div className={Styles.wrapper}>
                    <div className={Styles.model}>
                        <img className="" src={model} alt=""/>
                        <div className={Styles.modelglass}>
                        <img className="" src={this.state.glassImg} alt=""/>   
                        </div>
                    </div>
                    <div className={Styles.model}>
                         <img className="" src={model} alt="" />
                         <div className={Styles.modelglass}>
                        <img className="" src={this.state.glassImg} alt=""/>   
                        </div>
                    </div>
                </div>
                <div className={`${Styles.wrapper} ${Styles.wrappercustom}`}>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g1} alt="" onClick={() => this.changeGlass(v1)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g2} alt="" onClick={() => this.changeGlass(v2)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g3} alt="" onClick={() => this.changeGlass(v3)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g4} alt="" onClick={() => this.changeGlass(v4)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g5} alt="" onClick={() => this.changeGlass(v5)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g6} alt="" onClick={() => this.changeGlass(v6)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g7} alt="" onClick={() => this.changeGlass(v7)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g8} alt="" onClick={() => this.changeGlass(v8)}/>
                        </div>
                </div>
                <div className={Styles.item}>
                        <div>
                            <img className={Styles.glass} src={g9} alt="" onClick={() => this.changeGlass(v9)}/>
                        </div>
                </div>
                </div>
               
            
            </div>
        )
    }
}
export default BaitapState;