import React from 'react'
import loginpic from '../assets/loginpic.jpg'
import googlepic from '../assets/google.svg'
import LoginDivider from '../components/LoginDivider'
import { useState } from 'react'

function LoginPage() {
    const [focused, setFocused] = useState(false)

    function handleColorChange() {
        setFocused(state => !state)
    }

  return (
    <main className='flex flex-col items-center gap-10'>
        <h1 className='text-4xl mx-10 mt-5 mb-2 self-start'>Space<span className='text-orange-700'>ly</span></h1>
        <div className='shadow-2xl flex flex-col w-[90%] sm:w-[450px] p-10 rounded-md'>
            <h2 className='text-4xl font-semibold'>Sign in</h2>
            <p className='mb-5 text-lg'>Time to get in the zone.</p>
            <input type="email" name="" id="" className='text-xl p-2 rounded-md mb-5 border-[2px] outline-2 outline-orange-300' placeholder='Email'/>
            <input type="password" name="" id="" className='text-xl p-2 rounded-md mb-5 border-[2px] outline-2 outline-orange-300' placeholder='Password' />

            <h4 className='text-orange-700 font-medium text-lg'>Forgot password?</h4>

            <button className='rounded-3xl mt-5 h-[50px] bg-orange-700 text-white hover:bg-orange-800 focus:bg-white border-orange-700 border-[2px] focus:text-orange-700 font-medium'>Sign in</button>
            <LoginDivider />
            <button className='w-full border-[2px] flex justify-center items-center h-[50px] gap-3 rounded-3xl font-medium focus:text-green-300 focus:border-green-400' onClick={handleColorChange}>
                <img src={googlepic} alt="google logo" className="w-7" />Sign in with Google</button>
        </div>
        <h3 className='text-lg font-medium'>New to Spacely? <span className='text-orange-700'>Join Now</span></h3>
    </main>
  )
}

export default LoginPage