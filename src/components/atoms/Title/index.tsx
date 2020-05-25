import * as React from "react";
import { TitleProps } from "./interfaces";

const Title: React.FunctionComponent<TitleProps> = ({ text }) => {
    return (
        <h1>{ text }</h1>
    )
};

export default Title;