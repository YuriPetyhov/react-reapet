import React, {useReducer} from "react";
import {AlertContext} from "./AlertContects";
import {AlertReducer} from "./AlertReducer";

export const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, {visible: false});

    const show = (text) => {
        dispatch({
            type: 'show',
            payload: {text: text, type: 'success'}
        })
    }

    const hide = () => {
        dispatch({
            type: 'hide',
        })
    }

    const done = (text) => {
        dispatch({
            type: 'done',
            payload: {text: text, type: 'info'}
        })
    }
    return (
        <AlertContext.Provider value={{
            show,
            hide,
            done,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}