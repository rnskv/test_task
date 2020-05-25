import * as React from "react";
import Title from "../../atoms/Title";

const Overlay: React.FunctionComponent<{}> = ({ children }) => {
    return (
        <div>
            <Title text="Тестовое задание. Чат." />
            { children }
        </div>
    )
};

export default Overlay;