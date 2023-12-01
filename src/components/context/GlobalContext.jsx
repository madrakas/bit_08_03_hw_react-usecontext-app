import { createContext, useState } from 'react';

export const initialContext = {
    luckyNumber: 1,
    layout: 'PubLayout',
    updateLayout: () => {},
    updateLuckyNumber: () => {},
};

export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
    const [luckyNumber, setLuckyNumber] = useState(initialContext.luckyNumber);
    const [layout, setlayout] = useState(initialContext.layout);
    
    function updateLuckyNumber(newNumber) {
        setLuckyNumber(newNumber)
    }

    function updateLayout(newLayout) {
        setlayout(newLayout)
    }
    
    const value = {
        luckyNumber,
        layout,
        updateLayout,
        updateLuckyNumber,
    };

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}