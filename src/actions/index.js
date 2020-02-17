import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types'

export const setTypingValue = value => {
    return {
      type: SET_TYPING_VALUE,
      payload: value  
    };
};

export const setActiveUserId = user_id => {
    return {
        type: SET_ACTIVE_USER_ID,
        payload: user_id
    };
};

export const sendMessage = (message, user_id) => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message,
            user_id
        }
    };
};