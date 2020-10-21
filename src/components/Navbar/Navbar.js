import React, { Component, useState } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    
    state = { clicked:false, setNavbar:false }
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    changeBackground =() =>{
        // console.log(window.scrollY)
        if(window.scrollY >= 300){
            this.setState({setNavbar:true})
            console.log(window.scrollY)
        }else{
            this.setState({setNavbar:false})
        }
    }
    
    render() { 
        return (  
            <nav className=" navbar-items {setNavbar ? 'active' : 'navbar-items'}">
                {/* <h1 className="navbarlogo"> BIBIN & EMELIYA</h1> */}
                <div className="menu-icon" onClick={this.handleClick} >
                    <i className={this.state.clicked ? 'close': 'hamburger'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key="{index}">
                                <a className={item.cName} href={item.url}>
                                    {item.titel}
                                </a>
                            </li>
                        )
                    })}
                   
                </ul>
                {/* <Button>Signup</Button> */}
            </nav>
        );
    }
}
 
export default Navbar;