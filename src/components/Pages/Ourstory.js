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
                                <h3>Bron and Grown</h3>
                                <h5>1990'<sup>s</sup></h5>
                                <p>Born and grown at two ends of Kerala, Malappuram and Kasargod. Bibin completed schooling at Holy Cross School and Emeliya from Navodaya. When one has good childhood memories, they grow up to be happy individuals .! and that's true...</p>
                            </div>
                            
                        </div>
                    </li>
                    <li> 
                        <div className="flex-center story-content">
                            <div className="w100p">
                                <h3>Schools and College</h3>
                                <h5>2000'<sup>s</sup></h5>
                                <p>This is the Bron and grown story of bibin and emeliya asdfkh asdhf asdfhsadjkfhkasdjf asdfhkasdf asdfhkajsdfhdsf khasdf asdfkhasdf asdfdsafjkhasdfjh ahsdfkjhasdfjsdfhsd</p>
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
                                <h5>15-10-2019</h5>
                                <p>This is the Bron and grown story of bibin and emeliya asdfkh asdhf asdfhsadjkfhkasdjf asdfhkasdf asdfhkajsdfhdsf khasdf asdfkhasdf asdfdsafjkhasdfjh ahsdfkjhasdfjsdfhsd</p>
                            </div>
                            
                        </div>
                    </li>
                    <li>
                        <div className="flex-center story-content">
                            <div className="w100p">
                                <h3>Firs Meeting</h3>
                                <h5>15-05-2020</h5>
                                <p>This is the Bron and grown story of bibin and emeliya asdfkh asdhf asdfhsadjkfhkasdjf asdfhkasdf asdfhkajsdfhdsf khasdf asdfkhasdf asdfdsafjkhasdfjh ahsdfkjhasdfjsdfhsd</p>
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
                                <h5>24-10-2020</h5>
                                <p>This is the Bron and grown story of bibin and emeliya asdfkh asdhf asdfhsadjkfhkasdjf asdfhkasdf asdfhkajsdfhdsf khasdf asdfkhasdf asdfdsafjkhasdfjh ahsdfkjhasdfjsdfhsd</p>
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