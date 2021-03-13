import React, {useContext} from "react";
import {AlertContext} from "./context/AlertContects";

export const Alert = () => {
    const {show, hide, alert}= useContext(AlertContext);
    const {visible, text} = alert;

    if (!visible) return null;


    return (
        <div className="alert alert-warning alert-dismissible mt-3" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong> {text} was added
        </div>
    )
}