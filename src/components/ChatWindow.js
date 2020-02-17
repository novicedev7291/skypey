import React from 'react';
import './ChatWindow.css';
import store from '../store';
import Header from './Header';
import Chats from './Chats';
import MessageInput from '../containers/MessageInput';
import _ from 'lodash';

const ChatWindow = ( { activeUserId } ) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const messages = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(messages)} />
            <MessageInput value={typing} />
        </div>
    );
}

export default ChatWindow;