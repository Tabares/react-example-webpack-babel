import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p><h1> Master started kit with React, webpack and babel!</h1><br/><p>Npm as tool runner</p></p>;
  }
}

render(<App/>, document.getElementById('app'));
