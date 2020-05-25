import * as React from "react";
import Overlay from "components/templates/Overlay";

const Main: React.FunctionComponent<{}> = ({ children }) => {
    return (
        <Overlay>
            <h2>Главная</h2>
            { children }
        </Overlay>
    )
};

export default Main;