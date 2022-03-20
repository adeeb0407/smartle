import { Box, Button, Avatar, Typography } from '@mui/material';
import React, { useState } from "react";
import AuthHeader from '../components/organisms/AuthHeader';
import PopOutCircle from '../components/atom/PopOutCircle';
import { EnterpriseBannerGirl as BImg } from '../util/resources';
import API from '../redux/api/api';
import { Axios } from 'axios';

const VerifyingUser = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element:any, index: any) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <AuthHeader />
            <Box className="row">
                <Box className="col text-center">
                    <Typography variant='h4' sx={{marginBottom: "20px", marginTop:"30px"}} fontWeight="700">Email Verifcation</Typography>
                        <Box className="hidden md:block " sx={{margin: "auto"}}>
                        <PopOutCircle image={BImg}
                            circleBg='bg-contrastAccent-200' imageTop='14px' imageLeft='10px' borderColor='blue' imageSize="2.5" />
                        </Box>
                        <Box className="block md:hidden" sx={{width: "50%", margin: "auto", textAlign: "center"}}>
                            <PopOutCircle image={BImg} circleBg='bg-contrastAccent-200' imagePos='14px' imageTop='10px' imageLeft='0px' imageOverflow='hiden' borderColor='blue' imageSize="2" />
                        </Box>
                    <Typography variant='h6' sx={{marginTop: "100px", marginLeft: "10px", marginRight: "1opx", marginBottom: "20px"}}>Enter the verification code we just sent you on your email address</Typography>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength={1}
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <Typography>OTP Entered - {otp.join("")}</Typography>
                    <Typography>
                        
                            <Button
                                className = 'auth-button' 
                                variant="outlined" 
                                style={{
                                    width:"200px", 
                                    marginTop: "20px", 
                                    background: '#917EBD', 
                                    borderColor : '#917EBD', 
                                    color: 'white', 
                                    marginRight: "20px"
                                    }} 
                                onClick={e => setOtp([...otp.map(v => "")])}
                            >
                                Clear
                        </Button>
                        <Button
                            className = 'auth-button' 
                            variant="outlined" 
                            style={{width:"200px", marginTop: "20px", background: '#917EBD', borderColor : '#917EBD', color: 'white'}} 
                            onClick={e =>
                                {
                                    console.log(otp.join(""));
                                    alert("Entered OTP is " + otp.join(""));
                                }
                            }
                        >
                            Verify OTP
                        </Button>
            
                        
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default VerifyingUser;