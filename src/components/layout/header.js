import React from 'react';

import Menu from './menu';
//import appLogo from '../../../public/images/appbranding/logo.png';


function Header(props){
    return(
        <header >
            <nav className="navbar navbar-expand-lg navbar-expand-sm sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">
                    <img src="http://lohit.heliohost.org/me/assets/images/logo.png" width="30" height="30" alt="" />
                </a>
                <Menu userLoggedin={props.userLoggedin} logoutRedirect={props.logoutRedirect} />
            </nav>
        </header>
    )
}

export default Header