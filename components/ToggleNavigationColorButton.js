import HeaderContext from "./ContextWrapper";
import { useContext } from "react";

function ToggleNavigationColorButton() {
    const {color,toggleColor} = useContext(HeaderContext)
    return (
        <button onClick={() => toggleColor(!color)}>
        Toggle Navigation Color
        </button>
    )
}

export default ToggleNavigationColorButton