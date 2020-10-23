import React, { Component, useState } from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    
    state = { clicked:false , backgroundColor: 'rgba(134,206,219 ,.4)'}
      
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    listenScrollEvent = e => {
        if (window.scrollY > 400) {
          this.setState({backgroundColor: 'rgba(134,206,219 ,.9)'})
        } else {
          this.setState({backgroundColor: 'rgba(134,206,219 ,.4)'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    
    render() { 
        return (  
            <nav className=" navbar-items" style={{backgroundColor: this.state.backgroundColor}}>
                <h1 className="navbarlogo"> Bibin & Emeliya <span>ARE GETTING MARRIED</span></h1>
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