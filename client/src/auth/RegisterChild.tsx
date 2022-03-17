import React from 'react'
import Header from '../components/organisms/Header';
import './auth.css'

function RegisterChild() {
  return (
	  <>
	  <Header/>
	<div className = 'select-learner'>
		
		<div>
			<h1 className='font-black text-4xl'>Please Setup Your Child's Account </h1>
			<p className = 'text-stone-600'>Already Have an Account, Login in now!</p>
		</div>
		
	</div>

	</>
  )
}

export default RegisterChild