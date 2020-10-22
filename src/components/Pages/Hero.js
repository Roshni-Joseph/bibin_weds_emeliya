import React, {Component} from 'react';
import './Hero.css';
import Snow from './Snow';

class Hero extends Component{
    // constructor(){
    //     super();
    // }
    render(){
        return(
        <div className="hero">
            <Snow/>
            {/* <img className="baloonheart"src="/images/bibinemeliya.jpg" alt="baloonheart"/> */}
            <div className="container">
            
                <div className="baloonheart-sec">
                    
                    <div className="hero-text">
                        <h1>Bibin & Emeliya</h1>
                        <div className="sub-hero">
                        <h4>ARE GETTING MARRIED ON </h4>
                        <h2> 26<sup>th</sup> Oct.  2020</h2>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
        )
    }
}
// function Hero(){
//     return(
        
//     )
// }
export default Hero;