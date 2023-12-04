import { createContext } from "react";

 const LoginContext = createContext({
    login : false,
    onSetLogin : (_val:boolean) =>{}
});

export default LoginContext;