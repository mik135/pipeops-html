import React from 'react'
import './App.css'



function Home() {
  return (
    <div>
    <header className='flex justify-between items-center w-full border-b border-solid p-5 m-auto'>
     <h2 className='text-3xl font-sans font-bold tracking-tight cursor-pointer text-[#1f93e0]'>Priory</h2>
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

    <div className='bg-cover w-4/5  m-auto mt-10 p-10 rounded-xl mb-2' style={{backgroundImage: "url('images/pexels-pixabay-159775.jpg')", height: '400px'}}>

    <div className='w-full mt-28'>
        <h2 className='text-white text-5xl font-bold'>Empower your students to learn and collaborate together</h2>
        <p className='text-white font-bold text-xl mb-4'>Piory is the student collaboration platform that helps you build a community of learners wherever they are.</p>

        <div className='flex items-center w-80 justify-between bg-white p-2 rounded-lg'>
            <div className='flex items-center justify-between gap-1'>
                <img src={'images/searchmagnifier.svg'} alt="search bar" />
                <input type="text" name="email" id="enter-email" placeholder='Enter your email' className='border-none'/>
            </div>

            <p className='text-white text-sm bg-[#1f93e0] h-8 border border-solid border-[#1f93e0] rounded-lg w-24 flex justify-center items-center font-bold'>Get Started</p>
        </div>
    </div>
    </div>

    <div className='w-4/5 m-auto mt-10'>
    <h2 className='text-3xl font-serif font-extrabold tracking-tight'>How Students are using Priory</h2>
    <ul className='list-disc list-inside text-[#1f93e0] mt-2 mb-5'>
        <li>Create a classroom to work on group projects</li>
        <li>Chat with classmates and study partners</li>
        <li>Store notes all in one place</li>
        <li>Organise docs by sections</li>
        <li>Work and edit together</li>
    </ul>
    <p className='text-white text-sm bg-[#1f93e0] h-8 border border-solid border-[#1f93e0] rounded-lg w-24 flex justify-center items-center font-bold'>Get Started</p>
    </div>

    <div className='grid w-4/5 grid-cols-4 m-auto mt-10 gap-4'>
      <div className='w-64 cursor-pointer'>
        <img src={'images/class.jpg'} alt="classroom" className='w-64 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Create a Classroom</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Start a space for group projects, study groups, or club activities </p>
      </div>

      <div className='w-64 cursor-pointer'>
        <img src={'images/chatFriends.webp'} alt="classroom" className='w-64 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Chat with your classmates</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Stay in touch with classmates and get help whenever you need it</p>
      </div>

      <div className='w-64 cursor-pointer'>
        <img src={'images/collaborate.jpeg'} alt="classroom" className='w-64 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Start collaborating</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Collaborate on homeworks, group projects,
        presentations and more all in one place </p>
      </div>

      <div className='w-64 cursor-pointer'>
        <img src={'images/workEdit.webp'} alt="classroom" className='w-64 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Organize with sections</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Gather documents and notes of different courses into different sections </p>
      </div>
    </div>

    <div className='w-4/5 m-auto mt-10'>
      <h2 className='text-3xl font-serif font-extrabold tracking-tight text-[#1f93e0] mb-2'>Features that students love</h2>
      <p className='leading-6 text-sm font-semibold mb-2'>Priory has everything you need to build a strong community of learners and succeed in your <br/> courses. All in one place</p>
      <p className='text-white text-sm bg-[#1f93e0] h-8 border border-solid border-[#1f93e0] rounded-lg w-24 flex justify-center items-center font-bold'>Get Started</p>
      
      <div className='grid w-4/5 grid-cols-3 mt-10 gap-44'>
      
        <div className='w-80 cursor-pointer'>
        <img src={'images/leader.jpg'} alt="classroom" className='w-80 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Top Leaderboard</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Gain points as you complete projects and assignment and top the leaderboard</p>
        </div>

        <div className='w-80 cursor-pointer'>
        <img src={'images/scorepercent.jpg'} alt="classroom" className='w-80 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Get scored by AI on projects</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Gather documents and notes of different courses into different sections </p>
        </div>

        <div className='w-80 cursor-pointer'>
        <img src={'images/chatFriends.webp'} alt="classroom" className='w-80 h-44 rounded-lg hover:opacity-80 mb-1'/>
        <h3 className='text-black font-bold text-xl'>Real time live chat</h3>
        <p className='text-sm font-light text-[#333333] font-serif leading-6'>Stay in touch with classmates and get help whenever you need it</p>
        </div>
    </div>
    </div>

    <div className='flex justify-between w-2/4 m-auto mt-20 text-[#333333]'>
      <h2 className='font-sans text-xl'>Privacy Policy</h2>
      <h2 className='font-sans text-xl'>Terms of service</h2>
    
    </div>

    </div>
  )
}

export default Home