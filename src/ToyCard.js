import React from 'react'

export default class ToyCard extends React.PureComponent {

  //This component could've been written as a function

  //When you need a class component
  //1. You need state
  //2. You need a lifecycle method
  //3. PureComponent to prevent unnecessary rendering
  //Remember that components re-render when props change OR when state changes
  //When components re-render all of their children also re-render

  handleLike = (e) => {
    let toyId = parseInt(e.target.dataset.toyid)

    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({"likes": this.props.likes + 1})
    })

    //optomistic rendering
    this.props.addLike(toyId)
  }

  handleDelete = (e) => {
    let toyId = parseInt(e.target.dataset.toyid)

    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    })

    //optomistic rendering
    this.props.deleteToy(toyId)
  }

  render(){
    console.log("Rendering component for " + this.props.id);
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.img} className="toy-avatar"/>
        <p>{this.props.likes} Likes </p>
        <button data-toyid={this.props.id} onClick={this.handleLike} className="like-btn">Like &lt;3</button>
        <button data-toyid={this.props.id} onClick={this.handleDelete}>Delete &lt;/3</button>
      </div>
    )
  }
}
