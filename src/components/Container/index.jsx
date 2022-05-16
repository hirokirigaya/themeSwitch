import React from 'react'

import './container.css'

function index(props) {

  return (
    <div className='container' data-theme={props.theme}>
      <button onClick={props.toggleTheme}>Toggle theme</button>
      {props.children}
    </div>
  )
}

export default index