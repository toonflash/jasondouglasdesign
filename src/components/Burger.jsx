// Burger.js
import React from 'react';

const Burger = ({ open, setOpen }) => {
  return (
    <button
      className={`hamburger hamburger--squeeze ${open ? " is-active" : ""}`}
      type="button"
      open={open}
      onClick={() => setOpen(!open)}
    >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
    </button>
  )
}

export default Burger;