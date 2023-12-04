import {Button,Container} from '@mui/material';
import { Link } from 'react-router-dom';

const FillDetails = () =>{
    return(
        <Container maxWidth="sm" sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
           <Link to={'/'}> <Button variant='contained' sx={{textAlign:'center'}}>Go Back and Login First!</Button></Link>
        </Container>
    )
}

export default FillDetails;