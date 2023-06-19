import React from 'react'
import {Link , useLocation} from 'react-router-dom';

const Store = () => {
    const a = useLocation()
    const b = a.pathname
  return (
    <div>
      <h1>this is store {b}</h1>
    </div>
  )
}

export default Store
