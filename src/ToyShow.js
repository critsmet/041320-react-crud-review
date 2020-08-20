import React from 'react'

export default function ToyShow(props){
  console.log(props)
  let id = parseInt(props.match.params.id)
  let toy = props.allToys.find(toy => toy.id === id )
  console.log(toy);
  if (toy){
    return (
      <div>Name: {toy.name} <img src={toy.image} /></div>
    )
  } else {
    return <div></div>
  }
}
