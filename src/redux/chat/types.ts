export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';

export interface Action {
    type: string,
    payload?: any
}

export interface Message {
    user: string,
    text: string,
    timestamp: number,
}

export interface ChatState {
    messages: Message[]
    isLoading: boolean,
    isLoaded: boolean,
    isError: boolean,
}

export interface SendMessageAction extends Action {
    type: typeof SEND_MESSAGE
}

export interface SendMessageSuccessAction extends Action {
    type: typeof SEND_MESSAGE_SUCCESS,
    payload: Message
}

export interface SendMessageErrorAction extends Action {
    type: typeof SEND_MESSAGE_ERROR,
}

export type ChatActionTypes =
    SendMessageAction |
    SendMessageErrorAction |
    SendMessageSuccessAction
