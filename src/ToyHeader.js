import React from 'react'

import { Link } from 'react-router-dom'

export default function ToyHeader(){
  return (
    <div id="toy-header">
      <img
        src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
        alt="toy-header"
      />
      <br/>
      <Link to="/Home"><button>Go Home</button></Link>
      <Link to="/form"><button>Go To Form</button></Link>
      <Link to="/toys"><button>Go To Toys</button></Link>
    </div>
  )
}
