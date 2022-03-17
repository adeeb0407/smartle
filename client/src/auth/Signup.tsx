import { Typography, Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import './auth.css'

const Signup = () => {

  const redTheme = createTheme({ palette: { primary:{
    main:  purple[900]}
  } });

  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [rememberme, setRemberme] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  console.log("name: " + name + "\nemail: " + email + "\npassword: " + password + "\nremberme: " + rememberme);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
    <Header />
    <div className = 'select-learner'>
    <h1 className='font-black text-4xl'>Get started with smartle</h1>
		<p className = 'text-stone-600'>have an account Login now !!</p>
    <p className='text-center md:text-left text-xl md:text-4xl mt-4 md:mt-8 text-stone-600'>
            Create Your Account
          </p>
      <Typography fontSize={"14px"}>Explore the joy of learning</Typography>
      
      <Box width={"40%"} className = 'form-class' style={{backgroundColor: "#F9EDF5", borderRadius: "5px", marginTop: "10px", color: "#917EBD"}}>
        <form onSubmit={(e) => handleSubmit(e)}>
        <Box style={{width: "80%", margin: "auto", paddingTop: "10px"}}>
            <Box style={{marginTop: "20px"}}>
              <label style={{marginTop: "100px"}}>Name</label>
            </Box>
            <input type={"text"} 
             className = 'form-input'
             placeholder="Enter your Name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={{padding: "8px", width: "100%", borderRadius: "3px"}}></input>
          </Box>
          <Box style={{width: "80%", margin: "auto"}}>
            <Box style={{marginTop: "20px"}}>
              <label style={{marginTop: "100px"}}>Email</label>
            </Box>
            <input type={"email"} 
             className = 'form-input'
             placeholder="Enter your Email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{padding: "8px", width: "100%", borderRadius: "3px", marginBottom: "20px"}}></input>
          </Box>
         <Box style={{width: "80%", margin: "auto"}}>
           <div>
            <label>Create Password</label>
           </div>
          <input 
            type={"password"}
            className = 'form-input'
            placeholder="Enter Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{padding: "8px", width: "100%", borderRadius: "3px"}}></input>
         </Box>
         <Box style={{width: "80%", margin: "auto", marginTop:"20px"}}>
           <div>
            <label>Confirm Password</label>
           </div>
          <input 
          placeholder="Confirm Password"
            type={"password"}
            className = 'form-input'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{padding: "8px", width: "100%", borderRadius: "3px"}}></input>
         </Box>
         <Box style={{width: "80%", margin: "auto", textAlign:"center", marginTop: "20px"}}>
          <Link to={"/"}                            
              >
                <ThemeProvider theme={redTheme}>
              <Button className = 'auth-button' style={{width:"100%", backgroundColor : '#917EBD'}} variant="contained">
                  Signup
              </Button>
              </ThemeProvider>
        </Link>
        </Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center", paddingBottom: "20px"}}>
            <Link to={"/login"} >
              <ThemeProvider theme={redTheme}>
                <Button className = 'auth-button'  variant="outlined" style={{width:"100%", marginTop: "20px", color : '#917EBD', borderColor : '#917EBD'}} color="primary">
                    Login
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

export default Signup;