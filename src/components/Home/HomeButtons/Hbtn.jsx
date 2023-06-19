import React from 'react';
import {Link} from 'react-router-dom';
import './Hbtn.css';

const Hbtn = (props) => {
   
  return (
    <div className='Hbtn'>
        <button>
      <Link className='PageLink' to={props.path}>{props.InnerBtn}</Link>
        </button>
    </div>
  )
}

export default Hbtn
