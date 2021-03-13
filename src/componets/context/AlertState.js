import React, {useReducer} from "react";
import {AlertContext} from "./AlertContects";
import {AlertReducer} from "./AlertReducer";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, {visible: false});

    const show = (text) => {
        console.log(text, 'text')
        dispatch({
            type: 'show',
            payload: text
        })
    }

    const hide = () => {
        dispatch({
            type: 'hide'
        })
    }
    return (
        <AlertContext.Provider value={{
            show,
            hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}