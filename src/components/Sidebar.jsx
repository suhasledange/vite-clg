import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SideMenu } from '../constant';
import { IoIosArrowForward } from "react-icons/io";
import { logo } from '../assets';
import IsHomeContext from '../context';

const Sidebar = () => {

  const {setIsHome} = useContext(IsHomeContext)
  const handleHome = (text)=>{
    if (text === 'Home') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }

  return (
    <div className=" lg:w-72 w-96">
      <div className="space-y-8">
        <div className='bg-white border border-gray-300 rounded-md'>
        <ul className=''>
            <h1 className='py-2 px-3 rounded-t-md bg-red-600 text-gray-100 font-medium text-lg'>Main Menu</h1>
        {SideMenu.map((item) => (
              <li key={item.id} className='text-sm'>
                <NavLink 
                  to={item.link}
                  className={({isActive})=>`px-3 py-[0.6rem] border-t border-gray-300 duration-200 h-full flex items-center justify-start text-gray-800 ${isActive ?"bg-gray-100 text-gray-800":"hover:text-gray-500"}`}
                  onClick={()=>{
                    handleHome(item.text);
                  }}
                >
                <div className='flex items-center gap-1 text-md'>
                    <IoIosArrowForward/>
                  {item.text}
                </div>
                </NavLink>
              </li>
            ))}
        </ul>
        </div>
        <div className='flex items-center justify-center'>
            <img className='lg:h-40 h-64 object-cover' src={logo} alt='X'/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
