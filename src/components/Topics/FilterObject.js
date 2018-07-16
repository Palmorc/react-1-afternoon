import React, { Component } from 'react';

export default class FilterObject extends Component{

  constructor(){
    super();

    this.state={
      friends : [
       {
         name : 'Palmer',
         username : 'Palmorc',
         hairColor : 'Brown'
       },
       {
         name : 'Brandon',
         username : 'Maethor'
       },
       {
         name : 'Jesse',
         username : 'Recklessfun'
       },
       {
        name : 'Austin',
         username : 'Kairos'
       },
       {
          name : 'Phil',
          username :'NightsCreatures'
       }
    ],
      userInput: '',
      filteredFriends: []
    }
  }

  handleChange(value){
  this.setState({ userInput : value })
  }

  filterFriends(prop){
    let friends = this.state.friends;
    let filteredFriends = [];

    for (var i = 0; i < friends.length; i++) {
      if (friends[i].hasOwnProperty(prop)) {
        filteredFriends.push(friends[i])
        }
      }
      this.setState({ filteredFriends: filteredFriends });
    }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.friends, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterFriends(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFriends, null, 10) } </span>
      </div>
    )
  }


}
