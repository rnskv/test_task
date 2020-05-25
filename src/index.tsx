import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import Main from "components/pages/Main";
import {store} from "./redux";

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root")
);