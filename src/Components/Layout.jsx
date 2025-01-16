import React from 'react';
import Sidebar from './SIdebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 ">
        <div className='hidden lg:block'>
        <Sidebar />
        </div>
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
