import React from 'react';
import ReactDOM from 'react-dom';

class FindDOM extends React.Component{
  constructor(){
    super();
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  }

  findDomNodeHandler(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green'
  }

  render(){
    return(
      <div>
        <button onClick = {this.findDomNodeHandler}>FIND DOM NODE</button>
        <div id = "myDiv">NODE</div>
      </div>
    );
  }
}

export default FindDOM;
