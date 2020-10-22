import React, {Component} from 'react';
import './Hero.css';

const Snowflake = (props) =>{
    return(
        <p className='Snowflake' id={`item${props.id}`} style={props.style}>*</p>
    )
}

    class Snow extends Component {
            snow=()=>{
            let animationDelay = '0s';
            let fontSize = '100px';
            let arr = Array.from('Snowflakes ASDF asdf asdf asdf sadf sadf sadfasdfasdf asdfsdf sadfsdfASDF ASDF ASDFSDF ASDFASDF ASDF ASDF ASDF ASDF ASDF ASDF DS ')
                    return arr.map((el, i)=>{
                animationDelay = `${(Math.random()*16).toFixed(2)}s`;
                fontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
                let style = {
                    animationDelay,
                    fontSize
            }
            return (<Snowflake key={i} id={i} style={style}/>)
            })
        }

        render(){
            return(
            <div className="snowfall">
                        {this.snow()}
                    </div>
            )
        }
    }
export default Snow;
