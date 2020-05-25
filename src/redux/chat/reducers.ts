import {SEND_MESSAGE, SEND_MESSAGE_ERROR, SEND_MESSAGE_SUCCESS, Message, ChatActionTypes, ChatState } from "./types";

const defaultState: ChatState = {
    messages: [],
    isLoading: true,
    isLoaded: false,
    isError: false
};

export function chatReducer(
    state = defaultState,
    action: ChatActionTypes
): ChatState {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case SEND_MESSAGE_SUCCESS: {
            console.log('123');
            return {
                ...state,
                isLoading: false,
                messages: [...state.messages, action.payload]
            }
        }

        case SEND_MESSAGE_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }

        default:
            return state
    }
}