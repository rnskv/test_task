import {RootState} from "../index";
import {createSelector} from "reselect";

export const messagesSelector = (state: RootState) => state.chat.messages;

export const statusesSelector = (state: RootState) => ({
    isLoading: state.chat.isLoading,
    isLoaded: state.chat.isLoading,
    isError: state.chat.isError
});

export const messagesCountSelector = createSelector(
    messagesSelector,
    (messages) => messages.length
);