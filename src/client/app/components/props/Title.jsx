import React from 'react';

class Title extends React.Component{
  render(){
    return(
      <h1>{this.props.headerProp}</h1>
    )
  }
}

export default Title;
