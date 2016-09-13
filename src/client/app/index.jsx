import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './Component.jsx';
import JSX from './JSX.jsx';
import Table from './components/table/Table.jsx';
import State from './components/State.jsx';
import Title from './components/props/Title.jsx';
import Body from './components/props/Body.jsx';
import Validation from './components/props/Validation.jsx';
import SetState from './components/SetState.jsx';
import ForceUpdate from './components/ForceUpdate.jsx';
import FindDOM from './components/FindDOM.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "the title",
      body: "This is my body injected to the Component"
    }
  }

  render () {
    return (
      <div>
        <h1> Master started kit with React, webpack and babel!</h1>
        <br/><p>Npm as tool runner</p>
        <br/><h1> This is a Component!</h1>
        <AwesomeComponent/>
        <JSX/>
        <Table/>
        <State/>
        <Title headerProp= {this.state.header}/>
        <Body bodyProp= {this.state.body}/>
        <Validation/>
        <h3>{this.props.footer}</h3>
        <SetState/>
        <ForceUpdate/>
        <FindDOM/>

      </div>
    );
  }
}

App.defaultProps = {
   footer: "Injected footer...",
}

render(<App/>, document.getElementById('app'));
