import mysql from 'mysql';
import express, {Request, Response} from 'express';
import db from '../config/config';
import 'cross-fetch/polyfill';
import {
	CognitoUserPool,
	CognitoUserAttribute,
	AuthenticationDetails,
	CognitoUser,
} from 'amazon-cognito-identity-js';


import * as AWS from 'aws-sdk/global';

const poolData : any = {
	UserPoolId : 'ap-south-1_aFlE9qxGz',
	ClientId : '7trqouonoof0uidoq1psmqbohh'
}


const userPool: any = new CognitoUserPool(poolData);

export const signUp = ((req: Request, res: Response) => {

	const {email, name, password} = req.body

	let attributeList = [];

	const emailData: any = {
		Name : 'email',
		Value : email
	}

	const nameData : any = {
		Name : 'name',
		Value : name
	} 
	
	const emailAttributes = new CognitoUserAttribute(emailData);
	const nameAttributes = new CognitoUserAttribute(nameData);

	attributeList.push(emailAttributes);
	attributeList.push(nameAttributes);

	userPool.signUp(email, password, attributeList, null, function(
		err : any,
		result : any
	) {
		if (err) {
			console.log(err.message || JSON.stringify(err));
			res.send(err.message || JSON.stringify(err));
			return;
		}
		res.send({data : result.user.username, res})
		var cognitoUser = result.user;
	});

});


export const confrimCode = (req: Request, res: Response) => {

	const {email, code} = req.body
	
let userData = {
	Username: email,
	Pool: userPool,
};
// var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
//     cognitoUser.confirmRegistration(code, true, function(err : any, result : any) {
//         if (err) {
//             alert(err);
//             return;
//         }
//         console.log('call result: ' + result);
//     });
 }

export const login = (req: Request, res: Response) => {

	 const {email, password} = req.body

	const loginDetails : any = {
		Username : email,
		Password : password
	}

	const authenticationDetails : any = new AuthenticationDetails(loginDetails)

	const userDetails = {
		Username: email,
		Pool: userPool,
	};

	const cognitoUser = new CognitoUser(userDetails)

	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: result => {
			var accessToken = result.getAccessToken().getJwtToken();
			res.send(result)
		},
	
		onFailure: function(err) {
			console.log(err.message || JSON.stringify(err));
			res.send(err.message || JSON.stringify(err));
		},
	});

}
