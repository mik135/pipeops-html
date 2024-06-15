
function Dashboard() {
  return (
    <div className='w-full'>
    <header className='flex justify-between items-center w-full border-b border-solid p-4 m-auto'>
    <h2 className='text-3xl font-sans font-bold tracking-tight text-[#1f93e0] cursor-pointer'>Priory</h2>
    <nav className='flex justify-around items-center gap-10 cursor-pointer'>
    <p className="font-semibold text-lg tracking-tight">Explore</p>
    <p className="font-semibold text-lg tracking-tight">Spaces</p>
    <p className="font-semibold text-lg tracking-tight">Schedule</p>
    <p className="font-semibold text-lg tracking-tight">Plugins</p>
    <div className="flex justify-around items-center gap-3">
        <div className="w-8 rounded-xl p-1 bg-[#33333334] flex justify-center items-center"><img src={'images/icons8-notification.svg'} alt="notification" /></div>
        <div className="w-8 rounded-xl p-1 bg-[#33333334] flex justify-center items-center"><img src={'images/icons8-bubble-chat-20.png'} alt="user" /></div>
        <div className="w-8 rounded-xl p-1 bg-[#33333334] flex justify-center items-center"><img src={'images/icons8-user-20.png'} alt="user" /></div>
      </div>
    </nav>
   </header>

   <div className="w-4/5 m-auto mt-10">
    <div className="flex justify-between">
      <h2 className="text-4xl font-sans font-bold">Hello there, <span className="text-[#1f93e0]">User</span></h2>
      <p className="w-20 rounded-lg p-1 bg-[#33333334] flex justify-center items-center font-sans font-semibold">View all</p>
    </div>

    <div className="grid grid-cols-4 mt-5 gap-5">
      <div className="w-60 border-4 border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Tasks</p>
      </div>

      <div className="w-60 border-4 border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Classes</p>
      </div>

      <div className="w-60 border-4 border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Events</p>
      </div>

      <div className="w-60 border-4 border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Completed</p>
      </div>
    </div>
   </div>

    <div className="w-11/12 flex gap-6 m-auto mt-10">
    <div className="w-96 border border-solid border-[#1f93e0] bg-[#1f93e0] rounded-md text-center p-3 h-80">
      <h2 className="text-3xl font-sans tracking-tighter pb-4 text-[#fff] font-semibold">Recent Activity ⚒</h2>
      <p className="text-[#33333371] text-sm font-sans">No recent activity create a classroom and start collaborating and working on projects with friends</p>
    </div>

    <div className="w-3/5 flex justify-center items-center border border-solid border-[#33333371] gap-5 rounded-md text-center p-3 h-72">
      <div className="w-80 text-center border border-solid border-[#1f93e0] p-2 rounded-lg h-60 cursor-pointer">
        <div className="flex justify-center items-center"><img src={'images/icons8-plus-96.png'} alt="create new class" className="h-40"/></div>
        <h2 className="text-2xl font-bold font-serif text-[#1f93e0] tracking-tight">Create a new Classroom</h2>
      </div>

      <div className="w-80 text-center border border-solid border-[#1DCF39] p-2 rounded-lg h-60 cursor-pointer">
        <div className="flex justify-center items-center"><img src={'images/icons8-join-96.png'} alt="create new class" className="h-40"/></div>
        <h2 className="text-2xl font-bold font-serif text-[#1DCF39] tracking-tight">Join an existing Classroom</h2>
      </div>
    </div>  
    </div>

    <div className='flex justify-center gap-28 w-2/4 m-auto mt-20 text-[#333333]'>
      <h2 className='font-sans text-xl'>Privacy Policy</h2>
      <h2 className='font-sans text-xl'>Terms of service</h2>
    
    </div>


  </div>
  )
}

export default Dashboard