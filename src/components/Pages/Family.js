import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tabs from "./Tabs"; 
import './Family.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
class Family extends Component{

    render(){
        return(
            <div className="family" id="family">
                <div className="container">
                 <h2 className="head">Loveable Family</h2>

                <Tabs> 
                    <div label="/images/bibin_face.jpg"> 
                      <div className="familycarousel" >
                          <Carousel
                          swipeable={false}
                          draggable={false}
                          showDots={this.props.deviceType === "mobile" ? true : false}
                          responsive={responsive}
                          ssr={true} // means to render carousel on server-side.
                          infinite={true}
                          autoPlay={this.props.deviceType === "mobile" ? true : false}
                          autoPlaySpeed={2000}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["desktop"]}
                          deviceType={this.props.deviceType}
                          dotListClass="custom-dot-list-style"
                          itemClass="carousel-item-padding-40-px"
                          >
                              <div>
                                <img src="/images/sunny.jpg" alt="faceimg"/>
                                <h3>Mr. T J Joseph</h3>
                                <h5>(Bibin's Father)</h5>
                              </div>
                              <div>
                                <img src="/images/bency.jpg" alt="faceimg"/>
                                <h3>Mrs. Bency</h3>
                                <h5>(Bibin's Mother)</h5>
                              </div>
                              <div>
                              <img src="/images/sebin.jpg" alt="faceimg"/>
                                <h3>Sebin & Disna</h3>
                                <h5>(Bibin's Brother)</h5>
                              </div>
                              <div>
                                <img src="/images/roshni.jpg" alt="faceimg"/>
                                <h3>Roshni Joseph</h3>
                                <h5>(Bibin's Sister)</h5>
                              </div>
                              
                          
                          </Carousel>
                      </div>
                    </div> 
                    <div label="/images/emiliya-face.jpg"> 
                      <div className="familycarousel">
                          <Carousel
                          swipeable={false}
                          draggable={false}
                          showDots={this.props.deviceType === "mobile" ? true : false}
                          responsive={responsive}
                          ssr={true} // means to render carousel on server-side.
                          infinite={true}
                          autoPlay={this.props.deviceType === "mobile" ? true : false}
                          autoPlaySpeed={2000}
                          keyBoardControl={true}
                          customTransition="all .5"
                          transitionDuration={500}
                          containerClass="carousel-container"
                          removeArrowOnDeviceType={["desktop"]}
                          deviceType={this.props.deviceType}
                          dotListClass="custom-dot-list-style"
                          itemClass="carousel-item-padding-40-px"
                          >
                              <div>
                                <img src="/images/michal.jpg" alt="faceimg"/>
                                <h3>Mr. Thomas Michel</h3>
                                <h5>(Emeliya's Father)</h5>
                              </div>
                              <div>
                                <img src="/images/moly.jpg" alt="faceimg"/>
                                <h3>Mrs. Moly Michel</h3>
                                <h5>(Emeliya's Mother)</h5>
                              </div>
                              <div>
                                <img src="/images/elsa.jpg" alt="faceimg"/>
                                <h3>Eliza Michel </h3>
                                <h5>(Emeliya's Sister)</h5>
                              </div>
                              

                          </Carousel>
                      </div>
                    </div> 
                  </Tabs> 
                    
                </div>

             </div>
        )
    }
}

export default Family;