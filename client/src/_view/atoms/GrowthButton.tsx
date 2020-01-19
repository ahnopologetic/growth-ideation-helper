import React from "react"
import { Button } from "@class101/ui"

type Props = {
    buttonText: string;
    handleClick: () => void;

}
export const GrowthButton = ({ buttonText, handleClick }: Props) => {
    return (
        <Button onClick={handleClick}>{buttonText}</Button>
    )
}