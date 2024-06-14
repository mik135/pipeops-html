
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
      <div className="w-60 border border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Tasks</p>
      </div>

      <div className="w-60 border border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Classes</p>
      </div>

      <div className="w-60 border border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Events</p>
      </div>

      <div className="w-60 border border-solid border-[#33333371] p-2 rounded-lg text-center">
        <h2 className="text-2xl font-bold p-1">0</h2>
        <p className="text-sm text-[#333333] font-serif">Completed</p>
      </div>
    </div>
   </div>

    
   
  </div>
  )
}

export default Dashboard