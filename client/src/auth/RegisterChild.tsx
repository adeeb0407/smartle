import React, {useState} from 'react'
import { Typography, Box, Button, Grid } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { purple } from '@mui/material/colors';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './auth.css'

function RegisterChild() {

	const redTheme = createTheme({ palette: { primary:{
		main:  purple[900]}
	  } });

	  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

	  const handleChange = (newValue: any) => {
		setValue(newValue);
	  };
	
	  const [childName, setChildName] = useState("");
	  const [age, setAge] = useState('');
	  const [password, setPassword] = useState("");
	  const [rememberme, setRemberme] = useState(false);
	
	
	  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	  }

	  
  return (
	  <>
	  <Header/>
	<div className = 'select-learner' style = {{fontFamily: 'Nunito Sans'}}>
		
		<div>
			<h1 className='font-black text-4xl'>Please Setup Your Child's Account </h1>
			<p className = 'text-stone-600'>Already Have an Account, Login in now!</p>
		</div>
		<p className='text-center md:text-left text-xl md:text-4xl mt-4 md:mt-8 text-stone-600'>
            Child Account Details
          </p>
      <Typography fontSize={"14px"}>Exlore the joy of journey!</Typography>
		<Box className =  'form-class' width={"40%"} style={{backgroundColor: "#F9EDF5", borderRadius: "5px", marginTop: "10px", color: "#917EBD"}}>
        <form onSubmit={(e) => handleSubmit(e)} >
          <Box style={{width: "80%", margin: "auto", paddingTop: "10px"}}>
            <Box style={{marginTop: "20px"}}>
              <label style={{marginTop: "100px"}}>Child Name</label>
            </Box>
            <input type={"text"} 
             placeholder="Enter your Child Name"
             className = 'form-input'
              value={childName} 
              onChange={(e) => setChildName(e.target.value)} 
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
            style={{padding: "8px", width: "100%", borderRadius: "3px"}} />
         </Box>
        <Box className = 'childacc-inline' style={{width: "80%", margin: "auto",  paddingTop: "10px"}}>
		<input 
          className = 'form-input'
            type={"number"}
            placeholder="Age"
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            style={{padding: "8px", width: "100%", borderRadius: "3px", marginRight: '10px'}} />

			<LocalizationProvider dateAdapter={AdapterDateFns}>
		        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
		  renderInput={(params) => <TextField {...params}  className = 'form-input'/>}
        />
		</LocalizationProvider>
		</Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center"}}>
            <Link to={"/"} >
              <ThemeProvider theme={redTheme}>
                <Button className = 'auth-button' variant="contained" style={{width:"100%", marginTop: "20px", backgroundColor : '#917EBD'}}>
                    Add Child
                </Button>
              </ThemeProvider>
            </Link>
          </Box>
          <Box style={{width: "80%", margin: "auto", textAlign:"center", marginTop: "20px", paddingBottom: "20px"}}>
          <Link to={"/signup"}                            
              >
                <ThemeProvider theme={redTheme}>
              <Button className = 'auth-button' style={{width:"100%", color : '#917EBD', borderColor : '#917EBD'}} variant="outlined">
                  Setup Account
              </Button>
              </ThemeProvider>
        </Link>
        </Box>
        </form>
      </Box>
	</div>
	<Footer/>
	</>
  )
}

export default RegisterChild