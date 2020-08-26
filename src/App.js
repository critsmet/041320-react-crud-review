import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import ToysContainer from './ToysContainer'
import Form from './Form'
import ToyHeader from './ToyHeader'
import ToyShow from './ToyShow'

export default class App extends React.Component {

  state = {
    toys: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/toys")
      .then(res => res.json())
      .then(toysArray => this.setState({toys: toysArray}))
  }

  addLike = (toyId) => {

    function addLikeToToy(toyObj){
      return toyObj.id === toyId ? {...toyObj, likes: toyObj.likes + 1} : toyObj
    }

    function makeNewState(prevState){
      return {toys: prevState.toys.map(addLikeToToy)}
    }

    this.setState(makeNewState)

  }

  addNewToy = (obj) => {
    this.setState(prevState => ({toys: [...prevState.toys, obj]}))
  }

  deleteToy = (toyId) => {

    function removeToy(toyObj){
      return toyObj.id !== toyId
    }

    function makeNewStateWithoutToy(prevState){
      return {toys: prevState.toys.filter(removeToy)}
    }
    //return the toys array WITHOUT the toy that we want to delete
    this.setState(makeNewStateWithoutToy)

    //this.setState(whatEverYouWant => ({toys: whatEverYouWant.toys.filter(toyObj => toyObj.id !== toyId)}))
  }
  // setState = (arg) => {
  //   //context
  //   if (arg.isAnOBject?){
  //     //combine this object with the current version of state
  //   } else {
  //     arg(prevState)
  //   }
  // }

  //<button onClick={this.changePage}>{this.state.page === "toys" ? 'View Form' : 'View Toys'}</button>
  render(){
    return (
      <div className="App">
        <ToyHeader />
        <Switch>
          <Route exact path="/toys" render={() =><ToysContainer toys={this.state.toys} deleteToy={this.deleteToy} addLike={this.addLike}/>} />
          <Route path="/toys/:id" render={(routerProps) => <ToyShow {...routerProps} allToys={this.state.toys} />} />
          <Route path="/form" render={(routerProps) => <Form {...routerProps} addNewToy={this.addNewToy}/>}/>
          <Route path="/home">
            <div>Welcome to Toytale</div>
          </Route>
        </Switch>
      </div>
    )
  }
}














//
