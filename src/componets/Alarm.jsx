import React, {useContext} from "react";
import {AlertContext} from "./context/AlertContects";

export const Alert = () => {
    const {hide, alert}= useContext(AlertContext);
    const {visible, text, type = 'success'} = alert;
    if (!visible) return null;

    return (

        <div className={`alert alert-${type} alert-dismissible mt-3`} role="alert">
            <button onClick={hide} type="button" className="close" data-dismiss="alert" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <strong>
                {type === "warning" ? 'Warning ' : 'Great'}

            </strong>
            {text}
            {type === "success" && ' was added' }
            {type === "info" && ' was done' }

        </div>
    )
}