import { Typography, Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import './auth.css'

const Login = () => {

  const redTheme = createTheme({ palette: { primary:{
    main:  purple[900]}
  } });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRemberme] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  console.log("email: " + email + "\npassword: " + password + "\nremberme: " + rememberme);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
    <Header />
    <div className='select-learner'>
    <div>
		<h1 className='font-black text-4xl'>Get started with smartle</h1>
		<p className = 'text-stone-600'>Don't have an account Signup now !!</p>
		</div>
      {/* <Typography variant='h4' fontWeight={"700"}>Get started with smartle</Typography> */}
      <p className='text-center md:text-left text-xl md:text-4xl mt-4 md:mt-8 text-stone-600'>
            Login to your Account
          </p>
      <Typography fontSize={"14px"}>Complete your learning journey!</Typography>
      <Box className =  'form-class' width={"40%"} style={{backgroundColor: "#F9EDF5", borderRadius: "5px", marginTop: "10px", color: "#917EBD"}}>
        <form onSubmit={(e) => handleSubmit(e)} >
          <Box style={{width: "80%", margin: "auto", paddingTop: "10px"}}>
            <Box style={{marginTop: "20px"}}>
              <label style={{marginTop: "100px"}}>Email</label>
            </Box>
            <input type={"email"} 
             placeholder="Enter your email"
             className = 'form-input'
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{padding: "8px", width: "100%", borderRadius: "3px", marginBottom: "20px"}}></input>
          </Box>
         <Box style={{width: "80%", margin: "auto"}}>
           <div>
            <label>Password</label>
           </div>
          <input 
          className = 'form-input'
            type={"password"}
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{padding: "8px", width: "100%", borderRadius: "3px"}}></input>
         </Box>
         <Box style={{width: "80%", margin: "auto", marginTop: "10px", marginBottom: "10px"}}>
         <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box>
                <input type={"checkbox"} onChange={() => setRemberme(!rememberme)} />
                <label style={{marginLeft: "5px"}}>Remember Me</label>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box textAlign={"right"}><Typography >Forgot Password?</Typography></Box>
            </Grid>
          </Grid>
         </Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center"}}>
            <Link to={"/"} >
              <ThemeProvider theme={redTheme}>
                <Button className = 'auth-button' variant="contained" style={{width:"100%", marginTop: "20px", backgroundColor : '#917EBD'}}>
                    Login
                </Button>
              </ThemeProvider>
            </Link>
          </Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center", marginTop: "20px", paddingBottom: "20px"}}>
          <Link to={"/signup"}                            
              >
                <ThemeProvider theme={redTheme}>
              <Button className = 'auth-button' style={{width:"100%", color : '#917EBD', borderColor : '#917EBD'}} variant="outlined">
                  Signup
              </Button>
              </ThemeProvider>
        </Link>
        </Box>
        </form>
      </Box>
    </div>
    <Footer />
    </>
  );
};

export default Login;