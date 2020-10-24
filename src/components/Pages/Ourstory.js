import React, { Component } from 'react';
import './Ourstory.css'

class Ourstory extends Component{

    render(){
        return(
            <div id="ourstory" className="ourstory">
                <div className="container">
                <h2 className="head" >Our Story</h2>
                <ul>
                    <span className="timeline-top"/>
                    <li>
                        <div className="story-img">
                            <span className="timeline-img">
                                <img src="/images/child.jpg" alt="story images"/>
                            </span>
                        </div>
                        <div className="flex-center story-content">
                            <div className="w100p">
                                <span className="timeline-icon">
                                    <img src="/images/toys.svg" alt="Born and grown"/>
                                </span>
                                <h3>Born and Grown</h3>
                                <h5>1990'<sup>s</sup></h5>
                                <p>Bibin and Emeliya...both born and grown into beautiful hilly villages of Kerala .. Vettilappara and Bheemanadi . Both have experienced a pleasant childhood and a marvellous school life . Emeliya was lucky enough to be a Navodaya   girl . Bibin spent his schooling at Holy Cross School.</p>
                            </div>
                            
                        </div>
                    </li>
                    <li> 
                        <div className="flex-center story-content">
                            <div className="w100p">
                                <h3>Schools and College</h3>
                                <h5>2000'<sup>s</sup></h5>
                                <p>Youth is the jubilant and vibrant period in life , lot of energy to explore new horizon. Bibin completed his graduation from St.Joseph's college Devagiri. Emeliya persued BHMS from Fr.Muller's College Manglore.</p>
                            </div>
                            
                        </div>
                        <div className="story-img">
                            <span className="timeline-icon">
                                <img src="/images/graduated.svg" alt="Schools and College"/>
                            </span>
                            <span className="timeline-img">
                                <img src="/images/school.jpg" alt="story images"/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="story-img">
                        <span className="timeline-img">
                                <img src="/images/teacher.jpg" alt="story images"/>
                            </span>
                        </div>
                        <div  className="flex-center story-content">
                            <div>
                                <span className="timeline-icon">
                                    <img src="/images/success.svg" alt="Life stone"/>
                                </span>
                                <h3>Life stone</h3>
                                <h5>2018 '<sup>s</sup></h5>
                                <p>Fulfilling passion is the highest  achievement. Now Bibin is teacher and Emeliya is a doctor .</p>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="flex-center story-content">
                            <div className="w100p">
                                <h3>First Meeting</h3>
                                <h5>27-06-2020</h5>
                                <p>Destiny and desire  paved way to the much anticipated day..!  Their FIRST meeting</p>
                            </div>
                        </div>
                        <div className="story-img">
                            <span className="timeline-icon">
                                <img src="/images/dove.svg" alt="First Meeting"/>
                            </span>
                            <span className="timeline-img">
                                <img src="/images/meeting.jpg" alt="story images"/>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="story-img">
                            <span className="timeline-img">
                                <img src="/images/marry.jpg" alt="story images"/>
                            </span>
                        </div>
                        <div className="flex-center story-content">
                            <div className="w100p">   
                                <span className="timeline-icon">
                                    <img src="/images/engagement.svg" alt="The Wedding Day"/>
                                </span>
                                <h3>The Wedding Day</h3>
                                <h5>26-10-2020</h5>
                                <p>“Every heart sings a song, incomplete, until another heart whispers back..!" And here they are moving forward to complete the sonnet of life❣️</p>
                            </div>
                            
                        </div>
                    </li>
                    <span className="timeline-bottom"/>
                </ul>
                </div>
                
            </div>
            

        )
    }
}
export default Ourstory;