import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
                <ul>
                    <li><NavLink exact to="/">Clock</NavLink></li>
                    <li><NavLink to="/stopwatch">Stopwatch</NavLink></li>
                </ul>
            </header>
        );
    }
}

export default Header;