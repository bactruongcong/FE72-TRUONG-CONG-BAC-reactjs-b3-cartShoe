import React from "react";


class Header extends React.Component {
    render(){
        return <div>
            <a href="#">CyberSoft</a>
            <h2>This is header</h2>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Service</a>
            </nav>
        </div>
    }
}

export default Header;