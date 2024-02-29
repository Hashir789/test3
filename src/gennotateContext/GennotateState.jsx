import React, { useState } from "react";
import GennotateContext from "./gennotateContext";

const GennotateState = (props) =>{
    const [authentication, setAuthentication] = useState('Login')
  return(
        <GennotateContext.Provider value={{ authentication, setAuthentication }}>
            {props.children}
        </GennotateContext.Provider>
    )
}
export default GennotateState;