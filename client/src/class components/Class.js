import React from 'react'
import "./Class.css";
import { NavLink } from "react-router-dom";

export default function Class(props) {
  const name = props.name
  return (
    <div className="class" style={{width: "50%", margin: "0 auto"}}>
      <button className='classPageButton'>
        <NavLink to={{pathname: '/ClassPage'}} state={{className: {name}}}>
          <span>{props.name}</span>
        </NavLink>
      </button>
    </div>
  )
}
