import React from 'react'

import "./styles.css"

const MenuItem = ({ name, onClick, xmlns, viewBox, d }) => {
  return (
    <button
      type='button'
      className="button-menu"
      onClick={onClick}
    >
      {/* <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <svg xmlns={xmlns} viewBox={viewBox}>
        <path d={d}/>
      </svg>

      <span>{name}</span>
    </button>
  )
}

export default MenuItem
