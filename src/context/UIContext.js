import { createContext, useState } from "react";


export const UIContext = createContext()

export const UIProvider = ({children}) => {

    const [loading, setLoading] = useState(false)
    const [cardHover, setCardHover] = useState(true);

    return (
        <UIContext.Provider value={{
            loading,
            setLoading,
            cardHover,
            setCardHover
        }}>
            {children}
        </UIContext.Provider>
    )
}