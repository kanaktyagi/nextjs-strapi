import { useState,createContext } from "react";
const HeaderContext = createContext()

export function ContextWrapper({children, navigation}) {
    const [menuItems] = useState(navigation)
    return(
        <HeaderContext.Provider value={{menuItems}}>
        {children}
        </HeaderContext.Provider>
    )
}
export default HeaderContext

