import { ReactNode } from "react";
import "./Title.module.css";

interface Props {
    children: ReactNode;
}


export const Title = ({children}: Props) => {
    return <h1 className="title">{children}</h1>;
}