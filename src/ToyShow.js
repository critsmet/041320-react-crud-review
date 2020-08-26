import React from 'react'
import { Route } from 'react-router-dom'

export default function ToyShow(props){
  console.log(props)
  let id = parseInt(props.match.params.id)
  let toy = props.allToys.find(toy => toy.id === id )
  console.log(toy);
  if (toy){
    return (
      <div className="toy-show">
        <Route path="/toys/:id/loggedIn">
          <div>You are only seeing this if you're logged in<br/><br/></div>
        </Route>
        Name: {toy.name} <img src={toy.image} />
      </div>
    )
  } else {
    return <div className="toy-show"></div>
  }
}
