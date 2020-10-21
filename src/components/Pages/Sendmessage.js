import React, { useState } from 'react';
import './Wishes.css';
import { db} from './Firebase'
import Messages from './Messages';
const Sendmessage = () =>{
    const [name, setName] =useState("");
    const [message, setMessage] =useState("");
    const handleSubmit =(e) =>{
        e.preventDefault(); 
        db.collection('contacts').add({
            name:name,
            message:message,
        })
        .then(()=>{
            alert("Message has been submited")
        })
        .catch( error =>{
            alert(error.message)
        })
        setName('');
        setMessage('');
    };

        return(
            <div className="wishes" id="sendwishes">
                
                <div className="container">
                    <h2 className="head" > Send Your Wishes </h2>
                    <div className="flex-between flex-center">
                        <div className="messages">
                            <Messages/>
                            <a className="scroll-top-icon" href="#scroll-top">
                                <span className="arrow up"></span>
                            </a>
                            <a className="scroll-bottom-icon" href="#scroll-bottom">
                            <span className="arrow down"></span>
                            </a>
                        </div>
                        <div className="form">
                            <form className="form-container"  onSubmit={handleSubmit}>
                                <input type="text" placeholder="Your Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <textarea type="text" placeholder ="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <button type="submit" name="submit">Post</button>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        );
};
export default Sendmessage;