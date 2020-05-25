import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import {RootState} from "../index";

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >

import {
    SEND_MESSAGE,
    SEND_MESSAGE_ERROR,
    SEND_MESSAGE_SUCCESS,
    Message,
    ChatActionTypes
} from "./types";

export const thunkSendMessage = (
    message: string
): AppThunk => async dispatch => {
    dispatch(sendMessage());
    dispatch(
        sendMessageSuccess({
            text: 'Тестовое сообщение',
            user: 'Тестовый пользовтаель',
            timestamp: new Date().getTime()
        })
    )
};

export function sendMessage(): ChatActionTypes {
    return {
        type: SEND_MESSAGE,
    }
}

export function sendMessageSuccess(message: Message): ChatActionTypes {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: message
    }
}

export function sendMessageError(): ChatActionTypes {
    return {
        type: SEND_MESSAGE_ERROR,
    }
}