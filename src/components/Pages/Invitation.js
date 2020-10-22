import React, { Component } from 'react';
import './Invitation.css'

class Invitation extends Component{

    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="invitation" id="invitation">
                <div className="container">
                <h2 className="head">Catch the Eye</h2>
                <div className="flex-between pt20">
                    <div className="card-groom text-center">
                        <div className="img-card">
                            <img src="/images/bibin.jpg" alt="faceimg"/>
                        </div>
                        <h3 className="card-name">Bibin Joseph</h3>
                        <h4 className="housename">Thellakath House</h4>
                        <h5 className="parents">(S/O Mrs. Bency & Mr. T J Joseph)</h5>
                    </div>
                    <div className="cardlist">
                        <div>
                            <h2>BIBIN & EMELIYA</h2>
                            <h4>ARE GETTING MARRIED</h4>
                            <h3>On 26<sup>th</sup> Oct 2020 </h3>
                            <h5>At St. Augustine's Church<br/> Vettilappara</h5>
                        </div>
                        
                    </div>
                    <div className="card-bride text-center">
                        <div className="img-card">
                            <img src="/images/emiliya.jpg" alt="faceimg"/>
                        </div>
                        <h3 className="card-name">Emeliya Michel</h3>
                        <h4 className="housename">Thayil House</h4>
                        <h5 className="parents">(D/O Mrs. Moly & Mr. Michel)</h5>
                    </div>
                    
                </div>
                <div className="infobox flex-between flex-center">
                    <p>We will take care of all the preventing measures of Covid 19 as prescribed by the Govt. Wear mask and Join us. Others, please join us through online.</p>
                    <button>Watch live</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invitation;