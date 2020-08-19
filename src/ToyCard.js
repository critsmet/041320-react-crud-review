import React from 'react'

export default class ToyCard extends React.PureComponent {

  render(){
    console.log("Rendering component for " + this.props.id);
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.img} className="toy-avatar"/>
        <p>{this.props.likes} Likes </p>
        <button data-toyid={this.props.id} onClick={this.props.addLike} className="like-btn">Like &lt;3</button>
      </div>
    )
  }
}
