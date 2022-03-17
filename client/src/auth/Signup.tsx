import { Typography, Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

const Signup = () => {

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
    <Box width={"90%"} margin="auto" marginBottom={"20px"}>
      <Typography variant='h4' fontWeight={"700"}>Get started with smartle</Typography>
      <Typography variant='h5' mt={"30px"} mb="5px" fontWeight={"700"}>Login to your account</Typography>
      <Typography fontSize={"14px"}>Complete your learning journey</Typography>
      <Box width={"40%"} style={{backgroundColor: "#F9EDF5", borderRadius: "5px", marginTop: "10px", color: "#917EBD"}}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box style={{width: "80%", margin: "auto", paddingTop: "10px"}}>
            <Box style={{marginTop: "20px"}}>
              <label style={{marginTop: "100px"}}>Email</label>
            </Box>
            <input type={"email"} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{padding: "8px", width: "100%", borderRadius: "3px", marginBottom: "20px"}}></input>
          </Box>
         <Box style={{width: "80%", margin: "auto"}}>
           <div>
            <label>Password</label>
           </div>
          <input 
            type={"password"}
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
            <Link to={"/login"} >
              <ThemeProvider theme={redTheme}>
                <Button  variant="contained" style={{width:"100%", marginTop: "20px"}} color="primary">
                    Login
                </Button>
              </ThemeProvider>
            </Link>
          </Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center", marginTop: "20px", paddingBottom: "20px"}}>
          <Link to={"/signup"}                            
              >
                <ThemeProvider theme={redTheme}>
              <Button style={{width:"100%"}} variant="outlined" color="primary">
                  Signup
              </Button>
              </ThemeProvider>
        </Link>
        </Box>
        </form>
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default Signup;