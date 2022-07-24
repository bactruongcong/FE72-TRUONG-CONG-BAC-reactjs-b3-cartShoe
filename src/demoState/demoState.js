import React, { Component } from 'react';

class demoState extends Component {
   
    state = {
        isLogin:false,
    }
    renderMess(){
        if(this.state.isLogin){
            return <h2>Xin chào Bắc</h2>;
        }
        return  <h1>Vui lòng đăng nhập</h1> 
    }
    signin = () =>{
        this.setState({
            isLogin: true,
        })
     
    }
    signout = () =>{
        this.setState({
            isLogin: false,
        })
    }
    render() {
        return (
            <div>
                {this.renderMess()}
                {this.state.isLogin ?  (<button onClick={this.signout}>Đăng xuất</button >) :  (<button onClick={this.signin}>Đăng nhập</button>)}
            </div>
        );
    }
}

export default demoState;