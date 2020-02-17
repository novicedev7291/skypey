import React from 'react';
import './MessageInput.css';

import store from '../store';
import { setTypingValue, sendMessage } from '../actions';



const MessageInput = ( { value } ) => {
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
        e.preventDefault();
    };
    
    const handleOnSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className="MessageInput" onSubmit={handleOnSubmit}>
            <input className="Message__input"
            onChange={handleChange} 
            value={value} 
            placeholder="Write a message" 
            />
        </form>
    );
};

export default MessageInput;