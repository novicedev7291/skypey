import React, { Component } from 'react';
import './Chats.css';

const Chat = ( { message } ) => {
    const {text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is_user_msg" : "" }`}>{text}</span>
    );
};

class Chats extends Component {
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount(){
        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    scrollToBottom(){
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }

    render (){
        const chats = this.props.messages.map(message => {
            return <Chat message={message} key={message.number} />;
        });
        return (
            <div className="Chats" ref={this.chatsRef}>
                {chats}
            </div>
        );
    }
}

export default Chats;