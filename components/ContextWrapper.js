import { useState,createContext } from "react";
const HeaderContext = createContext();


export function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)
    const [color, toggleColor] = useState(true)
    return(
        <HeaderContext.Provider value={{menuItems, color, toggleColor}}>
        {children}
        </HeaderContext.Provider>
    )
}
export default HeaderContext


