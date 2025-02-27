import React from 'react';
import { Link } from 'wouter';
import {
  FaUser,
  FaCog,
  FaMicrophone,
  FaLaptop,
  FaBell,
  FaSignOutAlt,
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <h2 className="text-xl font-bold">Settings</h2>
      </div>
      <ul className="flex flex-col p-4">
        <li className="mb-2">
          <Link to="/profile">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaUser className="mr-2" /> Profile
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/account">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaCog className="mr-2" /> Account
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/chat">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaMicrophone className="mr-2" /> Chat
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/voice-video">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaLaptop className="mr-2" /> Voice & Video
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/appearance">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaLaptop className="mr-2" /> Appearance
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/notification">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaBell className="mr-2" /> Notification
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/logout">
            <a className="flex items-center p-2 text-gray-700 hover:bg-gray-300 rounded-md">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;