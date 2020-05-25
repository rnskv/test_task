import {useDispatch, useSelector} from "react-redux";
import {messagesCountSelector, messagesSelector, statusesSelector} from "./selectors";
import {useActions} from "../../utils/hooks/useActions";
import * as actions from './actions';

export const useChatStatuses = () => {
    return useSelector(statusesSelector)
};

export const useChatMessages = () => {
    return useSelector(messagesSelector)
};

export const useChatMessagesCount = () => {
    return useSelector(messagesCountSelector)
};

export const useChatActions = () => {
    return useActions(actions);
};