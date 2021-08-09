import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component{

    pageNavItemClicked =(element)=>{
        
    }

    render(){
        return(
            <div>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-sm-none .d-md-block" id="navbarNav">
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item active" onClick = {this.pageNavItemClicked}>
                            <Link style={this.pageLink(this.props,"always")} className="nav-link" to="/"> Home</Link>
                        </li>
                        <li className="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={this.pageLink(this.props,"loggedInOnly")} className="nav-link" to="/itemListing">Menu</Link>
                        </li>
                        <li className="nav-item" onClick = {this.pageNavItemClicked}>
                            <Link style={this.pageLink(this.props,"loggedInOnly")} className="nav-link" onClick={this.props.logoutRedirect} to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    pageLink = (props,accessFor)=>{

        var styleObject = {
            textDecoration:'none',
            display:'none'
        };

        if (accessFor === "loggedInOnly" && props.userLoggedin) {
            styleObject.display="block";
        }
        
        if (accessFor === "notLoggedIn" && !props.userLoggedin) {
            styleObject.display="block";
        }

        if (accessFor === "always") {
            styleObject.display="block";
        }
        
        return styleObject;
    }
}

/* const pageLink={
    textDecoration:'none'
} */



export default Menu