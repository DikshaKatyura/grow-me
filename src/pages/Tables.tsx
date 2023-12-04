import {useContext} from 'react';
import TableOne from "../components/TableOne";
import TableTwo from "../components/TableTwo";
import LoginContext from "../context/Login-context";
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';
import FillDetails from './FillDetails';
 function AllTables() {
    const loginCtx = useContext(LoginContext);

    const LogoutHandler =() =>{
        loginCtx.onSetLogin(false);
        localStorage.setItem('login',JSON.stringify(loginCtx.login));
    }
    return(
        <>
        <Link to={'/'}><Button onClick={LogoutHandler} variant='contained' sx={{float:'right',marginRight:'2rem'}}>Logout</Button></Link>
        <TableOne/>
        <TableTwo/>
        </>
    )
}

const Tables = () =>{
    const loginCtx = useContext(LoginContext);


return(
    <>
    {loginCtx.login === true && localStorage.getItem('login') === 'false' && <AllTables/>}
    {loginCtx.login === false && localStorage.getItem('login') === 'true' && <FillDetails/>}
    </>
)
}

export default Tables;