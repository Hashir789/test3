import React, { useState } from "react";
import GennotateContext from "./gennotateContext";

const GennotateState = (props) =>{
    const [authentication, setAuthentication] = useState('Login')
    const [seeLoginPassword, setSeeLoginPassword] = useState(true)
    const [seeSignUpPassword, setSeeSignUpPassword] = useState(true)
    const [seeSignUpConfirmPassword, setSeeSignUpConfirmPassword] = useState(true)
  return(
        <GennotateContext.Provider value={{ authentication, setAuthentication, seeLoginPassword, setSeeLoginPassword, seeSignUpPassword, setSeeSignUpPassword, seeSignUpConfirmPassword, setSeeSignUpConfirmPassword }}>
            {props.children}
        </GennotateContext.Provider>
    )
}
export default GennotateState;