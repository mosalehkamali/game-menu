import React from 'react';
import {Link , useLocation} from 'react-router-dom';


function NavBar() {
    const a = useLocation()
    const b = a.pathname
  
      return (
        
        <div className="NavBar">
        <h1>NAV{b}</h1>
     
        </div>
      
      );

  }
  
  export default NavBar;