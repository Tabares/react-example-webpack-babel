import React from 'react';

class State extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      header: "This header is from state...",
      "content": "Content from state... fill the state",
      "definition": "State is the place where the data comes fromState is the place where the data comes from"
    }
  }
  render(){
    return(
      <div>
        <h2>{this.state.header}</h2>
        <h3>{this.state.content}</h3>
        <h4>{this.state.definition}</h4>


      </div>
    );
  }
}

export default State;
