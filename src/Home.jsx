import React from 'react'
import './App.css'



function Home() {
  return (
    <div>
    <header className='flex justify-between items-center w-full border-b border-solid p-5 m-auto'>
     <h2 className='text-3xl font-sans font-bold tracking-tight cursor-pointer'>Priory</h2>
     <nav>
        <ul className="flex justify-around gap-6 font-sans font-bold items-center cursor-pointer">
            <li>For Students</li>
            <li>For Instructors</li>
            <li>Help</li>
            <li className='text-white bg-[#1f93e0] h-10 border border-solid border-#1f93e0 rounded-xl w-24 flex justify-center items-center'>Sign In</li>
            <li className='text-black bg-[#e8eef3] h-10 border border-solid border-#e8eef3 rounded-xl w-28 flex justify-center items-center'>Get Started</li>
        </ul>
     </nav>
    </header>

    <div className='bg-cover w-3/5  m-auto p-10 rounded-xl' style={{backgroundImage: "url('images/pexels-pixabay-159775.jpg')", height: '400px'}}>

    <div className='w-full mt-36'>
        <h2 className='text-white text-3xl font-bold'>Empower your students to learn and collaborate together</h2>
        <p className='text-white font-bold'>Piory is the student collaboration platform that helps you build a community of learners wherever they are.</p>

        <div className='flex items-center w-80 justify-between bg-white p-2 rounded-lg'>
            <div className='flex items-center justify-between gap-1'>
                <img src={'images/searchmagnifier.svg'} alt="search bar" />
                <input type="text" name="email" id="enter-email" placeholder='Enter your email' className=''/>
            </div>

            <p className='text-white text-sm bg-[#1f93e0] h-8 border border-solid border-[#1f93e0] rounded-lg w-24 flex justify-center items-center font-bold'>Get Started</p>
        </div>
    </div>

    </div>

    </div>
  )
}

export default Home