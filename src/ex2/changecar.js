import React, { Component } from 'react';
import redCar from "../assets/img/red-car.jpg"
import blackCar from "../assets/img/black-car.jpg"
import silverCar from "../assets/img/silver-car.jpg"
import steelCar from "../assets/img/steel-car.jpg"
import style from "./style.module.css"
import clsx from "clsx";

console.log(style);
class Changecar extends Component {
    state = {
        carImg: redCar,
    }
    changeColorCar = (img) => {
        this.setState({
            carImg: img,
        })
    }
  
    render() {
        return (
            <div>
                <img style={
                    {
                        width: 500,
                        marginBottom: 120
                    }
                }src={this.state.carImg} alt=""/>
                <div>
                    <button className={ clsx(style.button, style.red,{[style.active] : this.state.carImg === redCar}) } onClick={() => this.changeColorCar(redCar)}>red</button>
                    <button className={clsx(style.button, style.black)} onClick={() => this.changeColorCar(blackCar)}>black</button>
                    <button className={`${style.button} ${style.sil}`} onClick={() => this.changeColorCar(silverCar)}>silver</button>
                    <button className={`${style.button} ${style.steel}`} onClick={() => this.changeColorCar(steelCar)}>steel</button>
                </div>
            </div>

        );
    }
}

export default Changecar;