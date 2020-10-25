import React, { Component } from 'react';
import './Hero.css';
import Snow from './Snow';
import { db } from './Firebase';

class Hero extends Component {
    state = {}
    componentDidMount() {
        db.collection('video').doc('fb')
            .onSnapshot((doc) => {
                this.setState({ url: doc.data() && doc.data().url })
            })

    }
    render() {
        return (
            <div className="hero">
                <Snow />
                {/* <img className="baloonheart"src="/images/bibinemeliya.jpg" alt="baloonheart"/> */}
                <div className="container">

                    <div className="baloonheart-sec">
                        <div className="hero-text">
                            <h1>Bibin & Emeliya</h1>
                            <div className="sub-hero">
                                <h4>ARE GETTING MARRIED ON </h4>
                                <h2> 26<sup>th</sup> Oct.  2020</h2>
                            </div>
                            {this.state.url && this.state.url.includes('http') && <a className="hero-button" href={this.state.url}> ► Watch Live video</a>}
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