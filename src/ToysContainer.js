import React from 'react'

import ToyCard from './ToyCard'

export default class ToysContainer extends React.Component {


  render(){
    console.log("Toy container rendering!");
    return(
      <div id="toy-container">
        {this.props.toys.map(toyObj => <ToyCard key={toyObj.name} id={toyObj.id} name={toyObj.name} img={toyObj.image} likes={toyObj.likes} deleteToy={this.props.deleteToy} addLike={this.props.addLike}/>)}
      </div>
    )
  }
}
