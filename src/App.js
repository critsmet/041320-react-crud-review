import React from 'react';
import './App.css';

import ToysContainer from './ToysContainer'
import Form from './Form'
import ToyHeader from './ToyHeader'

export default class App extends React.Component {

  state = {
    toys: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysArray => this.setState({toys: toysArray}))
  }

  addLike = (e) => {
    let toyId = e.target.dataset.toyid
    let toy = this.state.toys.find(toy => toy.id === parseInt(toyId))

    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({"likes": toy.likes + 1})
    })

    //optimistic rendering
    this.setState(prevState => ({toys: prevState.toys.map(toyObj => toyObj.id === parseInt(toyId) ? {...toyObj, likes: toyObj.likes + 1} : toyObj)}), () => console.log(this.state))
  }

  addNewToy = (obj) => {
    this.setState(prevState => ({toys: [...prevState.toys, obj]}))
  }

  render(){
    return (
      <div className="App">
        <ToyHeader />
        <Form addNewToy={this.addNewToy}/>
        <ToysContainer toys={this.state.toys} addLike={this.addLike}/>
      </div>
    )
  }
}
