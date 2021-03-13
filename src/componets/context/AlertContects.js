import React, {createContext} from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const AlertContext = createContext({visibile: false, text: ''})