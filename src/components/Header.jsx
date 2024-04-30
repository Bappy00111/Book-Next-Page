import {
  Bars3BottomRightIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" flex justify-between items-center px-2 py-5 bg-slate-100  lg:px-8">
      <Link to="/" className="inline-flex items-center ">
        <BoltIcon className="w-6 h-6 text-blue-500" />
        <span className="ml-4 font-semibold text-xl tracking-wide text-gray-800">
          Next Page
        </span>
      </Link>

      <ul className="lg:flex space-x-8 font-medium text-lg hidden  ">
        <li>
          <NavLink
            to="/"
            title="Home"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default:"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            title="Books"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default:"
            }
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            title="About"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "default:"
            }
          >
            About
          </NavLink>
        </li>
      </ul>

      {/* mobile navber section  */}
      <div className="lg:hidden">
        <button onClick={() => setMenu(true)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-black" />
        </button>
        {menu && (
          <div className="absolute top-0 left-0 w-full z-10 p-5">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className="ml-2 text-sm md:text-xl font-bold tracking-wide text-gray-800 uppercase">
                      nextPage
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setMenu(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <ul className="space-y-4 ">
                <li>
                  <NavLink
                    to="/"
                    title="Home"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "default:"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    title="Books"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "default:"
                    }
                  >
                    Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    title="About"
                    className={({ isActive }) =>
                      isActive ? "text-blue-500" : "default:"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
