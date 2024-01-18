import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navmenu } from '../constant';
import { FaHome, FaBars } from 'react-icons/fa';
import IsHomeContext from '../context';
import { IoMdClose } from "react-icons/io";
const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const {setIsHome} = useContext(IsHomeContext)
  const multipleFun = ()=>{
    setIsHome(false)
    setShowMenu(false)
  }
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-16">
        {/* Left Side - Home Icon */}
        <div className="h-full flex items-center">
          <NavLink
            to="/"
            onClick={(e)=>setIsHome(true)}
            className={({isActive})=>` ${isActive?"bg-green-600 text-gray-100":"hover:text-green-500"}
            h-full flex items-center px-4
      `}
          >
            <FaHome className="text-2xl" />
            
          </NavLink>
        </div>

        {/* Right Side - Hamburger Icon */}
        <div className="flex items-center">
          <div className="lg:hidden pr-4"  onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoMdClose  className="text-gray-800 cursor-pointer text-3xl"/> :  <FaBars className="text-gray-800 cursor-pointer text-2xl"/>}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-24 right-0 bg-white w-full h-screen ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col">
            {Navmenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({isActive})=>`
                  border
                  text-sm py-4 flex items-center duration-200
                     px-4 ${isActive?" bg-green-600 text-gray-200":"hover:text-green-500"}
                  `}
                  onClick={multipleFun}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center lg:h-full">
          <ul className="flex font-medium text-sm h-full items-center">
            {Navmenu.map((item) => (
              <li key={item.id} className='h-full flex items-center'>
                <NavLink
                  to={item.link}
                  onClick={(e)=>setIsHome(false)}
                  className={({isActive})=>`
                  h-full flex items-center duration-200
                     px-4 ${isActive?" bg-green-600 text-gray-200":"hover:text-green-500"}
                  `}
                >
                  
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
