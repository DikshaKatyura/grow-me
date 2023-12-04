import { Card,Box,TextField,Button,Typography } from '@mui/material';
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../context/Login-context';

const text = "Name cannot be Empty/include '@' to your email!";

export default function LoginForm() {
    const[name,setName] = useState('');
    const[isNameTouched,setIsNameTouched] = useState(false);
    const[email,setEmail] = useState('');
    const[isEmailTouched,setIsEmailTouched] = useState(false);
    const[phone,setPhone] = useState('');
    const[isPhoneTouched,setIsPhoneTouched] = useState(false);
    const[showHelperText,setShowHelperText] = useState(false);
    const loginCtx = useContext(LoginContext);
    const navigate = useNavigate();


    const changeNameHandler = (event : any) =>{
        setName(event.target.value);
    }
    const nameTouchedHandler = () => {
        setIsNameTouched(!isNameTouched);
    }
    const changeEmailHandler = (event : any) =>{
        setEmail(event.target.value);
    }
    const emailTouchedHandler = () => {
        setIsEmailTouched(!isEmailTouched);
    }
    const changePhoneHandler = (event : any) =>{
        setPhone(event.target.value);
    }
    const phoneTouchedHandler = () => {
        setIsPhoneTouched(!isPhoneTouched);
    }

    const submitFormHandler =(event:any) => {
        event.preventDefault();
        if(name !== '' && email.includes('@')){
            setEmail('');
            setName('');
            setPhone('');
            setIsNameTouched(false);
            setIsEmailTouched(false);
            setIsPhoneTouched(false);
            setShowHelperText(false);
            loginCtx.onSetLogin(true);
            localStorage.setItem('name',name);
      localStorage.setItem('email',email);
      localStorage.setItem('phone',phone);
      localStorage.setItem('login',JSON.stringify(loginCtx.login));
            navigate('tables');
        }else{
            setShowHelperText(!showHelperText);
        }
        
    }

  return (
    <>
    {!loginCtx.login && <Box sx={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <Typography variant='h2' sx={{color:'navy',fontWeight:600}}>LOGIN</Typography>
    <Card variant='outlined' sx={{padding:'1rem'}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: 500,maxWidth : '100%' },
        display:'flex',flexDirection:'column'
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitFormHandler}
    >
        <TextField
        error = {name === '' && isNameTouched}
          id="outlined-required"
          label="Enter Name"
          type="text"
          value={name}
          onChange={changeNameHandler}
          onBlur={nameTouchedHandler}
        />
        <TextField
        error = {email === '' && isEmailTouched}
          id="outlined-password-input"
          label="Enter Email"
          type="email"
          value={email}
          onChange={changeEmailHandler}
          onBlur={emailTouchedHandler}
        />  
        <TextField
        error = {phone === '' && isPhoneTouched}
        helperText={showHelperText ? text : ''}
          id="outlined-number"
          label="Enter Number"
          type="string"
          value ={phone}
          onChange={changePhoneHandler}
          onBlur={phoneTouchedHandler}
        />
<Button type='submit' variant='contained' sx={{display:'flex',margin:'auto'}}>LOGIN </Button>
    </Box>
    </Card>
    </Box>}
    </>
  );
}