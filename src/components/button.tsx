import React, { FC, MouseEventHandler } from "react"

interface IProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonName: string;
}

export const Button: FC<IProps> = ({onClick, buttonName}) => {
    return (
        <button onClick={onClick}>{buttonName}</button>
    )
}
