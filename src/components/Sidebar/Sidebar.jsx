import { NavLink } from "react-router-dom";
import meteor from '../../assets/meteor.svg'
import pluginpic from '../../assets/plug.svg'
import { useState } from 'react'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const smallWidth = ' w-[10%]'
    const expandedWidth = ' w-[20%]'
    let width = isOpen ? expandedWidth : smallWidth
    let full = isOpen ? "" : "items-center"
  return (
    <>
    
    <aside className={"bg-slate-400 text-white py-5 px-3 h-screen flex flex-col" + width + full} >
      <h1 className={isOpen ? "text-4xl font-extrabold bg-white w-fit py-2 px-2 rounded-xl self-start" : "text-4xl font-extrabold w-fit bg-white py-2 px-2 rounded-xl"}>
        <span className="text-orange-700">ly.</span>
      </h1>
        <div className="flex flex-col text-xl mt-10 gap-5">
            <NavLink to="/dashboard/spaces" className={({ isActive}) => isActive ? "flex items-center gap-5 bg-orange-600 w-full p-4 rounded-xl" : "flex items-center gap-5"}>
                <img src={meteor} alt="icon" className="w-8"/>
                {isOpen ? <p>Spaces</p> : null}
            </NavLink>
            <NavLink to="/plugins" className={({ isActive}) => isActive ? "flex items-center gap-5 bg-orange-600 w-full p-4 rounded-xl" : "flex items-center gap-5 p-4"}>
                <img src={pluginpic} alt="icon" className="w-8" />
                {isOpen ? <p>Plugins</p> : null}
            </NavLink>
        </div>
    </aside>
    <div className="bg-orange-700 w-[50px] h-[50px] p-3 rounded-full mt-5 ml-3 cursor-pointer" onClick={() => setIsOpen(state => !state)}>
        {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>}
    </div>
    </>
  );
}
