import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  PlusSquare,
  Download,
  UserRound
} from 'lucide-react';

const Header = ({ user }) => {
  return (
    <header className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white text-gray-800 rounded-full shadow-lg px-4 py-2 flex items-center justify-between backdrop-blur-md sm:px-6 sm:py-3">

      {/* Left: Expenso Logo */}
      <div className="text-base sm:text-xl font-bold text-blue-700 tracking-wide">
        Expenso
      </div>

      {/* Center: Navbar Icons Only with Hover and Active State */}
      <nav className="flex gap-4 sm:gap-8 items-center">
        <NavLink
          to="/analysis"
          className={({ isActive }) =>
            `group flex flex-col items-center transition ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 group-hover:-translate-y-[2px]" />
        </NavLink>

        <NavLink
          to="/add-expense"
          className={({ isActive }) =>
            `group flex flex-col items-center transition ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          <Download className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 group-hover:-translate-y-[2px]" />
        </NavLink>

        <NavLink
          to="/add-income"
          className={({ isActive }) =>
            `group flex flex-col items-center transition ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 group-hover:-translate-y-[2px]" />
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `group flex flex-col items-center transition ${
              isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`
          }
        >
          <UserRound className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-200 group-hover:-translate-y-[2px]" />
        </NavLink>
      </nav>

      {/* Right: Profile Avatar */}
      <NavLink to="/profile" className="flex items-center gap-2">
        <img
          src={user?.profilePic || '/default-avatar.png'}
          alt="User Avatar"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border object-cover shadow"
        />
      </NavLink>
    </header>
  );
};

export default Header;
