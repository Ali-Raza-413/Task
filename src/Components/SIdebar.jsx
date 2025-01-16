import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(1);

  const sidebarItems = [
    { id: 1, to: "/dashboard", icon: "/a6.png", label: "DASGBOARD" },
    { id: 2, to: "/inbox", icon: "/a7.png", label: "INBOX", count: 2 },
    { id: 3, to: "/schedule", icon: "/a8.png", label: "Schedule" },
    { id: 4, to: "/reviews", icon: "/a9.png", label: "Reviews", count: 6 },
    { id: 5, to: "/settings", icon: "/a10.png", label: "SETTINGS" },
  ];

  return (
    <div className="w-[96px] bg-[#f9f9fb] h-screen mt-1 flex flex-col rounded-md">
      <ul className="flex flex-col space-y-2 flex-grow overflow-hidden py-3">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`relative flex items-center flex-col gap-1 p-5 rounded-lg cursor-pointer ${
              activeItem === item.id ? "" : "text-[#8F95A9]"
            }`}
          >
            <Link
              to={item.to}
              onClick={() => setActiveItem(item.id)}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-[24px] h-[24px] mb-2"
                />
                {item.count && (
                  <span className="absolute bottom-6 left-3 right-0 bg-[#F88080] text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center rounded-full z-10">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-[500] text-[#8F95A9] z-50">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <li
        onClick={() => console.log("Logging out")}
        className="flex items-center flex-col p-3 rounded-lg cursor-pointer text-[#8F95A9] mb-20"
      >
        <img
          src="/logout.png"
          alt="Logout"
          className="w-[24px] h-[24px] flex items-center"
        />
        <span className="text-[9px] font-[500] text-[#8F95A9]">Logout</span>
      </li>
    </div>
  );
};

export default Sidebar;
