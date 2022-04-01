import React from 'react';
import '../css/Qa.css' 
import Feed from './Feed';
import Navbar from './Navbar';
import SidebarQ from './SidebarQ';

function Qa() {
  return (
  <div className='Qa'>
      <div className="qa__content">
        <SidebarQ/>
        <Feed />
      </div>
  </div>
  )
}
export default Qa;
