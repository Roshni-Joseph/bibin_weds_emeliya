import React, { Component } from 'react';
import { db} from './Firebase';
// import './Messages.css';

class Messages extends Component{
    state = {
        contacts:null
    }
    componentDidMount() {

        db.collection('contacts')
        .onSnapshot(snapshot => {
            const contacts=[]
            snapshot.forEach(doc=>{
                const data=doc.data()
                contacts.push(data)
            })
            this.setState({contacts:contacts})

           // console.log(snapshot)

        })
    }

    render(){
        return(
            <div className="messages-container" >
                    <span id="scroll-top"></span>
                    {
                        this.state.contacts &&
                        this.state.contacts.map(contacts=>{
                            return(
                            <div className="message-list">
                                <h4>{contacts.message}</h4>        
                                <p>-{contacts.name}</p> 
                            </div>
                            )
                        })
                    }
                    <span id="scroll-bottom"></span>
            </div>
            
        )
    }
}

export default Messages;
