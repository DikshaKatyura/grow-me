import {useState} from 'react';
import LoginContext from "./Login-context"

const LoginContextProvider = (props:any) => {
    const[login,setLogin] = useState(false);

    function onSetLogin (val:boolean){
        setLogin(val);
    }


    const LoginCtx = {
        login : login,
        onSetLogin : onSetLogin
    }
    return(
        <LoginContext.Provider value={LoginCtx}>{props.children}</LoginContext.Provider>
    )
}

export default LoginContextProvider