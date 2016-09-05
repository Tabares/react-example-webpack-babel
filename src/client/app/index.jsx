import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './Component.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Master started kit with React, webpack and babel!</h1>
        <br/><p>Npm as tool runner</p>
        <br/><h1> This is a Component!</h1>
        <AwesomeComponent/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
