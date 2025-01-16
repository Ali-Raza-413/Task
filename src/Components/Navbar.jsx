import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f9f9fb] shadow-sm rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <img src="/a2.png" alt="logo" width={150} height={23} />
        </div>

        <div className="flex-grow flex items-center justify-center space-x-4">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="w-[460px] h-[48px] pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src="/a4.png" alt="Search" className="w-5 h-5" />
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <img
            src="/a1.png"
            alt="Notifications"
            className="w-10 h-10 hidden lg:block"
          />
          <div className="hidden lg:flex items-center gap-3">
            <img src="/a3.png" alt="user" className="w-10 h-10" />
            <div>
              <p className="text-md text-[#444753] font-[400]">Tim Bouwman</p>
              <p className="text-sm text-[#8F95A9] font-[500]">
                Aēstec Amsterdam
              </p>
            </div>
          </div>
          <img
            src="/a5.png"
            alt="downarrow"
            className="w-[20px] hidden lg:block"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[48px] pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <img src="/a4.png" alt="Search" className="w-5 h-5" />
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <img src="/a1.png" alt="Notifications" className="w-10 h-10" />
            <div className="flex items-center gap-3">
              <img src="/a3.png" alt="user" className="w-10 h-10" />
              <div>
                <p className="text-md text-[#444753] font-[400]">Tim Bouwman</p>
                <p className="text-sm text-[#8F95A9] font-[500]">
                  Aēstec Amsterdam
                </p>
              </div>
            </div>
            <img src="/a5.png" alt="downarrow" className="w-[20px]" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
