import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navmenu } from '../constant';
import { FaHome, FaBars } from 'react-icons/fa';
import IsHomeContext from '../context';

const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const {setIsHome} = useContext(IsHomeContext)
  const multipleFun = ()=>{
    setIsHome(false)
    setShowMenu(false)
  }
  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-16">
        {/* Left Side - Home Icon */}
        <div className="h-full flex items-center">
          <NavLink
            to="/"
            onClick={(e)=>setIsHome(true)}
            className={({isActive})=>` ${isActive?"bg-red-600 text-gray-100":"hover:text-red-500"}
            h-full flex items-center px-4
      `}
          >
            <FaHome className="text-2xl" />
          </NavLink>
        </div>

        {/* Right Side - Hamburger Icon */}
        <div className="flex items-center">
          <div className="lg:hidden pr-4">
            <FaBars
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-16 right-0 bg-white w-full h-screen ${showMenu ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col">
            {Navmenu.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({isActive})=>`
                  border
                  text-sm py-2 flex items-center duration-200
                     px-4 ${isActive?" bg-red-600 text-gray-200":"hover:text-red-500"}
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
                     px-4 ${isActive?" bg-red-600 text-gray-200":"hover:text-red-500"}
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
